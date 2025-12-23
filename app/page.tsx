import { BookOpen, Users, Heart, Mail, Instagram, Twitter, Coffee, Video } from "lucide-react"

export default function RosetoBookClub() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">Roseto</span>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
              <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
              <a href="#how" className="hover:text-stone-900 transition-colors">How it Works</a>
              <a href="#books" className="hover:text-stone-900 transition-colors">Books</a>
              <a href="#join" className="hover:text-stone-900 transition-colors">Join</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#f5f5f4]">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-serif text-6xl lg:text-8xl font-bold text-stone-900 mb-6 tracking-tighter">
            Roseto Book Club
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where stories bring us together
          </p>
          <a href="#join" className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg">
            Join Our Community
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-stone-900">About Roseto Book Club</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Founded in 2025, Roseto Book Club began as a small gathering of people who share a passion for literature. 
                Named after the charming Italian town known for its close-knit community, and also inspired by 
                the first book we read – <span className="italic font-semibold text-stone-900">The Outliers by Malcolm Gladwell</span> – we've grown into a welcoming space where readers of all backgrounds come together.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Our mission is simple: to foster meaningful connections through the power of storytelling. We believe that books have the unique ability to bridge differences, spark conversations, and create lasting friendships.
              </p>
              <div className="flex items-center gap-3 text-stone-900 font-bold">
                <Users className="w-6 h-6" />
                <span>15+ Active members</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-stone-100 aspect-square">
              <img 
                src="/about-us.jpg" 
                alt="Our Community" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section id="how" className="py-24 bg-[#fcfcfc] border-y border-stone-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">How we do it</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-3xl font-serif text-stone-300 mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Book Selection</h3>
              <p className="text-stone-600 leading-relaxed">At the beginning of the year, members nominate and vote for our quarterly reads of the years based on these genres: Self-help, African Literature, Autobiography, Fiction.</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-stone-300 mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Reading Period</h3>
              <p className="text-stone-600 leading-relaxed">We read a book every quarter, sharing thoughts and questions in our online forum.</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-stone-300 mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Discussion Meeting</h3>
              <p className="text-stone-600 leading-relaxed">We have monthly virtual meetings, and quarterly in-person gathering that feature lively discussions, snacks, coffee, and great company.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Details Card */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-stone-900 text-white rounded-3xl p-10 md:p-16 shadow-2xl">
            <h3 className="font-serif text-3xl mb-10 text-center">Meeting Details</h3>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <Video className="mx-auto mb-4 text-stone-400" />
                <p className="font-bold mb-2 text-stone-100">When</p>
                <div className="text-stone-300 text-sm space-y-1">
                  <p>Virtual: Every last Sunday / Month @ 4 PM</p>
                  <p>Physical: Last Sunday / Quarter @ 2 PM</p>
                </div>
              </div>
              <div>
                <Coffee className="mx-auto mb-4 text-stone-400" />
                <p className="font-bold mb-2 text-stone-100">Where</p>
                <p className="text-stone-300 text-sm">Local coffee cafes</p>
              </div>
              <div>
                <Heart className="mx-auto mb-4 text-stone-400" />
                <p className="font-bold mb-2 text-stone-100">Duration</p>
                <p className="text-stone-300 text-sm">2 – 3 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Books we've read</h2>
            <p className="text-stone-600 font-medium">From literary fiction to self-help, autobiographies to African literature – we explore all kinds of stories.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Outliers", author: "Malcolm Gladwell", img: "/book1.jpg" },
              { title: "Book Two", author: "Coming Soon", img: "/book2.jpg" },
              { title: "Book Three", author: "Coming Soon", img: "/book3.jpg" },
              { title: "Book Four", author: "Coming Soon", img: "/book4.jpg" }
            ].map((book, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-stone-100 mb-4 shadow-md transition-all">
                  <img 
                    src={book.img} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-stone-900">{book.title}</h4>
                <p className="text-sm text-stone-500">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="join" className="bg-[#f5f5f4] py-24 border-t border-stone-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold mb-8">Ready to join the conversation?</h2>
          <div className="flex justify-center gap-6 mb-12">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-stone-600" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-stone-600" />
          </div>
          <p className="text-stone-400 text-sm">© 2025 Roseto Book Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
