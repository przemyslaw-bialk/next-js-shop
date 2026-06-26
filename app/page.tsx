import Carousel from "./(SHOP)/components/Carousel";
import CategoryList from "./(SHOP)/components/CategoryList";
import Features from "./(SHOP)/components/Features";
import FreeShippingInfo from "./(SHOP)/components/FreeShippingInfo";
import InfoSale from "./(SHOP)/components/InfoSale";
import Newsletter from "./(SHOP)/components/Newsletter";

export default function Home() {
  return (
    <div>
      <Carousel />
      <CategoryList />
      <div className="flex items-end justify-center gap-6">
        <InfoSale />
        <FreeShippingInfo />
      </div>

      <Features />
      <Newsletter />
    </div>
  );
}
