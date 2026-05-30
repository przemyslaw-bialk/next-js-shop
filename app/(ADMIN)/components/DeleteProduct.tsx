import { deleteProductAction } from "@/app/actions/products";

const DeleteProduct = ({ id }: { id: string }) => {
  return (
    <form action={deleteProductAction.bind(null, id)}>
      <button type="submit">DELETE</button>
    </form>
  );
};

export default DeleteProduct;
