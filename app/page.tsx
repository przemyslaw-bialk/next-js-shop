import Carousel from "./(SHOP)/components/Carousel";
import CategoryList from "./(SHOP)/components/CategoryList";

export default function Home() {
  return (
    <div>
      <h1 className=" text-2xl  uppercase">HOME</h1>
      <Carousel />
      <CategoryList />
    </div>
  );
}
