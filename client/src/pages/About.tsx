import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Wheat, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-b from-warm-beige/50 to-background dark:from-warm-beige/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
            Our Story
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From the fertile fields of Haryana to your kitchen – the TrueOrganic journey.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-lg leading-relaxed text-muted-foreground">
            TrueOrganic Farms was born from a simple belief: the food we eat should nourish, 
            not just fill. In the heart of Haryana's wheat belt, our founder watched as 
            traditional farming gave way to industrial practices, and ancient grains were 
            forgotten in favor of high-yield varieties.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground mt-6">
            We started with a mission to revive these forgotten grains and traditional 
            processing methods. Our journey led us to partner with small-scale farmers who 
            share our vision of sustainable, organic agriculture. Together, we cultivate 
            heritage wheat varieties like Khapli (Emmer) and nutrient-rich millets that 
            our grandparents knew.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mt-6">
            But growing organic grains was only half the battle. We discovered that 
            traditional chakki mills, while better than industrial rollers, still 
            generated significant heat during milling – destroying the very nutrients 
            we worked so hard to grow. That's when we invested in cold-pressing 
            technology that keeps temperatures below 40°C, preserving the natural 
            goodness in every grain.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center overflow-visible" data-testid="card-value-sustainable">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-organic-green/20 flex items-center justify-center text-organic-green mb-4">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Sustainable Farming</h3>
                <p className="text-muted-foreground">
                  We work with small farmers who practice organic, regenerative agriculture. 
                  No pesticides, no chemicals – just natural farming methods that heal the soil.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-value-grains">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-wheat/20 flex items-center justify-center text-wheat mb-4">
                  <Wheat className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Ancient Grains</h3>
                <p className="text-muted-foreground">
                  We're reviving heritage varieties like Khapli wheat and traditional millets 
                  that offer superior nutrition and have been trusted for thousands of years.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible" data-testid="card-value-processing">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-wheat/20 flex items-center justify-center text-wheat mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Clean Processing</h3>
                <p className="text-muted-foreground">
                  Our cold-pressing technology preserves nutrients that traditional mills destroy. 
                  No additives, no preservatives – just pure, unadulterated flour.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Our Farm Partners
            </h2>
            <p className="text-muted-foreground mb-4">
              We work directly with over 200 farming families across Haryana and Punjab 
              who have committed to organic practices. Our partnership ensures:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Fair prices for farmers – 20-30% above market rates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Technical support for organic certification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Access to heritage seed varieties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Guaranteed purchase of organic produce</span>
              </li>
            </ul>
          </div>
          <div className="aspect-video rounded-md overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
              alt="Wheat fields at sunrise"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-wheat/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Join the TrueOrganic Family
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Every purchase supports sustainable farming, preserves ancient grains, 
            and brings pure nutrition to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-wheat text-wheat-foreground gap-2" data-testid="button-explore-about">
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-contact-about">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
