import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import ProductCard from "./ProductCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const AllProductsGrid = ({ products }) => {
  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <Grid
        container
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", overflow: "auto" }}
        spacing={4}
      >
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Grid>
    </div>
  );
};

export default AllProductsGrid;
