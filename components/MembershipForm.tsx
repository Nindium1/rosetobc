"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function MembershipForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/membership", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                setFormData({ name: "", email: "", reason: "" });
            } else {
                toast.error(data.error || "Failed to submit application");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="text-left">
            <CardHeader>
                <CardTitle className="font-serif text-2xl text-center">
                    Become a Member
                </CardTitle>
                <CardDescription className="text-center">
                    Fill out the form below and we'll get in touch with meeting
                    details
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                        >
                            Full Name
                        </label>
                        <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                        >
                            Email Address
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="why-join"
                            className="text-sm font-medium text-foreground"
                        >
                            Why do you want to join our book club?
                        </label>
                        <Textarea
                            id="why-join"
                            placeholder="Tell us what draws you to reading and community discussions..."
                            rows={4}
                            value={formData.reason}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    reason: e.target.value,
                                })
                            }
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={isLoading}
                    >
                        {isLoading ? "Submitting..." : "Submit Application"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
