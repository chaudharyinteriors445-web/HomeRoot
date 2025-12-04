import { useParams, Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Check, ChefHat } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const relatedProducts = getRelatedProducts(slug || '', 3);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
        <Link href="/products">
          <Button className="bg-wheat text-wheat-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products">
        <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back-products">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="aspect-square rounded-md overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            data-testid="img-product-detail"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.badges.map((badge) => (
              <Badge 
                key={badge} 
                className="bg-organic-green/10 text-organic-green dark:bg-organic-green/20"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2" data-testid="text-product-title">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-wheat mb-4" data-testid="text-product-detail-price">
            ₹{product.price} <span className="text-base font-normal text-muted-foreground">{product.priceUnit}</span>
          </p>

          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>

          <WhatsAppButton productName={product.name} />

          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="font-heading font-bold text-lg mb-3 flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-wheat" />
              Ideal Usage
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.idealUsage.map((usage) => (
                <Badge key={usage} variant="secondary">
                  {usage}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Health Benefits</h3>
            <ul className="space-y-2">
              {product.healthBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-organic-green mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="font-heading">Nutritional Information</CardTitle>
          <p className="text-sm text-muted-foreground">Per 100g serving</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-md">
              <p className="text-2xl font-bold text-wheat">{product.nutritionalInfo.calories}</p>
              <p className="text-sm text-muted-foreground">Calories</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-md">
              <p className="text-2xl font-bold text-wheat">{product.nutritionalInfo.protein}</p>
              <p className="text-sm text-muted-foreground">Protein</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-md">
              <p className="text-2xl font-bold text-wheat">{product.nutritionalInfo.carbs}</p>
              <p className="text-sm text-muted-foreground">Carbs</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-md">
              <p className="text-2xl font-bold text-wheat">{product.nutritionalInfo.fiber}</p>
              <p className="text-sm text-muted-foreground">Fiber</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-md">
              <p className="text-2xl font-bold text-wheat">{product.nutritionalInfo.fat}</p>
              <p className="text-sm text-muted-foreground">Fat</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-heading text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
