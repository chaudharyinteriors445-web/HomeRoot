/*
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
*/
import { Link } from 'wouter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="group overflow-visible hover-elevate h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300 border-2 hover:border-wheat/30">
        <div className="aspect-square overflow-hidden rounded-t-md relative">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            data-testid={`img-product-${product.slug}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-5 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {product.badges.slice(0, 2).map((badge) => (
              <Badge 
                key={badge} 
                variant="secondary" 
                className="text-xs bg-organic-green/10 text-organic-green dark:bg-organic-green/20 border border-organic-green/20"
              >
                {badge}
              </Badge>
            ))}
          </div>
          <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-wheat transition-colors duration-200" data-testid={`text-product-name-${product.slug}`}>
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {product.shortDescription}
          </p>
          <p className="font-bold text-wheat text-xl" data-testid={`text-product-price-${product.slug}`}>
            ₹{product.price} <span className="text-sm font-normal text-muted-foreground">{product.priceUnit}</span>
          </p>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Link href={`/products/${product.slug}`} className="w-full">
            <Button 
              className="w-full bg-wheat text-wheat-foreground hover:bg-wheat/90 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md" 
              data-testid={`button-view-${product.slug}`}
            >
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
