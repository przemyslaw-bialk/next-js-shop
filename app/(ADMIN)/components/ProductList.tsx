type ProductProps = {
  product: {
    name: string;
    stock: number;
    price: number;
  };
};

const ProductList = ({ product }: ProductProps) => {
  return (
    <div className="flex items-center gap-1">
      <p>name: {product.name}</p>
      <p>stock: {product.stock}</p>
      <p>price: {product.price}</p>
    </div>
  );
};

export default ProductList;
