import React from 'react';
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}
interface Props {
  product: Product;
  onAddToCart: () => void;
}
const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
    <h3 className="font-semibold mb-2">{product.name}</h3>
    <p className="mb-4">{product.price}</p>
    <button onClick={onAddToCart} className="bg-black text-white px-4 py-2 rounded">
      Add to Cart
    </button>
  </div>
);
export default ProductCard;
