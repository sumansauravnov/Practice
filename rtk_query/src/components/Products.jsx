import React from "react";
import { useGetAllProductsQuery } from "../Redux/apiService";

const Products = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  return (
    <>
      <h1>Products</h1>
      <div>
        {data?.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
