"use client";

import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Clock, Trash2, Heart } from "lucide-react";
import { toast } from "sonner";

interface Review {
    id: string;
    bookId: string;
    reviewer: string;
    rating: number;
    comment: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
    book: {
        id: string;
        title: string;
        author: string;
    };
}

export default function ReviewsTab() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            const response = await fetch("/api/admin/reviews");
            const data = await response.json();

            if (response.ok) {
                setReviews(data.reviews);
            } else {
                toast.error("Failed to fetch reviews");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleUpdateStatus = async (
        id: string,
        status: "APPROVED" | "REJECTED"
    ) => {
        try {
            const response = await fetch(`/api/admin/reviews?id=${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                fetchReviews();
            } else {
                toast.error(data.error || "Failed to update review");
            }
        } catch (error) {
            toast.error("An error occurred");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this review?")) {
            return;
        }

        try {
            const response = await fetch(`/api/admin/reviews?id=${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Review deleted successfully");
                fetchReviews();
            } else {
                toast.error(data.error || "Failed to delete review");
            }
        } catch (error) {
            toast.error("An error occurred");
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "PENDING":
                return (
                    <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" />
                        Pending
                    </Badge>
                );
            case "APPROVED":
                return (
                    <Badge variant="default" className="gap-1 bg-green-600">
                        <Check className="h-3 w-3" />
                        Approved
                    </Badge>
                );
            case "REJECTED":
                return (
                    <Badge variant="destructive" className="gap-1">
                        <X className="h-3 w-3" />
                        Rejected
                    </Badge>
                );
            default:
                return null;
        }
    };

    if (isLoading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Book Reviews</CardTitle>
                    <CardDescription>
                        Review and approve member book reviews
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {reviews.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            No reviews found
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <Card key={review.id}>
                                    <CardContent className="pt-6">
                                        <div className="space-y-3">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="font-semibold">
                                                            {review.book.title}
                                                        </h3>
                                                        {getStatusBadge(
                                                            review.status
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        by {review.book.author}
                                                    </p>
                                                    <div className="flex items-center gap-1 mb-3">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <Heart
                                                                    key={i}
                                                                    className={`h-4 w-4 ${
                                                                        i <
                                                                        review.rating
                                                                            ? "fill-primary text-primary"
                                                                            : "text-muted-foreground"
                                                                    }`}
                                                                />
                                                            )
                                                        )}
                                                        <span className="text-sm text-muted-foreground ml-2">
                                                            {review.rating}/5
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-secondary/30 p-3 rounded">
                                                <p className="text-sm font-medium mb-1">
                                                    Review by {review.reviewer}:
                                                </p>
                                                <p className="text-sm">
                                                    {review.comment}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-xs text-muted-foreground">
                                                    Submitted:{" "}
                                                    {new Date(
                                                        review.createdAt
                                                    ).toLocaleDateString()}
                                                </p>
                                                <div className="flex gap-2">
                                                    {review.status ===
                                                        "PENDING" && (
                                                        <>
                                                            <Button
                                                                size="sm"
                                                                onClick={() =>
                                                                    handleUpdateStatus(
                                                                        review.id,
                                                                        "APPROVED"
                                                                    )
                                                                }
                                                                className="bg-green-600 hover:bg-green-700"
                                                            >
                                                                <Check className="h-4 w-4 mr-1" />
                                                                Approve
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="destructive"
                                                                onClick={() =>
                                                                    handleUpdateStatus(
                                                                        review.id,
                                                                        "REJECTED"
                                                                    )
                                                                }
                                                            >
                                                                <X className="h-4 w-4 mr-1" />
                                                                Reject
                                                            </Button>
                                                        </>
                                                    )}
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() =>
                                                            handleDelete(
                                                                review.id
                                                            )
                                                        }
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
