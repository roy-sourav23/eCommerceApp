import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../api/api";
import axios from "axios";
import AllProductsGrid from "../components/AllProductsGrid";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const fetchProducts = () => {
    return axios.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  console.log("data", data?.data);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (isError) {
    return <p>error has occured: {error.message}</p>;
  }

  return (
    <div className="flex items-start justify-center">
      <Sidebar />
      {data?.data && <AllProductsGrid products={data?.data} />}
    </div>
  );
};

export default HomePage;
