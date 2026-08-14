import Bestsellers from "./(SHOP)/components/product/Bestsellers";
import Carousel from "./(SHOP)/components/slider/Carousel";
import CategoryList from "./(SHOP)/components/product/CategoryList";
import Features from "./(SHOP)/components/features/Features";
import Footer from "./(SHOP)/components/footer/Footer";
import FreeShippingInfo from "./(SHOP)/components/promotional/FreeShippingInfo";
import InfoSale from "./(SHOP)/components/promotional/InfoSale";
import Newsletter from "./(SHOP)/components/newsletter/Newsletter";
import TopInfoBanner from "./(SHOP)/components/header/TopInfoBanner";
import Header from "./(SHOP)/components/header/Header";
import { getAllProducts } from "./services/product.services";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div>
      <TopInfoBanner />
      <Header />
      <Carousel />
      <CategoryList />
      <Bestsellers products={products} />
      <div className="flex items-end justify-center gap-6">
        <InfoSale />
        <FreeShippingInfo />
      </div>

      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}
