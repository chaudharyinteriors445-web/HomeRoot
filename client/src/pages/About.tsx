import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Wheat, Sparkles } from "lucide-react";
import ceoImage from "@assets/generated_images/CEO.jpeg";
import founderImage from "@assets/generated_images/Founder.jpeg";
import coFounder1Image from "@assets/generated_images/co-founder1.png";
import coFounder2Image from "@assets/generated_images/co-founder2.jpg";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-warm-beige/50 to-background dark:from-warm-beige/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="font-heading text-3xl md:text-5xl font-bold mb-4"
            data-testid="text-about-title"
          >
            Our Story
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From carefully sourced wheat to traditionally stone-ground flour.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Home Root Farms was started with a clear purpose — to bring back
            honest, everyday flour made the traditional way. We noticed that
            most modern flours focused on speed and volume, often at the cost of
            freshness and natural taste.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mt-6">
            We source premium-quality wheat from experienced farmers and trusted
            grain vendors across Haryana and nearby regions. Each batch is chosen
            carefully for grain strength, cleanliness, and consistency before it
            reaches our mill.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground mt-6">
            The wheat is then cleaned and stone-ground in small batches. Stone
            grinding allows the grain to break down slowly, without excessive
            heat, helping retain its natural fiber, aroma, and taste. What you
            get is flour that feels closer to what families once made and used
            at home.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center overflow-visible">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-organic-green/20 flex items-center justify-center text-organic-green mb-4">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  Careful Sourcing
                </h3>
                <p className="text-muted-foreground">
                  We procure premium wheat from reliable farmers and vendors who
                  meet our quality standards, ensuring consistency and freshness.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-wheat/20 flex items-center justify-center text-wheat mb-4">
                  <Wheat className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  Traditional Grinding
                </h3>
                <p className="text-muted-foreground">
                  Our flour is stone-ground at controlled temperatures to
                  preserve the grain’s natural texture, taste, and nutrition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-visible">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-wheat/20 flex items-center justify-center text-wheat mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  Clean Processing
                </h3>
                <p className="text-muted-foreground">
                  No bleaching, no additives, no unnecessary processing. Just
                  clean wheat, ground the right way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center overflow-hidden">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={founderImage}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Founder</h3>
                <p className="text-muted-foreground text-sm">
                  Visionary leader dedicated to bringing traditional flour back to modern kitchens.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={ceoImage}
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">CEO</h3>
                <p className="text-muted-foreground text-sm">
                  Strategic leader and experienced businessman, handling the business operations and ensuring quality and excellence in every batch we produce.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={coFounder1Image}
                  alt="Co-Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Co-Founder</h3>
                <p className="text-muted-foreground text-sm">
                  Passionate about sustainable sourcing and building relationships with farmers and vendors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={coFounder2Image}
                  alt="Co-Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Co-Founder</h3>
                <p className="text-muted-foreground text-sm">
                  Expert in traditional milling techniques, also handling the technical aspects of the business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Our Supply Partners
            </h2>
            <p className="text-muted-foreground mb-4">
              Our work is built on long-term relationships with farmers, grain
              traders, and vendors who understand quality and responsible
              storage practices.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Premium wheat selection for consistent quality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Proper cleaning and storage before milling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Small-batch stone grinding for freshness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-organic-green font-bold">•</span>
                <span>Focus on everyday household use</span>
              </li>
            </ul>
          </div>

          <div className="aspect-video rounded-md overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
              alt="Wheat fields"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wheat/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Made for Everyday Kitchens
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Honest sourcing, traditional grinding, and flour you can trust for
            daily cooking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-wheat text-wheat-foreground gap-2"
                data-testid="button-explore-about"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                data-testid="button-contact-about"
              >
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
