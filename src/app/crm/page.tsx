"use client"
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Phone, PhoneOff, Mic, ChevronLeft, ChevronRight, Search, Settings, Home, Users, BarChart2, MessageSquare, AlertTriangle } from 'lucide-react';

export default function CRMPage() {
    const [navCollapsed, setNavCollapsed] = useState(true);

    // Mock data for contacts
    const contacts = [
        { id: 1, name: "Rahul Sharma", status: "Active Call", time: "02:14", sentiment: "Neutral" },
        { id: 2, name: "Priya Patel", status: "Waiting", time: "00:00", sentiment: "Unknown" },
        { id: 3, name: "Amit Kumar", status: "Active Call", time: "05:42", sentiment: "Positive" },
        { id: 4, name: "Neha Gupta", status: "Completed", time: "04:15", sentiment: "Negative" },
        { id: 5, name: "Vikram Singh", status: "Call Dropped", time: "00:45", sentiment: "Unknown" },
    ];

    // Mock transcript
    const transcript = [
        { id: 1, sender: "ai", text: "Hello, am I speaking with Rahul?" },
        { id: 2, sender: "user", text: "Yes, who is this?" },
        { id: 3, sender: "ai", text: "Hi Rahul, this is the AI assistant from AI Calling Agent. I'm calling about your recent inquiry regarding our calling automation solutions." },
        { id: 4, sender: "user", text: "Oh yes, I was looking into that. How much does it cost?" },
        { id: 5, sender: "ai", text: "Our pricing is highly customizable based on your volume. However, most clients see a 60% reduction in their operational costs. Would you like to schedule a detailed demo?" },
    ];

    return (
        <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-background">

            {/* Collapsible Left Navbar */}
            <div className={`transition-all duration-300 border-r bg-slate-50 flex flex-col ${navCollapsed ? 'w-16' : 'w-64'}`}>
                <div className="p-4 border-b flex justify-between items-center h-[60px]">
                    {!navCollapsed && <span className="font-heading font-bold text-primary truncate">CRM Workspace</span>}
                    <Button variant="ghost" size="icon" onClick={() => setNavCollapsed(!navCollapsed)} className={navCollapsed ? "mx-auto" : ""}>
                        {navCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </Button>
                </div>
                <div className="flex-1 py-4 flex flex-col gap-2 px-2">
                    <NavItem icon={<Home size={20} />} label="Overview" collapsed={navCollapsed} active={false} />
                    <NavItem icon={<Users size={20} />} label="Active Calls" collapsed={navCollapsed} active={true} />
                    <NavItem icon={<MessageSquare size={20} />} label="Transcripts" collapsed={navCollapsed} active={false} />
                    <NavItem icon={<BarChart2 size={20} />} label="Analytics" collapsed={navCollapsed} active={false} />
                </div>
                <div className="p-4 border-t">
                    <NavItem icon={<Settings size={20} />} label="Settings" collapsed={navCollapsed} active={false} />
                </div>
            </div>

            {/* Main Fixed Area */}
            <div className="flex-1 overflow-hidden flex flex-row">

                {/* Section 1: Contacts (30%) */}
                <div className="w-[30%] min-w-[280px] bg-white border-r h-full flex flex-col">
                    <div className="p-4 border-b bg-slate-50/50 h-[60px] flex flex-col justify-center">
                        <h2 className="font-semibold text-lg">Active Sessions</h2>
                    </div>
                    <div className="p-3 border-b">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search calls..." className="pl-9 bg-slate-50 border-0 shadow-none focus-visible:ring-1" />
                        </div>
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="flex flex-col">
                            {contacts.map((contact, i) => (
                                <div key={contact.id} className={`p-4 border-b cursor-pointer flex items-center gap-3 transition-colors ${i === 0 ? 'bg-primary/5 border-l-4 border-l-primary' : 'hover:bg-slate-50 border-l-4 border-l-transparent'}`}>
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">{contact.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-medium truncate text-sm">{contact.name}</h4>
                                            <span className="text-xs text-muted-foreground">{contact.time}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[11px] font-medium flex items-center gap-1.5">
                                                <span className="relative flex h-2 w-2">
                                                    {contact.status === 'Active Call' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>}
                                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${contact.status === 'Active Call' ? 'bg-primary' : contact.status === 'Waiting' ? 'bg-amber-400' : 'bg-slate-300'}`}></span>
                                                </span>
                                                {contact.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Section 2: Transcript (40%) */}
                <div className="flex-1 min-w-[400px] bg-[#F9FAFB] border-r h-full flex flex-col">
                    <div className="p-4 border-b bg-white flex justify-between items-center shadow-sm z-10 h-[60px]">
                        <div>
                            <h2 className="font-semibold text-base">Live Transcript</h2>
                            <p className="text-xs text-muted-foreground">Rahul Sharma • +91 98765 43210</p>
                        </div>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">Recording Active</Badge>
                    </div>

                    <ScrollArea className="flex-1 p-4 md:p-6">
                        <div className="space-y-6 pb-4">
                            <div className="text-center text-xs text-muted-foreground my-4 font-medium uppercase tracking-wider">Call started today at 10:42 AM</div>
                            {transcript.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.sender === 'user'
                                        ? 'bg-primary text-primary-foreground rounded-tr-sm shadow-sm'
                                        : 'bg-white border text-foreground rounded-tl-sm shadow-sm'
                                        }`}>
                                        <p className="text-[15px] leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-start">
                                <div className="bg-white border text-foreground rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-1.5 h-12">
                                    <span className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>

                {/* Section 3: Details & Controls (30%) */}
                <div className="w-[30%] min-w-[280px] bg-slate-50/50 h-full flex flex-col">
                    <div className="p-4 border-b bg-white h-[60px] flex flex-col justify-center">
                        <h2 className="font-semibold text-base">Context & Actions</h2>
                    </div>

                    <ScrollArea className="flex-1 p-5">
                        <div className="space-y-8">

                            {/* Human Override Action */}
                            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center shadow-sm">
                                <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-3" />
                                <h3 className="font-bold text-red-700 mb-2">Human Intervention</h3>
                                <p className="text-sm text-red-600/80 mb-4 leading-relaxed">Take over this call immediately. The AI agent will be seamlessly disconnected.</p>
                                <Button variant="destructive" className="w-full font-bold shadow-md shadow-red-500/20 rounded-xl h-11">
                                    <Mic className="mr-2 h-4 w-4" /> Interrupt & Take Call
                                </Button>
                            </div>

                            {/* Live Stats */}
                            <div className="bg-white p-5 rounded-2xl border shadow-sm">
                                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Live AI Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-foreground/80">Sentiment</span>
                                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Neutral / Inquiring</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-foreground/80">Talk Time Ratio</span>
                                        <div className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600 font-semibold border">AI 45% : User 55%</div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-foreground/80">Intent Detected</span>
                                        <span className="text-sm font-medium">Pricing Query</span>
                                    </div>
                                </div>
                            </div>

                            {/* Notes & Tags */}
                            <div className="bg-white p-5 rounded-2xl border shadow-sm">
                                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Caller Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="hover:bg-secondary">Enterprise</Badge>
                                    <Badge variant="secondary" className="hover:bg-secondary">Inbound Lead</Badge>
                                    <Badge variant="secondary" className="hover:bg-secondary">High Value</Badge>
                                    <Badge variant="outline" className="border-dashed cursor-pointer hover:bg-slate-50">+ Add Tag</Badge>
                                </div>
                            </div>

                            {/* Context Info */}
                            <div className="bg-white p-5 rounded-2xl border shadow-sm">
                                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">CRM Context</h3>
                                <div className="text-sm space-y-3 text-foreground/80">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">Company</span>
                                        <span className="font-medium">RetailTech India Pvt Ltd</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">Role</span>
                                        <span className="font-medium">Director of Operations</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-muted-foreground">Past Interactions</span>
                                        <span className="font-medium">2 Website visits, 1 Email click</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}

function NavItem({ icon, label, collapsed, active }: { icon: React.ReactNode, label: string, collapsed: boolean, active: boolean }) {
    return (
        <Button
            variant={active ? "secondary" : "ghost"}
            className={`justify-start ${collapsed ? 'px-0 justify-center w-12 mx-auto' : 'px-4'} ${active ? 'bg-primary/10 text-primary font-medium hover:bg-primary/15' : 'text-foreground/70 hover:text-foreground hover:bg-slate-100'}`}
            title={collapsed ? label : undefined}
        >
            <span className={collapsed ? '' : 'mr-3'}>{icon}</span>
            {!collapsed && <span>{label}</span>}
        </Button>
    );
}
