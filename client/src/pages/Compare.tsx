import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Thermometer, Shield, Leaf } from 'lucide-react';
import ComparisonTable from '@/components/ComparisonTable';

const highlights = [
  {
    icon: <Thermometer className="h-10 w-10" />,
    title: 'Temperature Matters',
    description: 'Stone-ground mills operate at ~40°C vs chakki mills at 120-150°C. This 80-100°C difference is crucial for preserving heat-sensitive vitamins.',
    statStoneGround: '40°C',
    statChakki: '150°C',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Nutrient Protection',
    description: 'Our stone-grinding process retains up to 98% of original nutrients, while traditional milling loses 30-40% of vitamins and antioxidants to heat damage.',
    statStoneGround: '98%',
    statChakki: '60%',
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: 'Natural Oils Preserved',
    description: 'Wheat germ oil containing Vitamin E and Omega-3 is preserved in stone-ground atta, while high heat causes oxidation in chakki atta.',
    statStoneGround: 'Preserved',
    statChakki: 'Oxidized',
  },
];

export default function Compare() {
  return (
    <div>
      <section className="bg-gradient-to-b from-organic-green/10 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4" data-testid="text-compare-title">
            Stone-Ground vs Chakki Atta
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive comparison to help you understand why stone-ground atta 
            is the healthier choice for your family.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
          Key Differentiators
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={highlight.title} className="text-center overflow-visible" data-testid={`card-highlight-${index}`}>
              <CardHeader>
                <div className="w-20 h-20 mx-auto rounded-full bg-wheat/20 flex items-center justify-center text-wheat mb-4">
                  {highlight.icon}
                </div>
                <CardTitle className="font-heading">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{highlight.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-organic-green/10 rounded-md">
                    <p className="text-2xl font-bold text-organic-green">{highlight.statStoneGround}</p>
                    <p className="text-xs text-muted-foreground">Stone-Ground</p>
                  </div>
                  <div className="p-3 bg-muted rounded-md">
                    <p className="text-2xl font-bold text-muted-foreground">{highlight.statChakki}</p>
                    <p className="text-xs text-muted-foreground">Chakki</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <ComparisonTable />
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <Card className="overflow-visible">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-organic-green">
                  Stone-Ground Atta Advantages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-organic-green font-bold">+</span>
                    <span>Higher vitamin B complex retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-organic-green font-bold">+</span>
                    <span>Preserved natural wheat oils</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-organic-green font-bold">+</span>
                    <span>Lower glycemic index</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-organic-green font-bold">+</span>
                    <span>Better fiber integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-organic-green font-bold">+</span>
                    <span>Fresh, natural aroma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-organic-green font-bold">+</span>
                    <span>Longer shelf life without preservatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-organic-green font-bold">+</span>
                    <span>Softer rotis that stay fresh longer</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-muted-foreground">
                  Traditional Chakki Atta Drawbacks
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">-</span>
                    <span>Heat destroys B vitamins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">-</span>
                    <span>Oxidized wheat germ oil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">-</span>
                    <span>Higher glycemic impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">-</span>
                    <span>Damaged fiber structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">-</span>
                    <span>Slight burnt smell from friction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">-</span>
                    <span>Shorter shelf life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">-</span>
                    <span>Rotis become stiff faster</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-16 bg-wheat/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Make the Healthy Choice Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Switch to Home Root stone-ground atta and experience the difference 
            in taste, nutrition, and quality.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-wheat text-wheat-foreground gap-2" data-testid="button-shop-stone-ground">
              Shop Stone-Ground Atta
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
