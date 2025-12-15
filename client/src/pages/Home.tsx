import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Thermometer, Heart, Wheat } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@assets/generated_images/image.png';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <section 
        className="relative min-h-[85vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight" data-testid="text-hero-title">
            Pure Atta. Ancient Grains.<br />Modern Health.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Discover our collection of stone-ground organic flours, crafted from 
            heritage grains to nourish your family with every roti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-wheat text-wheat-foreground gap-2" data-testid="button-explore-products">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/stone-ground-benefits">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white/30 text-white"
                data-testid="button-learn-stone-ground"
              >
                Learn About Stone-Ground
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" data-testid="text-featured-title">
            Our Atta Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient Khapli wheat to nutritious millets, explore our range of 
            stone-ground organic flours for a healthier lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/products">
            <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6" data-testid="text-why-stone-ground">
                Why Stone-Ground Atta?
              </h2>
              <p className="text-muted-foreground mb-8">
                Unlike traditional chakki mills that generate high heat (120-150°C), 
                our stone-grinding process keeps temperatures below 40°C, preserving 
                vital nutrients and natural oils.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                    <Thermometer className="h-6 w-6 text-wheat" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Lower Heat, Higher Nutrients</h3>
                    <p className="text-sm text-muted-foreground">
                      Preserves Vitamin B1, B2, B3 & folate that are destroyed by high heat.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-wheat" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Better Wheat-Germ Oil Retention</h3>
                    <p className="text-sm text-muted-foreground">
                      Preserves Vitamin E, Omega-3, and natural antioxidants.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                    <Wheat className="h-6 w-6 text-wheat" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Lower Glycemic Index</h3>
                    <p className="text-sm text-muted-foreground">
                      Natural starch structure for slower sugar release.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/stone-ground-benefits">
                <Button className="mt-8 bg-wheat text-wheat-foreground gap-2" data-testid="button-read-science">
                  Read the Science
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Card className="overflow-visible">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">Quick Comparison</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-organic-green/10 rounded-md">
                      <span className="font-medium">Stone-Ground Temp</span>
                      <span className="text-organic-green font-bold">~40°C</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                      <span className="font-medium">Chakki Temp</span>
                      <span className="text-muted-foreground">120-150°C</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-organic-green/10 rounded-md">
                      <span className="font-medium">Nutrient Retention</span>
                      <span className="text-organic-green font-bold">95-98%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                      <span className="font-medium">Chakki Retention</span>
                      <span className="text-muted-foreground">60-70%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-wheat/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of health-conscious families who have switched to 
            Home Root stone-ground atta for healthier, tastier rotis.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-wheat text-wheat-foreground gap-2" data-testid="button-shop-now">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
