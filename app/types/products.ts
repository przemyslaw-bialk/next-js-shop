export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  sizes?: string[];
  image?: {
    _id: string;
    image_url: string;
    public_id: string;
  };
  _id: string;
};
