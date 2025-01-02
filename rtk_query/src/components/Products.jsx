import React from "react";
import { useDeleteProductByIdMutation, useGetAllProductsQuery } from "../Redux/apiService";

const Products = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();
const [deleteProduct]=useDeleteProductByIdMutation();

  return (
    <>
      <h1>Products</h1>
      <div>
        {data?.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <button onClick={()=>deleteProduct(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
