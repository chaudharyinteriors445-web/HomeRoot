import ProductCard from '../ProductCard';
import { products } from '@/data/products';

export default function ProductCardExample() {
  const product = products[0];
  return (
    <div className="max-w-sm">
      <ProductCard product={product} />
    </div>
  );
}
