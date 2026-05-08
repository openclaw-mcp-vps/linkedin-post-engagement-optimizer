export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For B2B Marketers &amp; Sales Pros
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Optimize LinkedIn Posts for{" "}
          <span className="text-[#58a6ff]">Maximum Engagement</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          AI-powered analysis of your post performance with smart suggestions for optimal posting times, trending hashtags, and high-converting content formats.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Optimizing — $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">3.2x</div>
            <div className="text-[#8b949e] text-sm mt-1">Avg. engagement lift</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">47%</div>
            <div className="text-[#8b949e] text-sm mt-1">More profile views</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">2 min</div>
            <div className="text-[#8b949e] text-sm mt-1">Setup time</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "AI post performance analysis",
              "Optimal posting time recommendations",
              "Hashtag strategy suggestions",
              "Content format scoring",
              "Unlimited post history",
              "Weekly engagement reports"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI optimization work?</h3>
            <p className="text-[#8b949e] text-sm">We analyze your historical post data alongside industry benchmarks to identify patterns in what drives engagement for your specific audience and niche, then surface actionable recommendations.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Do I need to connect my LinkedIn account?</h3>
            <p className="text-[#8b949e] text-sm">Yes, we use the LinkedIn API with read-only access to analyze your post performance. We never post on your behalf without explicit permission.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} LinkedIn Post Engagement Optimizer. All rights reserved.</p>
      </footer>
    </main>
  );
}
