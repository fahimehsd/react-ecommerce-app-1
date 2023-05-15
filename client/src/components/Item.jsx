import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { shades } from "../theme";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  addToCart,
  decreaseCount,
  increaseCount
} from "../state/slices/cartSlice";
const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const {
    pallete: { neutral }
  } = useTheme();

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url }
        }
      }
    }
  } = image;

  return (
    <Box width={width}>
      <Box
        position={"relative"}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          src={`http://localhost:1337${url}`}
          alt={item.name}
          width={"300px"}
          height={"400px"}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position={"absolute"}
          bottom={"10%"}
          left={0}
          width={"100%"}
          padding={"0 5%"}
        >
          <Box display={"flex "} justifyContent={"space-between"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              backgroundColor={shades.neutral[100]}
              borderRadius={"3px"}
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton
                onClick={() => dispatch(increaseCount({ id: item.id }))}
              >
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
        <Box mt={"3px"}>
          <Typography variant="subtitle2" color={neutral.dark}>
            {category
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </Typography>
          <Typography>{name} </Typography>
          <Typography fontWeight={"bold"}>{price} </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
