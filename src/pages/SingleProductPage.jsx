import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../api/api";

const SingleProductPage = () => {
  const { id } = useParams();

  const fetchSingleProduct = (id) => {
    return axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}${id}`);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchSingleProduct(id),
  });

  console.log("data", data?.data);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (isError) {
    return <p>error has occured: {error.message}</p>;
  }
  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
