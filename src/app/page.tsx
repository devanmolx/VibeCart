import Catagories from "@/components/Catagories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Slider from "@/components/Slider";
import UpdateUserDetails from "@/components/UpdateUserDetails";
import { Categories } from "@/lib/Categories";
import { Products } from "@/lib/Products";

export default function Home() {

  return (
    <>
    <UpdateUserDetails />
      <Slider />
      <div className="  mt-10 px-4 md:px-8 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl font-semibold my-4">Featured Products</h1>
        <FeaturedProducts products={Products} />
      </div>
      <div className="  mt-16 px-4 md:px-8 xl:px-32 2xl:px-64">
        <h1 className=" text-2xl font-semibold my-4">Categories</h1>
        <Catagories categories={Categories} />
      </div>
    </>
  );
}
