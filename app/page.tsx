import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, Heart, Mail, Instagram, Twitter } from "lucide-react"

export default function RosetoBookClub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold text-primary">Roseto</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#activities" className="text-foreground hover:text-primary transition-colors">
                Activities
              </a>
              <a href="#books" className="text-foreground hover:text-primary transition-colors">
                Books
              </a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#join" className="text-foreground hover:text-primary transition-colors">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary mb-6">Roseto Book Club</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where stories bring us together
          </p>
          <p className="text-lg text-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our warm community of book lovers as we explore captivating stories, share meaningful discussions, and
            discover new worlds through literature.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
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
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Founded in 2018, Roseto Book Club began as a small gathering of friends who shared a passion for
                  literature. Named after the charming Italian town known for its close-knit community, we've grown into
                  a welcoming space where readers of all backgrounds come together.
                </p>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Our mission is simple: to foster meaningful connections through the power of storytelling. We believe
                  that books have the unique ability to bridge differences, spark conversations, and create lasting
                  friendships.
                </p>
                <div className="flex items-center space-x-4 text-primary">
                  <Users className="h-6 w-6" />
                  <span className="font-semibold">50+ Active Members</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Book club members reading together"
                  className="rounded-lg shadow-lg w-full"
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
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">Our Monthly Rhythm</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Book Selection</h4>
                      <p className="text-muted-foreground">
                        Members nominate and vote on our next read during the last week of each month.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Reading Period</h4>
                      <p className="text-muted-foreground">
                        We spend 3-4 weeks reading together, sharing thoughts and questions in our online forum.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Discussion Meeting</h4>
                      <p className="text-muted-foreground">
                        Our monthly in-person gathering features lively discussions, snacks, and great company.
                      </p>
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
                      <h4 className="font-semibold text-foreground">Inclusive Discussions</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Everyone's perspective is valued. We create a safe space for sharing thoughts and interpretations.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Diverse Genres</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      From literary fiction to memoirs, mysteries to sci-fi - we explore all kinds of stories.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Community Events</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Author visits, book swaps, literary trivia nights, and seasonal reading challenges.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="bg-card p-8 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Meeting Details</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">When</p>
                    <p className="text-muted-foreground">Last Saturday of each month, 2:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Where</p>
                    <p className="text-muted-foreground">Rotating member homes & local cafés</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Duration</p>
                    <p className="text-muted-foreground">2-3 hours with refreshments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books We've Read Section */}
      <section id="books" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-primary text-center mb-12">Books We've Read</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid" },
              { title: "Educated", author: "Tara Westover" },
              { title: "The Midnight Library", author: "Matt Haig" },
              { title: "Circe", author: "Madeline Miller" },
              { title: "Where the Crawdads Sing", author: "Delia Owens" },
              { title: "The Vanishing Half", author: "Brit Bennett" },
              { title: "Klara and the Sun", author: "Kazuo Ishiguro" },
              { title: "The Guest List", author: "Lucy Foley" },
              { title: "Mexican Gothic", author: "Silvia Moreno-Garcia" },
              { title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab" },
              { title: "Hamnet", author: "Maggie O'Farrell" },
              { title: "The Thursday Murder Club", author: "Richard Osman" },
            ].map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-accent rounded mb-3 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Reviews Section */}
      <section id="reviews" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-primary text-center mb-12">Member Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                book: "The Seven Husbands of Evelyn Hugo",
                review:
                  "A captivating tale that kept me turning pages late into the night. The character development is extraordinary.",
                reviewer: "Sarah M.",
                rating: 5,
              },
              {
                book: "Educated",
                review:
                  "A powerful memoir that sparked incredible discussions in our group. Tara's journey is both heartbreaking and inspiring.",
                reviewer: "Michael R.",
                rating: 5,
              },
              {
                book: "The Midnight Library",
                review:
                  "A thought-provoking exploration of life's possibilities. Perfect for our philosophical discussions.",
                reviewer: "Emma L.",
                rating: 4,
              },
              {
                book: "Circe",
                review:
                  "Miller's prose is absolutely beautiful. This retelling brought Greek mythology to life in a whole new way.",
                reviewer: "David K.",
                rating: 5,
              },
              {
                book: "Where the Crawdads Sing",
                review: "The atmospheric writing transported me to the marshlands. A mystery that touches the heart.",
                reviewer: "Lisa T.",
                rating: 4,
              },
              {
                book: "The Vanishing Half",
                review: "A profound exploration of identity and family. Bennett's storytelling is masterful.",
                reviewer: "James W.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">{review.book}</CardTitle>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">"{review.review}"</p>
                  <p className="text-sm text-muted-foreground">— {review.reviewer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-primary mb-8">Join Our Community</h2>
            <p className="text-lg text-foreground mb-10 leading-relaxed">
              Ready to embark on literary adventures with fellow book lovers? We'd love to welcome you to our warm and
              inclusive community.
            </p>

            <Card className="text-left">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-center">Become a Member</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below and we'll get in touch with meeting details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="why-join" className="text-sm font-medium text-foreground">
                    Why do you want to join our book club?
                  </label>
                  <Textarea
                    id="why-join"
                    placeholder="Tell us what draws you to reading and community discussions..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BookOpen className="h-8 w-8" />
              <span className="font-serif text-2xl font-bold">Roseto Book Club</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:hello@rosetobookclub.com" className="hover:text-secondary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/rosetobookclub" className="hover:text-secondary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/rosetobookclub" className="hover:text-secondary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/80">© 2024 Roseto Book Club. Where stories bring us together.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
