'use client'
import useUpdateUser from "@/lib/useUpdateUser";
import Catagories from "./components/Catagories";
import FeaturedProducts from "./components/FeaturedProducts";
import Slider from "./components/Slider";
import { useEffect } from "react";

export default function Home() {
  const updateUser = useUpdateUser();

  useEffect(() => {
    updateUser()
  } , [updateUser])
  return (
    <>
      <Slider />
      <div className="  mt-10 px-4 md:px-8 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl font-semibold my-4">Featured Products</h1>
        <FeaturedProducts />
      </div>
      <div className="  mt-16 px-4 md:px-8 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl font-semibold my-4">Categories</h1>
        <Catagories />
      </div>
    </>
  );
}
