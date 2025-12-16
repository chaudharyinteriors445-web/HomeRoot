/*
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
*/
//New Cursor code 
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Thermometer, Heart, Wheat } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@assets/generated_images/image.png';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const productsSectionRef = useRef(null);
  const coldPressedSectionRef = useRef(null);
  const productsInView = useInView(productsSectionRef, { once: true, margin: "-100px" });
  const coldPressedInView = useInView(coldPressedSectionRef, { once: true, margin: "-100px" });

  return (
    <div>
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div 
          className="relative z-10 container mx-auto px-4 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight" 
            data-testid="text-hero-title"
            variants={fadeInUp}
          >
            Pure Atta. Ancient Grains.<br />Modern Health.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
            variants={fadeInUp}
          >
            Discover our collection of cold-pressed organic flours, crafted from 
            heritage grains to nourish your family with every roti.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-wheat text-wheat-foreground gap-2 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl" 
                data-testid="button-explore-products"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/cold-pressed-benefits">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200" 
                data-testid="button-learn-cold-pressed"
              >
                Learn About Cold-Pressed
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <TrustBadges />

      <section ref={productsSectionRef} className="py-20 container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-semibold mb-4" 
            data-testid="text-featured-title"
            variants={fadeInUp}
          >
            Our Atta Collection
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            variants={fadeInUp}
          >
            From ancient Khapli wheat to nutritious millets, explore our range of 
            cold-pressed organic flours for a healthier lifestyle.
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              custom={index}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={productsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/products">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 hover:scale-105 transition-transform duration-200 border-2" 
              data-testid="button-view-all"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="py-20 bg-card" ref={coldPressedSectionRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={coldPressedInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6" data-testid="text-why-cold-pressed">
                Why Cold-Pressed Atta?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Unlike traditional chakki mills that generate high heat (120-150°C), 
                our cold-pressing technology keeps temperatures below 40°C, preserving 
                vital nutrients and natural oils.
              </p>
              <div className="space-y-5">
                <motion.div 
                  className="flex gap-4 p-4 rounded-lg hover:bg-warm-beige/30 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                    <Thermometer className="h-6 w-6 text-wheat" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Lower Heat, Higher Nutrients</h3>
                    <p className="text-sm text-muted-foreground">
                      Preserves Vitamin B1, B2, B3 & folate that are destroyed by high heat.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex gap-4 p-4 rounded-lg hover:bg-warm-beige/30 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-wheat" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Better Wheat-Germ Oil Retention</h3>
                    <p className="text-sm text-muted-foreground">
                      Preserves Vitamin E, Omega-3, and natural antioxidants.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex gap-4 p-4 rounded-lg hover:bg-warm-beige/30 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                    <Wheat className="h-6 w-6 text-wheat" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Lower Glycemic Index</h3>
                    <p className="text-sm text-muted-foreground">
                      Natural starch structure for slower sugar release.
                    </p>
                  </div>
                </motion.div>
              </div>
              <Link href="/cold-pressed-benefits">
                <Button 
                  className="mt-8 bg-wheat text-wheat-foreground gap-2 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl" 
                  data-testid="button-read-science"
                >
                  Read the Science
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <Card className="overflow-visible shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">Quick Comparison</h3>
                  </div>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex justify-between items-center p-4 bg-organic-green/10 rounded-md border border-organic-green/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="font-medium">Cold-Pressed Temp</span>
                      <span className="text-organic-green font-bold text-lg">~40°C</span>
                    </motion.div>
                    <div className="flex justify-between items-center p-4 bg-muted rounded-md">
                      <span className="font-medium">Chakki Temp</span>
                      <span className="text-muted-foreground">120-150°C</span>
                    </div>
                    <motion.div 
                      className="flex justify-between items-center p-4 bg-organic-green/10 rounded-md border border-organic-green/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="font-medium">Nutrient Retention</span>
                      <span className="text-organic-green font-bold text-lg">95-98%</span>
                    </motion.div>
                    <div className="flex justify-between items-center p-4 bg-muted rounded-md">
                      <span className="font-medium">Chakki Retention</span>
                      <span className="text-muted-foreground">60-70%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-wheat/10 relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of health-conscious families who have switched to 
            Home Root cold-pressed atta for healthier, tastier rotis.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-wheat text-wheat-foreground gap-2 hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl" data-testid="button-shop-now">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
