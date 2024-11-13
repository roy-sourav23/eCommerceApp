import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { itemAdded } from "../app/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { title, id, price, description, category, image, rating } = product;
  return (
    <div>
      <div className="w-[320px] h-[450px] rounded-lg">
        <Link to={`/products/${id}`}>
          <div className="w-full h-[50%] m-auto bg-white border border-slate-200 ">
            <img src={image} className="w-[90%] h-[90%] object-contain " />
          </div>
        </Link>
        <div className="w-full h-[50%] p-3 bg-slate-300">
          <small className="py-3">{category}</small>
          <p className="text-md">{title}</p>
          <p className="px-6 text-lg">Price : $ {price}</p>
          <div className="flex items-center justify-start">
            <Rating
              name="read-only"
              value={rating.rate}
              readOnly
              className=""
            />
            <span>{rating.count}</span>
          </div>
          <Button
            variant="contained"
            onClick={() => dispatch(itemAdded(product))}
            className="mx-auto my-3"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
