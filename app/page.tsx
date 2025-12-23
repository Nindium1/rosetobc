import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, Heart, Mail, Instagram, Twitter, Coffee, Video } from "lucide-react"

export default function RosetoBookClub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-primary">Roseto</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              <a href="#activities" className="hover:text-primary transition-colors">How We Do It</a>
              <a href="#books" className="hover:text-primary transition-colors">Books</a>
              <a href="#join" className="hover:text-primary transition-colors">Join Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-6">Roseto Book Club</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where stories bring us together
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#join">Join Our Community</a>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-primary mb-8">About Roseto Book Club</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg mb-6 leading-relaxed">
                  Founded in 2025, Roseto Book Club began as a small gathering of people who share a passion for literature. 
                  Named after the charming Italian town known for its close-knit community—and inspired by the first book we read, 
                  <strong> Outliers by Malcolm Gladwell</strong>—we've grown into a welcoming space where readers of all backgrounds come together.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Our mission is simple: to foster meaningful connections through the power of storytelling. We believe that books 
                  have the unique ability to bridge differences, spark conversations, and create lasting friendships.
                </p>
                <div className="flex items-center space-x-4 text-primary">
                  <Users className="h-6 w-6" />
                  <span className="font-semibold">15+ Active Members</span>
                </div>
              </div>
              <div className="relative">
                {/* INSTRUCTIONS: Upload your about photo to /public folder as 'about-us.jpg' */}
                <img
                  src="/about-us.jpg" 
                  alt="Roseto Book Club gathering"
                  className="rounded-lg shadow-lg w-full object-cover aspect-square bg-muted"
                  onError={(e) => { e.currentTarget.src = "/placeholder.svg?height=400&width=400" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-primary text-center mb-12">How We Do It</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Our Rhythm</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Book Selection</h4>
                      <p className="text-muted-foreground text-sm">At the beginning of the year, members nominate and vote for our quarterly reads based on: Self-help, African Literature, Autobiography, and Fiction.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">Reading Period</h4>
                      <p className="text-muted-foreground text-sm">We read a book every quarter, sharing thoughts and questions in our online forum.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Discussion Meetings</h4>
                      <p className="text-muted-foreground text-sm">Monthly virtual meetings, plus quarterly in-person gatherings with snacks, coffee, and great company.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Inclusive Discussions</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Everyone's perspective is valued. We create a safe space for sharing thoughts and interpretations.</p>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Diverse Genres</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">From literary fiction to self-help, autobiographies to African literature – we explore all kinds of stories.</p>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Community Events</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Author visits, book swaps, literary trivia nights, and seasonal reading challenges.</p>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif text-xl font-semibold text-primary mb-6 text-center">Meeting Details</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-center">
                <div>
                  <Video className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="font-semibold mb-1">When</p>
                  <p className="text-muted-foreground">Virtual: Last Sunday / Month @ 4 PM</p>
                  <p className="text-muted-foreground">Physical: Last Sunday / Quarter @ 2 PM</p>
                </div>
                <div>
                  <Coffee className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="font-semibold mb-1">Where</p>
                  <p className="text-muted-foreground">Local coffee cafes</p>
                </div>
                <div>
                  <Heart className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="font-semibold mb-1">Duration</p>
                  <p className="text-muted-foreground">2 – 3 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books We've Read Section */}
      <section id="books" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-primary text-center mb-4">Books We've Read</h2>
          <p className="text-center text-muted-foreground mb-12">Our literary journey so far</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Outliers", author: "Malcolm Gladwell", img: "/book1.jpg" },
              { title: "Sample Book 2", author: "Author Name", img: "/book2.jpg" },
              { title: "Sample Book 3", author: "Author Name", img: "/book3.jpg" },
              { title: "Sample Book 4", author: "Author Name", img: "/book4.jpg" },
            ].map((book, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src={book.img} 
                  alt={book.title} 
                  className="w-full aspect-[3/4] object-cover bg-muted"
                  onError={(e) => { e.currentTarget.src = "/placeholder.svg?height=300&width=200" }}
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm line-clamp-1">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-3xl text-primary">Join Roseto</CardTitle>
                <CardDescription>Fill out the form below to join our next discussion</CardDescription>
              </CardHeader>
              <CardContent>
                {/* ACTION: Change the URL below to your Formspree ID later */}
                <form action="#" method="POST" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input name="name" placeholder="Name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input name="email" type="email" placeholder="Email" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">What attracts you to Roseto?</label>
                    <Textarea name="message" placeholder="Tell us a bit about your favorite genres..." />
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="font-serif text-2xl font-bold">Roseto Book Club</span>
          </div>
          <p className="text-primary-foreground/80 mb-6">© 2025 Roseto Book Club. Where stories bring us together.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" className="hover:text-secondary"><Instagram /></a>
            <a href="mailto:hello@yourdomain.com" className="hover:text-secondary"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
