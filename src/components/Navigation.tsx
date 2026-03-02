import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navigation() {
    const routes = [
        { href: "/#how-it-works", label: "How It Works" },
        { href: "/#use-cases", label: "Use Cases" },
        { href: "/#dashboard", label: "Dashboard" },
        { href: "/#crm", label: "CRM" },
        { href: "/#about", label: "About Us" }
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="inline-block font-heading font-bold text-xl text-foreground tracking-tight group-hover:text-primary transition-colors">
                        AI Calling Agent
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="transition-colors hover:text-primary text-foreground/70"
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" className="font-medium text-foreground/80 hover:text-primary" asChild>
                        <Link href="/#contact">Contact Us</Link>
                    </Button>
                    <Button className="px-6 font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" asChild>
                        <Link href="/#contact">Book a Demo</Link>
                    </Button>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-2">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0 bg-background pt-12">
                            <nav className="flex flex-col gap-4 text-lg font-medium">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className="hover:text-primary"
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                                <div className="h-px bg-border my-4 w-1/2" />
                                <Link href="/#contact" className="hover:text-primary">Contact Us</Link>
                                <Link href="/#contact" className="text-primary font-bold">Book a Demo</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
