export default function RollForResponseWebsite() {
  const features = [
    {
      title: "Clinical Reasoning First",
      text: "Built to train decision-making under uncertainty, not just protocol recall.",
      icon: "🧠",
    },
    {
      title: "Training Mode",
      text: "Structured reflection, After Action Review, and educator-guided growth.",
      icon: "🚑",
    },
    {
      title: "Campaign Feel",
      text: "Fatigue, stress, and scene complexity create a realistic shift-based experience.",
      icon: "🎲",
    },
    {
      title: "Agency Ready",
      text: "Designed for FTO programs, training nights, playtesting, and future curriculum deployment.",
      icon: "⚡",
    },
  ];

  const pillars = [
    "Modern EMS realism",
    "Gamified clinical decision-making",
    "Instructor-guided debriefing",
    "Fantasy-inspired identity without losing professionalism",
  ];

  const sections = [
    {
      heading: "Built for real EMS education",
      body:
        "Roll for Response blends tabletop game structure with the cognitive demands of real prehospital care. The result is a training tool that feels engaging without losing clinical seriousness.",
    },
    {
      heading: "A little fantasy. Mostly modern EMS.",
      body:
        "The aesthetic uses parchment tones, gold dividers, and subtle D20 motifs, but the experience stays grounded in ambulance work, scene management, and clinical reasoning.",
    },
    {
      heading: "Designed to teach the why",
      body:
        "Every scenario ends with reflection. Learners are pushed to explain what they saw, why they chose an intervention, and what they would change next time.",
    },
  ];

  const audience = [
    {
      title: "Agencies",
      text: "Use Roll for Response for training nights, structured field education, and playtest-based curriculum development.",
    },
    {
      title: "FTOs & Educators",
      text: "Guide learners through scenarios, debrief decisions, and turn gameplay into serious reflective learning.",
    },
    {
      title: "Students & Clinicians",
      text: "Build clinical reasoning, scene awareness, and adaptability in a format that feels memorable and engaging.",
    },
  ];

  const pageLinks = [
    "Home",
    "About the System",
    "Training Mode",
    "Campaign Mode",
    "Scenario Library",
    "Instructor Tools",
    "Field Journal",
    "Contact / Demo",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_30%),linear-gradient(180deg,#08111c_0%,#0f1f33_35%,#f5ead1_35%,#f7eed9_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/30 bg-white/5 text-amber-300 shadow-lg shadow-amber-500/10">
              ✦
            </div>
            <div>
              <div className="text-lg font-black tracking-tight">Roll for Response</div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Modern EMS training</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <a href="#system" className="transition hover:text-white">System</a>
            <a href="#training" className="transition hover:text-white">Training Mode</a>
            <a href="#audience" className="transition hover:text-white">Who It&apos;s For</a>
            <a href="#demo" className="transition hover:text-white">Request a Demo</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-amber-200/20 bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.18),transparent)]" />
        <div className="absolute -top-24 right-[-60px] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute left-[-80px] top-24 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-12">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-sm tracking-[0.2em] text-amber-200 uppercase">
              <span>Roll for Response</span>
              <span className="text-amber-400">✦</span>
              <span>Train the way you actually practice</span>
            </div>

            <h1 className="max-w-xl text-5xl font-black tracking-tight md:text-6xl">
              Modern EMS training with a subtle fantasy edge.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              A clinical decision-making platform that blends realistic EMS education,
              scenario-based play, and reflective debriefing into one cohesive training experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#system" className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5">
                Explore the System
              </a>
              <a href="#demo" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Request a Demo
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-4">
              {pillars.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-full max-w-xl rounded-[32px] border border-amber-200/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="rounded-[28px] border border-white/10 bg-slate-900/90 p-6 text-slate-100 shadow-inner">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Field Scenario</p>
                    <h2 className="mt-2 text-2xl font-bold">STEMI — The Clock Is Ticking</h2>
                  </div>
                  <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 px-4 py-3 text-center">
                    <div className="text-xs uppercase tracking-[0.2em] text-amber-200">Tier</div>
                    <div className="text-lg font-bold text-amber-300">ALS</div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Dispatch</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      68-year-old male with crushing chest pain, diaphoresis, and hypotension.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Roll Triggers</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Assessment, ECG interpretation, medication administration, transport decision.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4 md:col-span-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Design Intent</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Grounded clinical realism supported by gold accents, parchment-inspired framing,
                      and subtle tabletop energy.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-amber-300/20 bg-gradient-to-r from-amber-400/10 via-transparent to-blue-400/10 px-4 py-3">
                  <span className="text-sm font-medium text-slate-200">After Action Review drives the learning.</span>
                  <span className="text-amber-300">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="system" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Core identity</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Professional first. Mythic in texture.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              The website should feel like an EMS education platform first, with fantasy details used as atmosphere:
              gold dividers, subtle iconography, a few parchment notes, and a D20-inspired geometry language.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-amber-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="training" className="border-y border-slate-200 bg-white/60">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3 md:px-10 lg:px-12">
            {sections.map((section) => (
              <div key={section.heading} className="rounded-[28px] border border-amber-200/60 bg-gradient-to-b from-white to-amber-50 p-7 shadow-sm">
                <div className="mb-5 h-1 w-16 rounded-full bg-amber-400" />
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{section.heading}</h3>
                <p className="mt-4 leading-8 text-slate-700">{section.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="audience" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Who it&apos;s for</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Built for agencies, educators, and crews who want better training.</h2>
              <div className="mt-8 grid gap-5">
                {audience.map((item) => (
                  <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-8 text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Visual recipe</p>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Deep navy and slate as the core palette</li>
                <li>• Gold used as a premium accent, not the base color</li>
                <li>• Parchment tones reserved for callouts and texture</li>
                <li>• Rounded modern cards with subtle fantasy framing</li>
                <li>• Real EMS photography or realism-inspired illustration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Suggested pages</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight">A website structure that can grow with the project</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {pageLinks.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Request a demo</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Invite interest before full launch.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Use this section to collect playtest requests, agency interest, educator inquiries, or conference follow-up.
                It keeps the site useful even before full public release.
              </p>
              <div className="mt-8 rounded-[28px] border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Suggested copy</p>
                <p className="mt-3 leading-8 text-slate-700">
                  Interested in playtesting Roll for Response, requesting a demo, or exploring agency use?
                  Send a message and we&apos;ll follow up with next steps.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Organization</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="Agency, school, or team" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                  <textarea className="min-h-[160px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-400" placeholder="Tell us what kind of training, playtesting, or demo you’re interested in." />
                </div>
                <button className="rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-slate-800">
                  Send inquiry
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <div>
            <span className="font-semibold text-slate-900">Roll for Response</span> — Modern EMS training with a subtle fantasy edge.
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#system" className="hover:text-slate-900">System</a>
            <a href="#training" className="hover:text-slate-900">Training Mode</a>
            <a href="#demo" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
