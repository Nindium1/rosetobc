import { BookOpen, Users, Heart, Mail, Instagram, Coffee, Video, Star, Quote } from "lucide-react"

export default function RosetoBookClub() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl font-bold text-blue-900">Roseto</span>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
              <a href="#how" className="hover:text-blue-600 transition-colors">How We Do It</a>
              <a href="#books" className="hover:text-blue-600 transition-colors">Books</a>
              <a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#join" className="hover:text-blue-600 transition-colors">Join</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-blue-950 mb-6">
            Roseto Book Club
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Where stories bring us together
          </p>
          <a href="#join" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md">
            Join Our Community
          </a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-blue-900">About Roseto Book Club</h2>
              <p className="text-lg leading-relaxed text-slate-700">
                Founded in 2025, Roseto Book Club began as a small community of people who share a passion for literature. 
                Named after the charming Italian town known for its close-knit community, and also inspired by 
                the first book we read – <span className="font-bold text-blue-800 italic">The Outliers by Malcolm Gladwell</span> – we've grown into a welcoming space where readers of all backgrounds come together.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Our mission is simple: to foster meaningful connections through the power of storytelling. We believe that books have the unique ability to bridge differences, spark conversations, and create lasting friendships.
              </p>
              <div className="flex items-center space-x-3 text-blue-700 font-bold">
                <Users className="h-6 w-6" />
                <span>15+ Active members</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-blue-50 aspect-square border border-blue-100">
              <img src="/about-us.jpg" alt="About Roseto" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section id="how" className="py-20 bg-slate-50 border-y border-slate-100 px-4">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-blue-950">How we do it</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Book Selection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">At the beginning of the year, members nominate and vote for our quarterly reads based on these genres: Self-help, African Literature, Autobiography, Fiction.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Reading Period</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We read a book every quarter, sharing thoughts and questions in our online forum.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Discussion Meeting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We have monthly virtual meetings, and quarterly in-person gathering that feature lively discussions, snacks, and coffee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Details */}
      <section className="py-12 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-8 text-center">Meeting Details</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Video className="h-8 w-8 mx-auto mb-4 text-sky-100" />
                <p className="font-bold">When</p>
                <p className="text-sky-50 text-xs">Virtual: Last Sun of the Month @ 4 PM</p>
                <p className="text-sky-50 text-xs">Physical: Last Sun of the Quarter @ 2 PM</p>
              </div>
              <div>
                <Coffee className="h-8 w-8 mx-auto mb-4 text-sky-100" />
                <p className="font-bold">Where</p>
                <p className="text-sky-50 text-xs">Local coffee cafes</p>
              </div>
              <div>
                <Heart className="h-8 w-8 mx-auto mb-4 text-sky-100" />
                <p className="font-bold">Duration</p>
                <p className="text-sky-50 text-xs">2 – 3 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-4xl font-bold text-blue-900 mb-4">Books we've read</h2>
            <p className="text-slate-600 font-medium italic">"From literary fiction to self-help, autobiographies to African literature – we explore all kinds of stories"</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Outliers", author: "Malcolm Gladwell", img: "/book1.jpg" },
              { title: "Petals of Blood", author: "Ngũgĩ wa Thiong'o", img: "/book2.jpg" },
              { title: "Can't Hurt Me", author: "David Goggins", img: "/book3.jpg" },
              { title: "The Vegetarian", author: "Han Kang", img: "/book4.jpg" }
            ].map((book, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition-all">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-900 leading-tight">{book.title}</h4>
                <p className="text-sm text-slate-500">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-50 border-y border-slate-100 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-blue-900 mb-4">Member Reflections</h2>
            <p className="text-slate-500 text-sm italic">Scroll or swipe to see more reviews →</p>
          </div>

          {/* The Slider Container */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {[
              { 
                book: "Outliers", 
                text: "Gladwell’s breakdown of success sparked a huge debate. It really changed how we look at achievement—not just as hard work, but as a combination of timing and community.",
                member: "Founding Member"
              },
              { 
                book: "Petals of Blood", 
                text: "A challenging but rewarding read. Ngũgĩ’s exploration of history and social change in Kenya led to a deeply emotional and insightful gathering.",
                member: "Active Member"
              },
              { 
                book: "Can't Hurt Me", 
                text: "David Goggins really pushed our limits. It wasn't just a book discussion; it was a call to action. Several of us started new personal challenges!",
                member: "Active Member"
              },
              { 
                book: "The Vegetarian", 
                text: "Haunting and poetic. This book pushed us out of our comfort zones and led to an incredible discussion about identity and society.",
                member: "New Member"
              }
            ].map((review, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center bg-white p-8 rounded-3xl shadow-sm border border-blue-50 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <Quote className="text-sky-100 h-8 w-8 mb-4" />
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="fill-current h-3 w-3" />)}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>
                <div>
                  <p className="font-bold text-blue-950 text-sm">{review.member}</p>
                  <p className="text-xs text-slate-500 italic">Reviewing: {review.book}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-white px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-blue-50 shadow-inner">
            <h2 className="text-3xl font-serif font-bold text-blue-900 text-center mb-2">Join Roseto</h2>
            <p className="text-center text-slate-600 mb-8">Apply for membership for our 2025 season</p>
            <form 
  action="https://formspree.io/f/xkowpenq" 
  method="POST" 
  className="space-y-4"
>
  <input 
    name="name"
    required
    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
    placeholder="Full Name" 
  />
  <input 
    name="email"
    type="email" 
    required
    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
    placeholder="Email" 
  />
  <textarea 
    name="message"
    required
    className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 bg-white" 
    rows={3} 
    placeholder="Tell us why you'd like to join..."
  ></textarea>
  <button 
    type="submit" 
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
  >
    Submit Application
  </button>
</form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <Instagram className="h-6 w-6 cursor-pointer hover:text-sky-400 transition-colors" />
            <Mail className="h-6 w-6 cursor-pointer hover:text-sky-400 transition-colors" />
          </div>
          <p className="text-slate-400 text-sm italic mb-2">"Named after the charming Italian town known for its close-knit community"</p>
          <p className="text-slate-500 text-xs">© 2025 Roseto Book Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
