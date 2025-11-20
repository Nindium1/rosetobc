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
import { Check, X, Clock } from "lucide-react";
import { toast } from "sonner";

interface MembershipRequest {
    id: string;
    name: string;
    email: string;
    reason: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
}

export default function MembershipRequestsTab() {
    const [requests, setRequests] = useState<MembershipRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRequests = async () => {
        try {
            const response = await fetch("/api/admin/membership-requests");
            const data = await response.json();

            if (response.ok) {
                setRequests(data.requests);
            } else {
                toast.error("Failed to fetch membership requests");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    const handleUpdateStatus = async (
        id: string,
        status: "APPROVED" | "REJECTED"
    ) => {
        try {
            const response = await fetch(
                `/api/admin/membership-requests?id=${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                fetchRequests();
            } else {
                toast.error(data.error || "Failed to update request");
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
                    <CardTitle>Membership Requests</CardTitle>
                    <CardDescription>
                        Review and approve membership applications
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {requests.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            No membership requests found
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {requests.map((request) => (
                                <Card key={request.id}>
                                    <CardContent className="pt-6">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-2 flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-semibold text-lg">
                                                        {request.name}
                                                    </h3>
                                                    {getStatusBadge(
                                                        request.status
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {request.email}
                                                </p>
                                                <div className="pt-2">
                                                    <p className="text-sm font-medium mb-1">
                                                        Why they want to join:
                                                    </p>
                                                    <p className="text-sm text-foreground bg-secondary/30 p-3 rounded">
                                                        {request.reason}
                                                    </p>
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    Submitted:{" "}
                                                    {new Date(
                                                        request.createdAt
                                                    ).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        {request.status === "PENDING" && (
                                            <div className="flex gap-2 mt-4">
                                                <Button
                                                    size="sm"
                                                    onClick={() =>
                                                        handleUpdateStatus(
                                                            request.id,
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
                                                            request.id,
                                                            "REJECTED"
                                                        )
                                                    }
                                                >
                                                    <X className="h-4 w-4 mr-1" />
                                                    Reject
                                                </Button>
                                            </div>
                                        )}
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
