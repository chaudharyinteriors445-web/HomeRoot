import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sun, Moon, Wheat } from 'lucide-react';
// import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/stone-ground-benefits', label: 'Stone-Ground Benefits' },
  { href: '/compare', label: 'Compare' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage / system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme === "dark" || (!storedTheme && prefersDark);

    setIsDarkMode(shouldUseDark);
  }, []);

  // Apply theme class to the document root whenever it changes
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* <div className="container mx-auto flex h-16 items-center justify-between px-4"> */}
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

       <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          {/* <Wheat className="h-8 w-8 text-wheat" />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-tight">Home Root</span>
            <span className="text-xs text-muted-foreground leading-tight">Farms</span>
          </div> */}
          <Wheat className="h-10 w-10 text-wheat" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-semibold">Home Root</span>
            <span className="text-md text-muted-foreground">Farms</span>
          </div>

        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={location === link.href ? 'secondary' : 'ghost'}
                size="default"
                // className="text-md from-accent-border px-5 py-2 rounded-xl"
                // className='px-4 py-2 rounded-md bg-wheat text-black font-semibold hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-opacity-50'
                className={`
                  px-4 py-2 rounded-xl text-md font-semibold transition
                  ${location === link.href 
                    ? "bg-wheat/20 text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"}
                  `}
                // className='px-5 py-2 rounded-md  text-black font-semibold focus:outline-none focus:ring-2  focus:ring-opacity-50'
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}

          {/* Theme toggle (desktop) */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </Button>
        </nav>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={location === link.href ? 'secondary' : 'ghost'}
                    // className="w-full justify-start"
                    className="w-full justify-start text-lg py-3 font-medium"
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}

              {/* Theme toggle (mobile) */}
              <Button
                type="button"
                variant="outline"
                className="mt-4 justify-start gap-2"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-5 w-5 text-amber-400" />
                    <span>Light mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-slate-700" />
                    <span>Dark mode</span>
                  </>
                )}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}