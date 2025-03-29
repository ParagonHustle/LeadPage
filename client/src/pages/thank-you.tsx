import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, CheckCircle, Download, Gamepad2, Rocket, Target, Trophy, Lock } from "lucide-react";
import { PopupButton } from "react-calendly";
import { useState, useEffect, useRef } from "react";

export default function ThankYou() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [activeLevel, setActiveLevel] = useState(1);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);



  useEffect(() => {
    setRootElement(document.getElementById('root'));

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Intersection observer to track which section is in view and update XP
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            const levelXp = maxXp / levels.length;

            if (section === section1Ref.current) setXp(levelXp * 1);
            else if (section === section2Ref.current) setXp(levelXp * 2);
            else if (section === section3Ref.current) setXp(levelXp * 3);
            else if (section === section4Ref.current) setXp(levelXp * 4);
            else if (section === section5Ref.current) setXp(levelXp * 5);
            else if (section === section6Ref.current) setXp(levelXp * 6);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);
    if (section6Ref.current) observer.observe(section6Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
      if (section5Ref.current) observer.unobserve(section5Ref.current);
      if (section6Ref.current) observer.unobserve(section6Ref.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-7xl"> {/* Added max-width and justify-center */}
          <div className="flex relative justify-center"> {/* Centered main content */}

            {/* Main Content */}
            <div className="w-full lg:max-w-3xl"> {/* Removed lg:ml-10 for centering */}
              <div className="flex justify-start mb-6">
                <Link href="/">
                  <Button variant="ghost" className="gap-2">
                    <ArrowLeft size={16} />
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* HERO SECTION */}
              <div ref={section1Ref} className="text-center mb-12 relative">
                <div className="space-y-6 p-6 bg-gradient-to-r from-card/80 to-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Level {activeLevel}</h3>
                        <p className="text-sm text-muted-foreground">Growth Master</p>
                      </div>
                    </div>
                    <div className="text-right">
                  </div>
                  </div>


                </div>

                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  Quest Unlocked!
                </h1>
                <p className="text-xl mb-3">
                  You've Got the Blueprint—Now Let's Build the Empire
                </p>
                <p className="text-muted-foreground mb-6">
                  Your free PDF is on its way to your inbox. <br />
                  But the real magic happens when the system goes from idea → execution
                </p>

                {/* Main CTA Button */}
                {rootElement && (
                  <PopupButton 
                    url="https://calendly.com/johnparagon/chat"
                    rootElement={rootElement}
                    text="🕹️ Begin the Strategy Call Quest"
                    className="animate-pulse bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg"
                  />
                )}
                {!rootElement && (
                  <Button 
                    className="animate-pulse bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg gap-2"
                    onClick={() => window.open("https://calendly.com/johnparagon/chat", "_blank")}
                  >
                    <Gamepad2 size={18} />
                    🕹️ Begin the Strategy Call Quest
                  </Button>
                )}
              </div>

              {/* EXCLUSIVE OFFER SECTION */}
              <div ref={section2Ref} className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-8 mb-10 shadow-xl relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display text-center">
                  This Offer Isn't Public—And It Wasn't in the PDF
                </h2>

                <div className="space-y-4 mb-6">
                  <p>The strategies you just downloaded? <br/>
                  They're pulled from high-performance acquisition systems responsible for <span className="font-bold">billions in game revenue, service sales, and microtransactions</span> in Web2</p>

                  <p>When our team installs the full stack for Web3 games, we typically work on <span className="font-bold">$10k–$100k deals</span> (plus revenue share)<br/>
                  That's the standard for this kind of firepower</p>

                  <p className="font-bold">But this isn't that</p>

                  <div className="pl-4 border-l-4 border-primary/50 italic">
                    <p>This is an <span className="font-bold">entry point</span><br/>
                    A shortcut into the collaboration<br/>
                    An invitation to earn your spot in our network<br/>
                    A chance to implement a <span className="italic">lightweight version</span> of the full system—and start seeing momentum before investing heavy resources</p>
                  </div>

                  <p className="font-bold">We don't sell this publicly</p>
                  <p>We offer it to founders who we believe have serious potential<br/>
                  Which is why you're seeing this</p>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  {rootElement && (
                    <PopupButton 
                      url="https://calendly.com/johnparagon/chat"
                      rootElement={rootElement}
                      text="🎯 Book Your Free Strategy Session"
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg"
                    />
                  )}
                  {!rootElement && (
                    <Button 
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg gap-2"
                      onClick={() => window.open("https://calendly.com/johnparagon/chat", "_blank")}
                    >
                      <Target size={18} />
                      🎯 Book Your Free Strategy Session
                    </Button>
                  )}
                </div>
              </div>

              {/* WHAT'S IN THE PACK SECTION */}
              <div ref={section3Ref} className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-8 mb-10 shadow-xl relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display text-center">
                  Here's What You'll Walk Away With
                </h2>

                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/20 p-2 rounded-full shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Audience Share Campaign</h3>
                      <p className="text-muted-foreground">We introduce your world to ours. A zero-risk collaboration that starts building cross-community trust—instantly</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/20 p-2 rounded-full shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Gleam Collab (7-Day Campaign)</h3>
                      <p className="text-muted-foreground">Fully built by us. Gamified, community-driven, and built to increase player retention from Day 1</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/20 p-2 rounded-full shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Private Community Giveaway (30 Days)</h3>
                      <p className="text-muted-foreground">You get a done-with-you event system you can repeat endlessly to boost retention, referrals, and community energy</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/20 p-2 rounded-full shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">KOL Exposure Campaign</h3>
                      <p className="text-muted-foreground">Our private network of KOLs drives real traffic to your game or event. We don't profit from this—we fund the promo for you</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/20 p-2 rounded-full shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Break-Even Funnel Strategy Session (30 min)</h3>
                      <p className="text-muted-foreground">Jump on a call with John and co-design your entry-point offer. This is how you get your paid marketing to self-fund—before you even scale</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/20 p-2 rounded-full shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Value Ascension Ladder Design</h3>
                      <p className="text-muted-foreground">Get a plug-and-play version of the same structure used to scale Web2 services to 7–8 figures—adapted for your Web3 ecosystem</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  {rootElement && (
                    <PopupButton 
                      url="https://calendly.com/johnparagon/chat"
                      rootElement={rootElement}
                      text="🧠 Book My Strategy Call Now"
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg"
                    />
                  )}
                  {!rootElement && (
                    <Button 
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg gap-2"
                      onClick={() => window.open("https://calendly.com/johnparagon/chat", "_blank")}
                    >
                      <Rocket size={18} />
                      🧠 Book My Strategy Call Now
                    </Button>
                  )}
                </div>
              </div>

              {/* WHY NOW SECTION */}
              <div ref={section4Ref} className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-8 mb-10 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display text-center">
                  This Is the First Web3 Game Funnel Engineered to Pay For Itself
                </h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Here's the real win:<br/>
                    You stop burning capital on short-term hype<br/>
                    You start acquiring real players<br/>
                    You install a system that scales—without the risk
                  </h3>

                  <ul className="space-y-2 ml-6 list-disc">
                    <li>You get a working player acquisition funnel—while others keep guessing</li>
                    <li>You get our frameworks, adapted to your game, for free on the call</li>
                    <li>You take the first step in a relationship that could be worth 6 or 7 figures over time (for both of us)</li>
                  </ul>

                  <div className="border-l-4 border-primary/50 pl-4 my-6 italic">
                    <p>This is how partnerships should start<br/>
                    Not with hype<br/>
                    With value</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  {rootElement && (
                    <PopupButton 
                      url="https://calendly.com/johnparagon/chat"
                      rootElement={rootElement}
                      text="🎮 Yes, Let's Build My Funnel"
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg"
                    />
                  )}
                  {!rootElement && (
                    <Button 
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg gap-2"
                      onClick={() => window.open("https://calendly.com/johnparagon/chat", "_blank")}
                    >
                      <Gamepad2 size={18} />
                      🎮 Yes, Let's Build My Funnel
                    </Button>
                  )}
                </div>
              </div>

              {/* OBJECTION SECTION */}
              <div ref={section5Ref} className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-8 mb-10 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display text-center">
                  Let's Be Clear About What This Is… And What It's Not
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-red-500 mb-2">You Will NOT Get:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full">
                          <span className="text-red-500 text-lg">🚫</span>
                        </div>
                        <span>A bait-and-switch</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full">
                          <span className="text-red-500 text-lg">🚫</span>
                        </div>
                        <span>A pushy pitch</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full">
                          <span className="text-red-500 text-lg">🚫</span>
                        </div>
                        <span>A vague sales script</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary mb-2">You WILL Get:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span>A real strategy call with someone who's built and scaled marketing systems that do 8 figures outside Web3</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span>A custom entry-point offer design you can implement whether we work together or not</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span>Access to a private system that no other Web3 game is using yet</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-center italic text-muted-foreground">
                  <p>This is the call we <span className="line-through">used to charge $1,500 for</span><br/>
                  You're getting it because we believe in building long-term<br/>
                  Not short-term cash grabs</p>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-6">
                  {rootElement && (
                    <PopupButton 
                      url="https://calendly.com/johnparagon/chat"
                      rootElement={rootElement}
                      text="📅 Book My Free Strategy Session"
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg"
                    />
                  )}
                  {!rootElement && (
                    <Button 
                      className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg gap-2"
                      onClick={() => window.open("https://calendly.com/johnparagon/chat", "_blank")}
                    >
                      <Calendar size={18} />
                      📅 Book My Free Strategy Session
                    </Button>
                  )}
                </div>
              </div>

              {/* FINAL CTA SECTION */}
              <div ref={section6Ref} className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/30 rounded-xl p-8 text-center shadow-xl mb-8 relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                  This Is Invite-Only for a Reason
                </h2>

                <p className="mb-4">We can only support a handful of these partnerships each month<br/>
                Once your PDF is delivered, this offer won't be shown again</p>

                <p className="font-bold mb-6">You've seen the blueprint<br/>
                Now let's turn it into a weapon</p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  {rootElement && (
                    <PopupButton 
                      url="https://calendly.com/johnparagon/chat"
                      rootElement={rootElement}
                      text="🕹️ Begin My Strategy Quest Now"
                      className="animate-pulse bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-4 px-10 rounded-md text-xl shadow-lg"
                    />
                  )}
                  {!rootElement && (
                    <Button 
                      className="animate-pulse bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-bold py-4 px-10 rounded-md text-xl shadow-lg gap-3"
                      onClick={() => window.open("https://calendly.com/johnparagon/chat", "_blank")}
                    >
                      <Gamepad2 size={20} />
                      🕹️ Begin My Strategy Quest Now
                    </Button>
                  )}
                </div>
              </div>

              {/* PDF DOWNLOAD REMINDER */}
              <div className="bg-card border border-border/50 rounded-lg p-6 mb-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Your PDF Is On Its Way</h3>
                    <p className="text-sm text-muted-foreground">
                      Check your email for your Milestone-Based Onboarding Guide. Can't find it? Download it directly.
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto shrink-0">
                    <Download size={14} className="mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}