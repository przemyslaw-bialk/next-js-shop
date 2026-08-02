import { findProductByIdAction } from "@/app/actions/products";
import NotFound from "@/app/not-found";
import mongoose from "mongoose";
import Image from "next/image";
import ProductInfo from "../../components/ProductInfo";

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
    <div>
      <h2>product page here</h2>
      <div className="flex gap-5 h-65">
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
    </div>
  );
};

export default ProductPage;
