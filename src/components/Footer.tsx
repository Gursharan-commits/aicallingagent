import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-secondary/30 mt-auto">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4 group">
                            <span className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">AI Calling Agent</span>
                        </Link>
                        <p className="text-sm text-foreground/70 mb-4 max-w-xs">
                            India&apos;s Intelligent Calling Workforce. Reduce agent costs. Eliminate inconsistent performance. Scale calls 24/7.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Product</h3>
                        <ul className="space-y-3 text-sm text-foreground/70">
                            <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link href="/dashboard" className="hover:text-primary transition-colors">Analytics Dashboard</Link></li>
                            <li><Link href="/crm" className="hover:text-primary transition-colors">CRM Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Use Cases</h3>
                        <ul className="space-y-3 text-sm text-foreground/70">
                            <li><Link href="/#use-cases" className="hover:text-primary transition-colors">Outbound Telemarketing</Link></li>
                            <li><Link href="/#use-cases" className="hover:text-primary transition-colors">Inbound Customer Support</Link></li>
                            <li><Link href="/#use-cases" className="hover:text-primary transition-colors">Appointment Booking</Link></li>
                            <li><Link href="/#use-cases" className="hover:text-primary transition-colors">Real Estate AI Caller</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-foreground/70">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
                    <p>© {new Date().getFullYear()} AI Calling Agent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
