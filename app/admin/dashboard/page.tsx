"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, MessageSquare, LogOut, Plus } from "lucide-react";
import { toast } from "sonner";
import MembershipRequestsTab from "@/components/admin/MembershipRequestsTab";
import BooksTab from "@/components/admin/BooksTab";
import ReviewsTab from "@/components/admin/ReviewsTab";

export default function AdminDashboard() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simple check - in production you'd verify the session
        setIsLoading(false);
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/admin/logout", {
                method: "POST",
            });

            if (response.ok) {
                toast.success("Logged out successfully");
                router.push("/admin");
            } else {
                toast.error("Logout failed");
            }
        } catch (error) {
            toast.error("An error occurred");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <BookOpen className="h-8 w-8 text-primary" />
                            <div>
                                <h1 className="font-serif text-2xl font-bold text-primary">
                                    Roseto Admin
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    Book Club Management
                                </p>
                            </div>
                        </div>
                        <Button variant="outline" onClick={handleLogout}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <Tabs defaultValue="requests" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3 lg:w-[500px]">
                        <TabsTrigger value="requests">
                            <Users className="h-4 w-4 mr-2" />
                            Membership
                        </TabsTrigger>
                        <TabsTrigger value="books">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Books
                        </TabsTrigger>
                        <TabsTrigger value="reviews">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Reviews
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="requests">
                        <MembershipRequestsTab />
                    </TabsContent>

                    <TabsContent value="books">
                        <BooksTab />
                    </TabsContent>

                    <TabsContent value="reviews">
                        <ReviewsTab />
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
