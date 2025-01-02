import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),

  tagTypes:["products"],

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
      providesTags:["products"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    deleteProductById:builder.mutation({
        query:(id)=>({
            url:`products/${id}`,
             method:"DELETE"
        }),
        invalidatesTags:["products"],
    })
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useDeleteProductByIdMutation } = productApi;


