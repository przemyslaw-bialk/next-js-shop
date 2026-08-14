import Bestsellers from "./(SHOP)/components/Bestsellers";
import Carousel from "./(SHOP)/components/Carousel";
import CategoryList from "./(SHOP)/components/CategoryList";
import Features from "./(SHOP)/components/Features";
import Footer from "./(SHOP)/components/footer/Footer";
import FreeShippingInfo from "./(SHOP)/components/FreeShippingInfo";
import InfoSale from "./(SHOP)/components/InfoSale";
import Newsletter from "./(SHOP)/components/Newsletter";
import TopInfoBanner from "./(SHOP)/components/TopInfoBanner";
import Header from "./components/Header";
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
