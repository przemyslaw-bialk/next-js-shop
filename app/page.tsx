import Carousel from "./(SHOP)/components/Carousel";
import CategoryList from "./(SHOP)/components/CategoryList";
import InfoSale from "./(SHOP)/components/InfoSale";
import InfoSale2 from "./(SHOP)/components/InfoSale2";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CategoryList />
      <div className="flex items-end justify-center gap-6">
        <InfoSale />
        <InfoSale2 />
      </div>
      <div className="h-48 bg-red-100">test</div>
    </div>
  );
}
