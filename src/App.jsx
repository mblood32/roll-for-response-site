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

  return (
    <div style={{minHeight:"100vh", background:"radial-gradient(circle at top, rgba(212,175,55,0.10), transparent 30%), linear-gradient(180deg,#08111c 0%,#0f1f33 35%,#f5ead1 35%,#f7eed9 100%)", color:"#0f172a"}}>
      <header style={{position:"relative", overflow:"hidden", borderBottom:"1px solid rgba(253,230,138,0.12)", background:"#020617", color:"white"}}>
        <div style={{maxWidth:1280, margin:"0 auto", display:"grid", gap:"2.5rem", padding:"5rem 1.5rem", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))"}}>
          <div style={{position:"relative", zIndex:10, display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <div style={{marginBottom:"1rem", display:"inline-flex", width:"fit-content", alignItems:"center", gap:"0.5rem", borderRadius:9999, border:"1px solid rgba(252,211,77,0.3)", background:"rgba(255,255,255,0.05)", padding:"0.6rem 1rem", fontSize:"0.8rem", letterSpacing:"0.2em", color:"#fde68a", textTransform:"uppercase"}}>
              <span>Roll for Response</span>
              <span style={{color:"#fbbf24"}}>✦</span>
              <span>Train the way you actually practice</span>
            </div>

            <h1 style={{maxWidth:700, fontSize:"clamp(2.5rem, 6vw, 4.5rem)", lineHeight:1.05, margin:0, fontWeight:900}}>
              Modern EMS training with a subtle fantasy edge.
            </h1>

            <p style={{marginTop:"1.5rem", maxWidth:760, fontSize:"1.15rem", lineHeight:1.8, color:"#cbd5e1"}}>
              A clinical decision-making platform that blends realistic EMS education,
              scenario-based play, and reflective debriefing into one cohesive training experience.
            </p>

            <div style={{marginTop:"2rem", display:"flex", flexWrap:"wrap", gap:"1rem"}}>
              <button style={{borderRadius:"1rem", background:"#fbbf24", color:"#0f172a", border:"none", padding:"0.95rem 1.4rem", fontWeight:700, boxShadow:"0 10px 24px rgba(251,191,36,0.2)", cursor:"pointer"}}>
                Explore the System
              </button>
              <button style={{borderRadius:"1rem", border:"1px solid rgba(255,255,255,0.2)", background:"rgba(255,255,255,0.05)", color:"white", padding:"0.95rem 1.4rem", fontWeight:700, cursor:"pointer"}}>
                View Training Mode
              </button>
            </div>

            <div style={{marginTop:"2.5rem", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))", gap:"1rem", maxWidth:900}}>
              {pillars.map((item) => (
                <div key={item} style={{borderRadius:"1rem", border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", padding:"1rem", color:"#cbd5e1", fontSize:"0.95rem"}}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{position:"relative", zIndex:10, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div style={{width:"100%", maxWidth:560, borderRadius:32, border:"1px solid rgba(253,230,138,0.18)", background:"rgba(255,255,255,0.08)", padding:"1.25rem", boxShadow:"0 25px 60px rgba(0,0,0,0.25)"}}>
              <div style={{borderRadius:28, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(15,23,42,0.96)", padding:"1.5rem", color:"#e2e8f0"}}>
                <div style={{marginBottom:"1rem", display:"flex", alignItems:"start", justifyContent:"space-between", gap:"1rem"}}>
                  <div>
                    <p style={{margin:0, fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.3em", color:"#fde68a"}}>Field Scenario</p>
                    <h2 style={{margin:"0.75rem 0 0", fontSize:"1.6rem", lineHeight:1.2}}>STEMI — The Clock Is Ticking</h2>
                  </div>
                  <div style={{borderRadius:"1rem", border:"1px solid rgba(253,230,138,0.25)", background:"rgba(251,191,36,0.10)", padding:"0.75rem 1rem", textAlign:"center"}}>
                    <div style={{fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.2em", color:"#fde68a"}}>Tier</div>
                    <div style={{fontSize:"1.1rem", fontWeight:800, color:"#fcd34d"}}>ALS</div>
                  </div>
                </div>

                <div style={{display:"grid", gap:"1rem", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"}}>
                  <div style={{borderRadius:"1rem", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(30,41,59,0.85)", padding:"1rem"}}>
                    <p style={{margin:0, fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.2em", color:"#fde68a"}}>Dispatch</p>
                    <p style={{margin:"0.7rem 0 0", fontSize:"0.95rem", lineHeight:1.7, color:"#cbd5e1"}}>
                      68-year-old male with crushing chest pain, diaphoresis, and hypotension.
                    </p>
                  </div>
                  <div style={{borderRadius:"1rem", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(30,41,59,0.85)", padding:"1rem"}}>
                    <p style={{margin:0, fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.2em", color:"#fde68a"}}>Roll Triggers</p>
                    <p style={{margin:"0.7rem 0 0", fontSize:"0.95rem", lineHeight:1.7, color:"#cbd5e1"}}>
                      Assessment, ECG interpretation, medication administration, transport decision.
                    </p>
                  </div>
                  <div style={{borderRadius:"1rem", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(30,41,59,0.85)", padding:"1rem", gridColumn:"1 / -1"}}>
                    <p style={{margin:0, fontSize:"0.72rem", textTransform:"uppercase", letterSpacing:"0.2em", color:"#fde68a"}}>Design Intent</p>
                    <p style={{margin:"0.7rem 0 0", fontSize:"0.95rem", lineHeight:1.7, color:"#cbd5e1"}}>
                      Grounded clinical realism supported by gold accents, parchment-inspired framing,
                      and subtle tabletop energy.
                    </p>
                  </div>
                </div>

                <div style={{marginTop:"1.25rem", display:"flex", alignItems:"center", justifyContent:"space-between", borderRadius:"1rem", border:"1px solid rgba(253,230,138,0.18)", background:"linear-gradient(90deg, rgba(251,191,36,0.12), transparent, rgba(96,165,250,0.12))", padding:"0.9rem 1rem"}}>
                  <span style={{fontSize:"0.95rem", fontWeight:600, color:"#e2e8f0"}}>After Action Review drives the learning.</span>
                  <span style={{color:"#fcd34d"}}>✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section style={{maxWidth:1280, margin:"0 auto", padding:"5rem 1.5rem"}}>
          <div style={{marginBottom:"3rem", maxWidth:760}}>
            <p style={{fontSize:"0.85rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.25em", color:"#64748b"}}>Core identity</p>
            <h2 style={{marginTop:"0.75rem", fontSize:"clamp(2rem, 4vw, 3rem)", lineHeight:1.1, color:"#0f172a"}}>Professional first. Mythic in texture.</h2>
            <p style={{marginTop:"1.25rem", fontSize:"1.1rem", lineHeight:1.9, color:"#334155"}}>
              The website should feel like an EMS education platform first, with fantasy details used as atmosphere:
              gold dividers, subtle iconography, a few parchment notes, and a D20-inspired geometry language.
            </p>
          </div>

          <div style={{display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))"}}>
            {features.map((feature) => (
              <div key={feature.title} style={{borderRadius:28, border:"1px solid #e2e8f0", background:"rgba(255,255,255,0.82)", padding:"1.5rem", boxShadow:"0 6px 24px rgba(15,23,42,0.06)"}}>
                <div style={{marginBottom:"1rem", display:"flex", height:56, width:56, alignItems:"center", justifyContent:"center", borderRadius:18, background:"#020617", color:"#fcd34d", fontSize:"1.6rem"}}>
                  {feature.icon}
                </div>
                <h3 style={{margin:"0 0 0.5rem", fontSize:"1.2rem", color:"#0f172a"}}>{feature.title}</h3>
                <p style={{margin:0, lineHeight:1.8, color:"#475569"}}>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{borderTop:"1px solid #e2e8f0", borderBottom:"1px solid #e2e8f0", background:"rgba(255,255,255,0.55)"}}>
          <div style={{maxWidth:1280, margin:"0 auto", display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", padding:"5rem 1.5rem"}}>
            {sections.map((section) => (
              <div key={section.heading} style={{borderRadius:28, border:"1px solid rgba(253,230,138,0.65)", background:"linear-gradient(180deg, white, #fffbeb)", padding:"1.75rem", boxShadow:"0 6px 24px rgba(15,23,42,0.05)"}}>
                <div style={{marginBottom:"1.25rem", height:4, width:64, borderRadius:9999, background:"#fbbf24"}} />
                <h3 style={{margin:0, fontSize:"1.5rem", lineHeight:1.2, color:"#0f172a"}}>{section.heading}</h3>
                <p style={{margin:"1rem 0 0", lineHeight:1.9, color:"#334155"}}>{section.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{maxWidth:1280, margin:"0 auto", padding:"5rem 1.5rem"}}>
          <div style={{display:"grid", gap:"2.5rem", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", alignItems:"center"}}>
            <div>
              <p style={{fontSize:"0.85rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.25em", color:"#64748b"}}>Website direction</p>
              <h2 style={{marginTop:"0.75rem", fontSize:"clamp(2rem, 4vw, 3rem)", lineHeight:1.1}}>What the experience should communicate</h2>
              <div style={{marginTop:"2rem", display:"grid", gap:"1rem", color:"#334155", fontSize:"1.05rem", lineHeight:1.9}}>
                <p>
                  Visitors should immediately understand that this is not generic gamification. It is a serious EMS
                  education system with a memorable identity.
                </p>
                <p>
                  The fantasy layer should appear through atmosphere rather than costume: illumination, parchment notes,
                  heraldic geometry, and language like <strong style={{color:"#0f172a"}}>legendary calls</strong>, <strong style={{color:"#0f172a"}}>field journals</strong>, and <strong style={{color:"#0f172a"}}>campaign mode</strong>.
                </p>
                <p>
                  The modern EMS layer should dominate through clean typography, realistic scenarios, educator-facing
                  structure, and a calm professional layout.
                </p>
              </div>
            </div>

            <div style={{borderRadius:32, border:"1px solid #e2e8f0", background:"#020617", padding:"2rem", color:"white", boxShadow:"0 20px 45px rgba(2,6,23,0.2)"}}>
              <p style={{fontSize:"0.85rem", textTransform:"uppercase", letterSpacing:"0.3em", color:"#fcd34d"}}>Visual recipe</p>
              <ul style={{marginTop:"1.5rem", display:"grid", gap:"1rem", paddingLeft:"1.1rem", color:"#cbd5e1", lineHeight:1.8}}>
                <li>Deep navy and slate as the core palette</li>
                <li>Gold used as a premium accent, not the base color</li>
                <li>Parchment tones reserved for callouts and texture</li>
                <li>Rounded modern cards with subtle fantasy framing</li>
                <li>Real EMS photography or realism-inspired illustration</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{background:"#020617", color:"white"}}>
          <div style={{maxWidth:1280, margin:"0 auto", padding:"5rem 1.5rem"}}>
            <div style={{display:"grid", gap:"2rem", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))"}}>
              <div>
                <p style={{fontSize:"0.85rem", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.3em", color:"#fcd34d"}}>Suggested pages</p>
                <h2 style={{marginTop:"0.75rem", fontSize:"clamp(2rem, 4vw, 3rem)", lineHeight:1.1}}>A website structure that can grow with the project</h2>
              </div>
              <div style={{display:"grid", gap:"1rem", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))"}}>
                {[
                  "Home",
                  "About the System",
                  "Training Mode",
                  "Campaign Mode",
                  "Scenario Library",
                  "Instructor Tools",
                  "Field Journal",
                  "Contact / Demo",
                ].map((item) => (
                  <div key={item} style={{borderRadius:"1rem", border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", padding:"1rem", color:"#e2e8f0"}}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
