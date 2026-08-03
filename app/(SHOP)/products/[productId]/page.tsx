import { findProductByIdAction } from "@/app/actions/products";
import NotFound from "@/app/not-found";
import mongoose from "mongoose";
import Image from "next/image";
import ProductInfo from "../../components/ProductInfo";
import Features from "../../components/Features";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return <NotFound />;
  }

  const product = await findProductByIdAction(productId);

  if (!product) {
    return <NotFound />;
  }
  const parsedProduct = JSON.parse(JSON.stringify(product));
  return (
    <div className="mt-2">
      <div className="flex gap-5 mb-10 ">
        <div className="relative w-1/2 bg-[#F4F2F0]">
          <Image
            src={product.image?.image_url || "/defaultProductImage.png"}
            alt="photo of the product"
            fill
            className="object-contain"
          />
        </div>
        <ProductInfo product={parsedProduct} />
      </div>
      <Features />
    </div>
  );
};

export default ProductPage;
