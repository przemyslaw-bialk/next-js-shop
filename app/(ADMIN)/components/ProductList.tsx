type ProductProps = {
  product: {
    name: string;
    stock: number;
    price: number;
  };
};

const ProductList = ({ product }: ProductProps) => {
  return (
    <div className="flex gap-2 border w-full p-3 rounded-2xl mr-2">
      <p>
        <span className="font-semibold">name:</span> {product.name}
      </p>
      <p>
        <span className="font-semibold">stock:</span> {product.stock}pc
      </p>
      <p>
        <span className="font-semibold">price:</span> {product.price}$
      </p>
    </div>
  );
};

export default ProductList;
