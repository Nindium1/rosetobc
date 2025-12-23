import { BookOpen, Users, Heart, Mail, Instagram, Twitter, Coffee, Video } from "lucide-react"

export default function RosetoBookClub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-teal-800 font-serif">Roseto</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#home" className="hover:text-teal-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-teal-600 transition-colors">About Us</a>
              <a href="#activities" className="hover:text-teal-600 transition-colors">How We Do It</a>
              <a href="#books" className="hover:text-teal-600 transition-colors">Books</a>
              <a href="#join" className="hover:text-teal-600 transition-colors">Join Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 bg-slate-50">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-teal-900 mb-6 font-serif">Roseto Book Club</h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Where stories bring us together
          </p>
          <a 
            href="#join" 
            className="inline-block bg-teal-800 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Join Our Community
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-teal-900 mb-12 text-center font-serif">About Roseto Book Club</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg mb-6 leading-relaxed text-slate-700">
                  Founded in 2025, Roseto Book Club began as a small gathering of people who share a passion for literature. 
                  Named after the charming Italian town known for its close-knit community—and inspired by the first book we read, 
                  <strong className="text-teal-800"> Outliers by Malcolm Gladwell</strong>—we've grown into a welcoming space where readers of all backgrounds come together.
                </p>
                <p className="text-lg mb-6 leading-relaxed text-slate-700">
                  Our mission is simple: to foster meaningful connections through the power of storytelling. We believe that books 
                  have the unique ability to bridge differences, spark conversations, and create lasting friendships.
                </p>
                <div className="flex items-center space-x-4 text-teal-700">
                  <Users className="h-6 w-6" />
                  <span className="font-semibold italic text-slate-800">15+ Active Members</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/about-us.jpg" 
                  alt="Roseto Book Club gathering"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-square bg-slate-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-teal-900 text-center mb-16 font-serif">How We Do It</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-teal-800 mb-6 font-serif underline decoration-teal-200 underline-offset-8">Our Rhythm</h3>
                <div className="flex items-start space-x-4">
                  <span className="bg-teal-800 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">1</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Book Selection</h4>
                    <p className="text-slate-600 text-sm">At the beginning of the year, members nominate and vote for our quarterly reads: Self-help, African Literature, Autobiography, and Fiction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="bg-teal-800 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">2</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Reading Period</h4>
                    <p className="text-slate-600 text-sm">We read a book every quarter, sharing thoughts and questions in our online forum.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="bg-teal-800 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">3</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Discussion Meetings</h4>
                    <p className="text-slate-600 text-sm">Monthly virtual meetings, plus quarterly in-person gatherings with snacks, coffee, and great company.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-teal-800 mb-6 font-serif underline decoration-teal-200 underline-offset-8">What to Expect</h3>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <div className="flex items-center space-x-3 mb-2 font-bold text-teal-800">
                      <Users className="h-5 w-5" />
                      <h4>Inclusive Discussions</h4>
                    </div>
                    <p className="text-sm text-slate-600">Everyone's perspective is valued. We create a safe space for sharing thoughts and interpretations.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <div className="flex items-center space-x-3 mb-2 font-bold text-teal-800">
                      <BookOpen className="h-5 w-5" />
                      <h4>Diverse Genres</h4>
                    </div>
                    <p className="text-sm text-slate-600">From literary fiction to self-help, autobiographies to African literature – we explore all kinds of stories.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-white p-8 rounded-2xl border-2 border-teal-50 shadow-sm text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-teal-900 mb-8 font-serif">Meeting Details</h3>
              <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div>
                  <Video className="h-6 w-6 mx-auto mb-3 text-teal-700" />
                  <p className="font-bold mb-1">When</p>
                  <p className="text-slate-600">Virtual: Last Sun / Month @ 4 PM</p>
                  <p className="text-slate-600">Physical: Last Sun / Quarter @ 2 PM</p>
                </div>
                <div>
                  <Coffee className="h-6 w-6 mx-auto mb-3 text-teal-700" />
                  <p className="font-bold mb-1">Where</p>
                  <p className="text-slate-600 font-medium">Local coffee cafes</p>
                </div>
                <div>
                  <Heart className="h-6 w-6 mx-auto mb-3 text-teal-700" />
                  <p className="font-bold mb-1">Duration</p>
                  <p className="text-slate-600">2 – 3 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books We've Read Section */}
      <section id="books" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-900 text-center mb-4 font-serif">Books We've Read</h2>
          <p className="text-center text-slate-500 mb-12 italic">Our literary journey so far</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Outliers", author: "Malcolm Gladwell", img: "/book1.jpg" },
              { title: "Book Title 2", author: "Author Name", img: "/book2.jpg" },
              { title: "Book Title 3", author: "Author Name", img: "/book3.jpg" },
              { title: "Book Title 4", author: "Author Name", img: "/book4.jpg" },
            ].map((book, index) => (
              <div key={index} className="bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                <img 
                  src={book.img} 
                  alt={book.title} 
                  className="w-full aspect-[3/4] object-cover bg-slate-200"
                />
                <div className="p-4">
                  <h3 className="font-bold text-sm text-slate-900">{book.title}</h3>
                  <p className="text-xs text-slate-500">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-3xl font-bold text-teal-900 text-center mb-2 font-serif">Join Roseto</h2>
            <p className="text-center text-slate-600 mb-8">Ready for our next discussion?</p>
            <form action="#" method="POST" className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                <input className="w-full border border-slate-300 rounded-lg p-3 outline-teal-600" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                <input className="w-full border border-slate-300 rounded-lg p-3 outline-teal-600" type="email" placeholder="Email address" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">What attracts you to Roseto?</label>
                <textarea className="w-full border border-slate-300 rounded-lg p-3 outline-teal-600" rows={4} placeholder="Your favorite genres..." />
              </div>
              <button className="w-full bg-teal-800 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold mb-4">Roseto Book Club</h2>
          <p className="text-teal-200/70 mb-8">© 2025 Roseto Book Club. Where stories bring us together.</p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:text-teal-300 transition-colors"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-teal-300 transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="hover:text-teal-300 transition-colors"><Mail className="h-6 w-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
