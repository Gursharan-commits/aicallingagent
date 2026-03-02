import { Button } from "@/components/ui/button";
import { AreaChart, BarChart3, PieChart, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function DashboardPresentation() {
    return (
        <div className="flex flex-col min-h-screen pt-24 pb-32 overflow-hidden bg-white">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                    <BarChart3 className="mr-2 h-4 w-4" /> Comprehensive Analytics
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground mb-6">
                    See Every Call. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Master Every Outcome.</span>
                </h1>
                <p className="text-xl text-foreground/70 mb-12">
                    Our intelligent dashboard provides a bird's-eye view of your AI Calling Agent's performance. Track conversion rates, analyze sentiment, and measure ROI in real-time.
                </p>

                {/* Dashboard Snapshot */}
                <div className="relative mx-auto max-w-5xl mt-8">
                    <div className="relative border rounded-xl shadow-2xl overflow-hidden flex flex-col hover:shadow-primary/20 transition-all duration-500 bg-white">
                        <img
                            src="/dashboard-mockup.png"
                            alt="AI Calling Agent Dashboard Presentation"
                            className="object-cover w-full h-auto"
                        />
                    </div>
                </div>

                {/* Feature descriptions below the mockup */}
                <div className="grid md:grid-cols-3 gap-8 mt-24 text-left">
                    <div>
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4"><AreaChart /></div>
                        <h4 className="text-lg font-bold mb-2">Live Insights</h4>
                        <p className="text-foreground/70 text-sm">Monitor agent performance, lead qualification rates, and call volumes in real-time to make data-driven decisions instantly.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4"><Users /></div>
                        <h4 className="text-lg font-bold mb-2">Sentiment Tracking</h4>
                        <p className="text-foreground/70 text-sm">Our AI analyzes conversational tone to measure customer satisfaction across thousands of interactions automatically.</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4"><PieChart /></div>
                        <h4 className="text-lg font-bold mb-2">Cost & ROI Reports</h4>
                        <p className="text-foreground/70 text-sm">Instantly visualize your savings compared to traditional human-only call centers. Prove ROI from day one.</p>
                    </div>
                </div>

                <div className="mt-16">
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/#book-demo">Request a Live Demo</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
