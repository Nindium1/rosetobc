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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Trash2, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface Book {
    id: string;
    title: string;
    author: string;
    description: string | null;
    imageUrl: string | null;
    createdAt: string;
    _count?: {
        reviews: number;
    };
}

export default function BooksTab() {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        imageUrl: "",
    });

    const fetchBooks = async () => {
        try {
            const response = await fetch("/api/admin/books");
            const data = await response.json();

            if (response.ok) {
                setBooks(data.books);
            } else {
                toast.error("Failed to fetch books");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/admin/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    imageUrl: formData.imageUrl || undefined,
                    description: formData.description || undefined,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Book added successfully");
                setIsDialogOpen(false);
                setFormData({
                    title: "",
                    author: "",
                    description: "",
                    imageUrl: "",
                });
                fetchBooks();
            } else {
                toast.error(data.error || "Failed to add book");
            }
        } catch (error) {
            toast.error("An error occurred");
        }
    };

    const handleDelete = async (id: string) => {
        if (
            !confirm(
                "Are you sure you want to delete this book? All associated reviews will also be deleted."
            )
        ) {
            return;
        }

        try {
            const response = await fetch(`/api/admin/books?id=${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Book deleted successfully");
                fetchBooks();
            } else {
                toast.error(data.error || "Failed to delete book");
            }
        } catch (error) {
            toast.error("An error occurred");
        }
    };

    if (isLoading) {
        return <div className="text-center py-8">Loading...</div>;
    }

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Books</CardTitle>
                            <CardDescription>
                                Manage the book collection
                            </CardDescription>
                        </div>
                        <Dialog
                            open={isDialogOpen}
                            onOpenChange={setIsDialogOpen}
                        >
                            <DialogTrigger asChild>
                                <Button>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Book
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                    <DialogTitle>Add New Book</DialogTitle>
                                    <DialogDescription>
                                        Add a new book to the collection
                                    </DialogDescription>
                                </DialogHeader>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="title"
                                            className="text-sm font-medium"
                                        >
                                            Title *
                                        </label>
                                        <Input
                                            id="title"
                                            value={formData.title}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    title: e.target.value,
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="author"
                                            className="text-sm font-medium"
                                        >
                                            Author *
                                        </label>
                                        <Input
                                            id="author"
                                            value={formData.author}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    author: e.target.value,
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="description"
                                            className="text-sm font-medium"
                                        >
                                            Description
                                        </label>
                                        <Textarea
                                            id="description"
                                            value={formData.description}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value,
                                                })
                                            }
                                            rows={4}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="imageUrl"
                                            className="text-sm font-medium"
                                        >
                                            Image URL
                                        </label>
                                        <Input
                                            id="imageUrl"
                                            type="url"
                                            value={formData.imageUrl}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    imageUrl: e.target.value,
                                                })
                                            }
                                            placeholder="https://example.com/book-cover.jpg"
                                        />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() =>
                                                setIsDialogOpen(false)
                                            }
                                        >
                                            Cancel
                                        </Button>
                                        <Button type="submit">Add Book</Button>
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardHeader>
                <CardContent>
                    {books.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            No books found
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {books.map((book) => (
                                <Card key={book.id}>
                                    <CardContent className="pt-6">
                                        <div className="space-y-3">
                                            {book.imageUrl ? (
                                                <div className="aspect-3/4 bg-secondary rounded overflow-hidden">
                                                    <img
                                                        src={book.imageUrl}
                                                        alt={book.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="aspect-3/4 bg-linear-to-br from-secondary to-accent rounded flex items-center justify-center">
                                                    <BookOpen className="h-12 w-12 text-primary" />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="font-semibold line-clamp-2">
                                                    {book.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {book.author}
                                                </p>
                                            </div>
                                            {book.description && (
                                                <p className="text-sm line-clamp-3">
                                                    {book.description}
                                                </p>
                                            )}
                                            <div className="flex items-center justify-between pt-2">
                                                <p className="text-xs text-muted-foreground">
                                                    {book._count?.reviews || 0}{" "}
                                                    reviews
                                                </p>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleDelete(book.id)
                                                    }
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
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
