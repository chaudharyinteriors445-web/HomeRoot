import { Link } from 'wouter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-visible hover-elevate">
      <div className="aspect-square overflow-hidden rounded-t-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-product-${product.slug}`}
        />
      </div>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {product.badges.slice(0, 2).map((badge) => (
            <Badge 
              key={badge} 
              variant="secondary" 
              className="text-xs bg-organic-green/10 text-organic-green dark:bg-organic-green/20"
            >
              {badge}
            </Badge>
          ))}
        </div>
        <h3 className="font-heading font-bold text-lg mb-1" data-testid={`text-product-name-${product.slug}`}>
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="font-bold text-wheat text-lg" data-testid={`text-product-price-${product.slug}`}>
          ₹{product.price} <span className="text-sm font-normal text-muted-foreground">{product.priceUnit}</span>
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/products/${product.slug}`} className="w-full">
          <Button className="w-full bg-wheat text-wheat-foreground" data-testid={`button-view-${product.slug}`}>
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
