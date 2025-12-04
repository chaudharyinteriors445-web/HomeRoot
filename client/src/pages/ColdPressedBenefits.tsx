import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Thermometer, Heart, Wheat, Wind, Clock, ChefHat, Droplets } from 'lucide-react';
import ComparisonTable from '@/components/ComparisonTable';

const benefits = [
  {
    icon: <Thermometer className="h-8 w-8" />,
    title: 'Lower Heat → Higher Nutrient Retention',
    description: 'Cold-pressed mills operate under ~40°C while traditional chakki mills reach 120–150°C.',
    details: 'Heat destroys Vitamin B1, B2, B3 & folate. Our cold-pressing technology preserves up to 98% of these essential nutrients.',
    citation: 'Food Chemistry Journal, 2018',
  },
  {
    icon: <Wheat className="h-8 w-8" />,
    title: 'Better Fiber Integrity',
    description: 'Cold-press preserves the natural fiber structure of wheat grains.',
    details: 'This leads to improved digestion and better gut health. The intact fiber also helps in maintaining healthy cholesterol levels.',
    citation: null,
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: 'Lower Glycemic Index',
    description: 'Heat caramelizes starch in chakki atta, increasing its glycemic index.',
    details: 'Cold-pressed atta keeps the starch structure natural, resulting in slower sugar release. This makes it ideal for diabetics and weight management.',
    citation: null,
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Better Wheat-Germ Oil Retention',
    description: 'Preserves Vitamin E, Omega-3 fatty acids, and natural antioxidants.',
    details: 'Chakki heat causes oxidation and loss of natural oils. Cold-pressing retains these heart-healthy compounds that support overall wellness.',
    citation: null,
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: 'No Burnt Aroma',
    description: 'Cold-pressed atta has a clean, fresh, and natural aroma.',
    details: 'Traditional chakki atta often has a slight burnt smell from the friction-generated heat during milling. Our process eliminates this issue.',
    citation: null,
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Longer Shelf Life',
    description: 'Less oxidation during milling means better preservation.',
    details: 'Cold-pressed atta stays fresh for 4-6 months without any preservatives, compared to 2-3 months for regular chakki atta.',
    citation: null,
  },
  {
    icon: <ChefHat className="h-8 w-8" />,
    title: 'Better Dough & Roti Quality',
    description: 'Experience softer dough and fluffier rotis that stay soft longer.',
    details: 'The preserved oils and fiber structure result in better water absorption, making the dough easier to work with and the rotis more pliable.',
    citation: null,
  },
];

export default function ColdPressedBenefits() {
  return (
    <div>
      <section className="bg-gradient-to-b from-wheat/20 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4" data-testid="text-benefits-title">
            The Science Behind Cold-Pressed Atta
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover why our cold-pressing technology produces healthier, more nutritious atta 
            compared to traditional chakki mills.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
          7 Science-Backed Benefits of Cold-Pressed Atta
        </h2>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="overflow-visible" data-testid={`card-benefit-${index}`}>
              <CardContent className="p-6">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-start`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-wheat/20 flex items-center justify-center text-wheat">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-lg mb-2">{benefit.description}</p>
                    <p className="text-muted-foreground">{benefit.details}</p>
                    {benefit.citation && (
                      <p className="text-sm text-organic-green mt-2 italic">
                        Source: {benefit.citation}
                      </p>
                    )}
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
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            The Bottom Line
          </h2>
          <p className="text-muted-foreground mb-8">
            Cold-pressed atta isn't just a marketing term – it's a scientifically superior 
            process that delivers measurable health benefits. From better nutrition to 
            tastier rotis, the difference is real and significant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-wheat text-wheat-foreground gap-2" data-testid="button-try-products">
                Try Our Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/compare">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-see-comparison">
                See Full Comparison
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
