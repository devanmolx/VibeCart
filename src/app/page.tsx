import Catagories from "./components/Catagories";
import FeaturedProducts from "./components/FeaturedProducts";
import Slider from "./components/Slider";
import axios from "axios";
import { allCategoriesRoute, getFeaturedProductsRoute } from "@/lib/routeProvider";

export default async function Home() {

  const categoriesRes = await axios.get(allCategoriesRoute)
  const productsRes = await axios.get(getFeaturedProductsRoute);

  return (
    <>
      <Slider />
      <div className="  mt-10 px-4 md:px-8 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl font-semibold my-4">Featured Products</h1>
        <FeaturedProducts products={productsRes.data.products} />
      </div>
      <div className="  mt-16 px-4 md:px-8 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl font-semibold my-4">Categories</h1>
        <Catagories categories={categoriesRes.data.categories} />
      </div>
    </>
  );
}
