import Carousel from "./(SHOP)/components/Carousel";
import CategoryList from "./(SHOP)/components/CategoryList";
import FreeShippingInfo from "./(SHOP)/components/FreeShippingInfo";
import InfoSale from "./(SHOP)/components/InfoSale";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CategoryList />
      <div className="flex items-end justify-center gap-6">
        <InfoSale />
        <FreeShippingInfo />
      </div>
      <div className="h-48 bg-red-100">test</div>
    </div>
  );
}
