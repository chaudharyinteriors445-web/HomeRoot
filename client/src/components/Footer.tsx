/*
import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiWhatsapp, SiInstagram, SiFacebook, SiTwitch, SiX, SiYoutube } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from './Logo';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 p-6 bg-warm-beige/30 dark:bg-warm-beige/10 rounded-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-lg font-semibold">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-muted-foreground">Get updates on new products and health tips</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="w-full md:w-64"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="bg-wheat text-wheat-foreground" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Bringing you pure, stone-ground organic atta from ancient grains. 
              Committed to your health and traditional farming practices.
            </p>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="link-social-twitter">
                <SiX className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-social-youTube">
                <SiYoutube className="h-4 w-4" />
                </Button>
              <Button variant="ghost" size="icon" data-testid="link-social-instagram">
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-social-facebook">
                <SiFacebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
          

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-products">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/stone-ground-benefits"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-benefits"
                >
                  Stone-Ground Benefits
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/khapli-wheat-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-khapli">
                  Khapli Wheat Atta
                </Link>
              </li>
              <li>
                <Link href="/products/whole-wheat-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-whole-wheat">
                  Whole Wheat Atta
                </Link>
              </li>
              <li>
                <Link href="/products/bajra-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-bajra">
                  Bajra Atta
                </Link>
              </li>
              <li>
                <Link href="/products/ragi-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-ragi">
                  Ragi Atta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-wheat mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  218, kotla, Ghanra ghar meerut city, Uttar Pradesh, India.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-wheat flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 93583 83671</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-wheat flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info.trueorganicfarms@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Home Root Farms. All rights reserved. Made with care for your health.
          </p>
        </div>
      </div>
    </footer>
  );
}
*/
// new Ai code version below

import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiInstagram, SiFacebook, SiX, SiYoutube } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from './Logo';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        
        {/* Newsletter Section */}
        <div className="mb-8 p-6 bg-warm-beige/30 dark:bg-warm-beige/10 rounded-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-lg font-semibold">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Get updates on new products and health tips
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="w-full md:w-64"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="bg-wheat text-wheat-foreground" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div>
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Bringing you pure, stone-ground organic atta from ancient grains. 
              Committed to your health and traditional farming practices.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="flex gap-2">

              {/* X / Twitter */}
              <Button asChild variant="ghost" size="icon" data-testid="link-social-twitter">
                <a href="https://x.com/trueorganic_?t=wzLY3g5G6CICyVV9rLPq3A&s=09" target="_blank" rel="noopener noreferrer">
                  <SiX className="h-4 w-4" />
                </a>
              </Button>

              {/* YouTube */}
              <Button asChild variant="ghost" size="icon" data-testid="link-social-youTube">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <SiYoutube className="h-4 w-4" />
                </a>
              </Button>

              {/* Instagram */}
              <Button asChild variant="ghost" size="icon" data-testid="link-social-instagram">
                <a 
                  href="https://www.instagram.com/homeroot_farms/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram className="h-4 w-4" />
                </a>
              </Button>

              {/* Facebook */}
              <Button asChild variant="ghost" size="icon" data-testid="link-social-facebook">
                <a 
                  href="https://www.facebook.com/profile.php?id=61584599555016"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFacebook className="h-4 w-4" />
                </a>
              </Button>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-products">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/stone-ground-benefits"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-benefits"
                >
                  Stone-Ground Benefits
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/khapli-wheat-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-khapli">
                  Khapli Wheat Atta
                </Link>
              </li>
              <li>
                <Link href="/products/whole-wheat-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-whole-wheat">
                  Whole Wheat Atta
                </Link>
              </li>
              <li>
                <Link href="/products/bajra-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-bajra">
                  Bajra Atta
                </Link>
              </li>
              <li>
                <Link href="/products/ragi-atta" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-ragi">
                  Ragi Atta
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-wheat mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  218, kotla, Ghanra ghar meerut city, Uttar Pradesh, India.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-wheat flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 93583 83671</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-wheat flex-shrink-0" />
                <span className="text-sm text-muted-foreground">homerootfarms@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Home Root Farms. All rights reserved. 
            Made with care for your health.
          </p>
        </div>

      </div>
    </footer>
  );
}
