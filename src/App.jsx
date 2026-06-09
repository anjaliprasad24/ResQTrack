import './App.css'

function App() {
  return (
    <>
      <nav className="nav">
        <a className="nav-logo">
          <div className="nav-paw">🐾</div>
          <span className="nav-name">ResQTrack</span>
        </a>

        <div className="nav-links">
          <span className="nav-link">Get started</span>
          <span className="nav-link">How it works</span>
          <span className="nav-link">About</span>
          <button className="nav-btn">Join now</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-scene">
          <svg
            className="scene-svg"
            viewBox="0 0 1000 520"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d1f2d" />
                <stop offset="28%" stopColor="#1a3545" />
                <stop offset="52%" stopColor="#c47c3a" />
                <stop offset="70%" stopColor="#e8a04a" />
                <stop offset="85%" stopColor="#d97035" />
                <stop offset="100%" stopColor="#8b3a1a" />
              </linearGradient>

              <radialGradient id="sun" cx="50%" cy="52%" r="30%">
                <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.9" />
                <stop offset="12%" stopColor="#ffe08a" stopOpacity="0.65" />
                <stop offset="35%" stopColor="#f5a830" stopOpacity="0.28" />
                <stop offset="70%" stopColor="#e07820" stopOpacity="0.08" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="goldenCoat" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e8a84a" />
                <stop offset="45%" stopColor="#c97a28" />
                <stop offset="100%" stopColor="#8b4e10" />
              </linearGradient>

              <linearGradient id="goldenHi" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5c96a" />
                <stop offset="100%" stopColor="#d4882e" />
              </linearGradient>

              <linearGradient id="brownCoat" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8b5a2b" />
                <stop offset="50%" stopColor="#6b4020" />
                <stop offset="100%" stopColor="#4a2a10" />
              </linearGradient>

              <linearGradient id="creamCoat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5f0e8" />
                <stop offset="60%" stopColor="#e8ddc8" />
                <stop offset="100%" stopColor="#c8b898" />
              </linearGradient>

              <linearGradient id="tabbyCoat" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#b8956a" />
                <stop offset="50%" stopColor="#9a7448" />
                <stop offset="100%" stopColor="#6a4e28" />
              </linearGradient>

              <linearGradient id="gsShimmer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5a9040" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>

              <filter id="b1">
                <feGaussianBlur stdDeviation="1.2" />
              </filter>
              <filter id="b2">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
              <filter id="b3">
                <feGaussianBlur stdDeviation="5" />
              </filter>
              <filter id="sh">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="6"
                  floodColor="#0a1508"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>

            <rect width="1000" height="520" fill="url(#sky)" />
            <circle cx="500" cy="265" r="42" fill="#fff9e0" opacity="0.88" />
            <circle cx="500" cy="265" r="52" fill="#ffe9a0" opacity="0.45" />
            <rect width="1000" height="520" fill="url(#sun)" opacity="0.9" />

            <rect
              x="0"
              y="248"
              width="1000"
              height="28"
              fill="#e8c070"
              opacity="0.18"
              filter="url(#b3)"
            />
            <rect
              x="0"
              y="256"
              width="1000"
              height="14"
              fill="#fff8d0"
              opacity="0.12"
              filter="url(#b3)"
            />

            <ellipse
              cx="180"
              cy="130"
              rx="110"
              ry="28"
              fill="#c8d8e8"
              opacity="0.22"
              filter="url(#b3)"
            />
            <ellipse
              cx="160"
              cy="118"
              rx="75"
              ry="20"
              fill="#dde8f0"
              opacity="0.28"
              filter="url(#b3)"
            />
            <ellipse
              cx="780"
              cy="105"
              rx="130"
              ry="32"
              fill="#c8d8e8"
              opacity="0.2"
              filter="url(#b3)"
            />
            <ellipse
              cx="820"
              cy="92"
              rx="80"
              ry="22"
              fill="#dde8f0"
              opacity="0.25"
              filter="url(#b3)"
            />

            <path
              d="M0 310 Q250 268 500 275 Q750 282 1000 268 L1000 520 L0 520Z"
              fill="#3a6830"
            />
            <path
              d="M0 360 Q200 330 500 338 Q800 346 1000 325 L1000 520 L0 520Z"
              fill="#2e5828"
            />
            <path
              d="M0 420 Q300 398 500 405 Q700 412 1000 390 L1000 520 L0 520Z"
              fill="#243f20"
            />
            <path
              d="M0 475 Q500 455 1000 460 L1000 520 L0 520Z"
              fill="#182c14"
            />

            <ellipse
              cx="500"
              cy="320"
              rx="240"
              ry="50"
              fill="#f5c060"
              opacity="0.1"
              filter="url(#b3)"
            />
            <rect
              x="0"
              y="275"
              width="1000"
              height="60"
              fill="url(#gsShimmer)"
              opacity="0.4"
            />

            <g transform="translate(110,348)" opacity="0.72" filter="url(#b1)">
              <ellipse cx="32" cy="68" rx="26" ry="8" fill="#0a1508" opacity="0.25" />
              <ellipse cx="30" cy="52" rx="26" ry="18" fill="url(#creamCoat)" />
              <ellipse cx="44" cy="38" rx="18" ry="16" fill="#f0e8d8" />
              <ellipse cx="50" cy="42" rx="10" ry="7" fill="#e8dcc8" />
              <ellipse cx="56" cy="40" rx="4" ry="3" fill="#1a0c04" />
              <circle cx="42" cy="34" r="4.5" fill="#1a0c04" />
              <circle cx="54" cy="34" r="4.5" fill="#1a0c04" />
              <path d="M34 22 Q24 12 22 30 Q21 42 32 44Z" fill="#e8dcc8" />
              <path d="M54 22 Q62 12 63 30 Q63 42 54 44Z" fill="#e8dcc8" />
              <rect x="14" y="66" width="10" height="18" rx="5" fill="#e8dcc8" />
              <rect x="30" y="67" width="10" height="17" rx="5" fill="#f0e8d8" />
              <path d="M6 48 Q-10 32 -2 18 Q4 10 10 16 Q6 30 8 42Z" fill="#e8dcc8" />
            </g>

            <g transform="translate(245,310)" filter="url(#sh)">
              <ellipse cx="60" cy="118" rx="52" ry="10" fill="#0a1508" opacity="0.35" filter="url(#b1)" />
              <ellipse cx="58" cy="88" rx="52" ry="34" fill="url(#goldenCoat)" />
              <ellipse cx="68" cy="98" rx="28" ry="18" fill="#f0b85a" opacity="0.55" />
              <ellipse cx="88" cy="66" rx="20" ry="22" fill="#d4882e" />
              <circle cx="96" cy="44" r="30" fill="url(#goldenHi)" />
              <ellipse cx="118" cy="47" rx="6" ry="5" fill="#1a1008" />
              <circle cx="86" cy="38" r="7" fill="#2a1808" />
              <circle cx="106" cy="38" r="7" fill="#2a1808" />
              <path d="M72 28 Q52 18 48 42 Q46 58 60 62 Q68 55 72 44Z" fill="#c07828" />
              <path d="M118 26 Q136 16 140 40 Q141 56 128 60 Q120 54 118 44Z" fill="#c07828" />
              <rect x="42" y="112" width="16" height="28" rx="8" fill="#c87e28" />
              <rect x="64" y="114" width="16" height="26" rx="8" fill="#d48830" />
              <rect x="12" y="108" width="15" height="24" rx="7" fill="#b87020" />
              <rect x="88" y="108" width="14" height="24" rx="7" fill="#c07828" />
              <path d="M8 76 Q-18 52 -8 30 Q2 18 14 26 Q10 44 14 56Z" fill="#d4882e" />
            </g>

            <g transform="translate(435,332)" filter="url(#sh)">
              <ellipse cx="38" cy="108" rx="32" ry="7" fill="#0a1508" opacity="0.28" filter="url(#b1)" />
              <ellipse cx="38" cy="82" rx="28" ry="32" fill="url(#tabbyCoat)" />
              <ellipse cx="38" cy="47" rx="16" ry="17" fill="#b8885a" />
              <circle cx="38" cy="28" r="22" fill="#c09260" />
              <path d="M35 31 L38 28 L41 31 Q38 34 35 31Z" fill="#c04858" />
              <path d="M20 12 L14 -6 L30 8Z" fill="#b8885a" />
              <path d="M56 12 L62 -6 L46 8Z" fill="#b8885a" />
              <circle cx="30" cy="24" r="3.8" fill="#201208" />
              <circle cx="46" cy="24" r="3.8" fill="#201208" />
              <rect x="24" y="96" width="10" height="20" rx="5" fill="#b8885a" />
              <rect x="42" y="96" width="10" height="20" rx="5" fill="#b8885a" />
              <path d="M10 108 Q-8 92 2 78 Q10 68 18 74 Q14 84 16 96 Q18 106 10 108Z" fill="#a07840" />
            </g>

            <g transform="translate(580,328)" filter="url(#sh)">
              <ellipse cx="48" cy="100" rx="40" ry="8" fill="#0a1508" opacity="0.3" filter="url(#b1)" />
              <ellipse cx="46" cy="76" rx="40" ry="26" fill="url(#brownCoat)" />
              <ellipse cx="68" cy="55" rx="16" ry="18" fill="#7a4a20" />
              <circle cx="76" cy="36" r="24" fill="#8b5828" />
              <ellipse cx="92" cy="37" rx="5" ry="4" fill="#1a0c04" />
              <circle cx="66" cy="30" r="6" fill="#1a0c04" />
              <circle cx="84" cy="30" r="6" fill="#1a0c04" />
              <path d="M56 20 Q38 8 34 32 Q32 48 46 52 Q52 44 54 32Z" fill="#6a3e18" />
              <path d="M94 20 Q112 10 114 34 Q115 50 102 54 Q96 46 96 32Z" fill="#7a4a20" />
              <rect x="28" y="96" width="13" height="22" rx="6" fill="#7a4a20" />
              <rect x="46" y="97" width="13" height="21" rx="6" fill="#8b5228" />
              <rect x="8" y="92" width="12" height="20" rx="6" fill="#6a3e18" />
              <rect x="68" y="92" width="12" height="20" rx="6" fill="#7a4a20" />
              <path d="M4 70 Q-14 48 -4 28 Q4 18 12 24 Q6 44 10 58Z" fill="#7a4820" />
            </g>

            <g transform="translate(740,340)" opacity="0.6" filter="url(#b1)">
              <ellipse cx="38" cy="78" rx="34" ry="7" fill="#0a1508" opacity="0.22" />
              <ellipse cx="36" cy="62" rx="34" ry="22" fill="#4a3020" />
              <ellipse cx="52" cy="44" rx="20" ry="18" fill="#5a3a24" />
              <ellipse cx="64" cy="45" rx="4" ry="3.5" fill="#0a0604" />
              <circle cx="48" cy="38" r="5" fill="#0a0604" />
              <circle cx="62" cy="38" r="5" fill="#0a0604" />
              <path d="M40 26 Q28 14 26 34 Q25 48 38 50Z" fill="#503820" />
              <path d="M64 26 Q74 16 76 36 Q76 50 64 50Z" fill="#503820" />
              <rect x="16" y="76" width="12" height="20" rx="6" fill="#4a3020" />
              <rect x="34" y="78" width="12" height="18" rx="6" fill="#503828" />
              <path d="M6 56 Q-12 38 -2 22 Q6 14 12 20 Q7 34 10 48Z" fill="#4a3020" />
            </g>
          </svg>
        </div>

        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            ANIMAL RESCUE DISPATCH SYSTEM
          </div>

          <h1 className="hero-title">
            ResQ<span>Track</span>
          </h1>

          <p className="hero-sub">
            Connecting people to save animal lives.
            <br />
            Real-time rescue dispatch for every creature that needs help.
          </p>

          <div className="hero-btns">
            <button className="btn-hero-primary">Report an animal</button>
            <button className="btn-hero-outline">Join as organisation</button>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="how-inner">
          <div className="how-left">
            <div className="how-eyebrow">Process</div>
            <h2 className="how-heading">How ResQTrack Works</h2>
            <p className="how-desc">
              A simple, fast, and intelligent workflow to ensure animals get
              help as quickly as possible.
            </p>
          </div>

          <div className="how-right">
            <div className="how-step">
              <div className="step-num">01</div>
              <div className="step-content">
                <div className="step-title">Report an Animal</div>
                <div className="step-body">
                  Submit details about injured or stray animals.
                </div>
              </div>
            </div>

            <div className="how-step">
              <div className="step-num">02</div>
              <div className="step-content">
                <div className="step-title">Smart Assignment</div>
                <div className="step-body">
                  AI assigns the nearest rescuer.
                </div>
              </div>
            </div>

            <div className="how-step">
              <div className="step-num">03</div>
              <div className="step-content">
                <div className="step-title">Rescue & Track</div>
                <div className="step-body">Track progress in real-time.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-inner">
          <div className="case-left">
            <div className="case-label">Live case example</div>
            <h2 className="case-heading">
              What a rescue looks like in practice.
            </h2>
            <p className="case-sub">
              Each report is a real case with a status trail.
            </p>
          </div>

          <div className="case-card">
            <div className="case-card-header">
              <div>
                <div className="case-card-id">Case #RQ-2847</div>
                <div className="case-card-title">Injured dog near bus stand</div>
              </div>
              <span className="case-severity sev-medium">Medium</span>
            </div>

            <div className="case-card-body">
              <div className="case-meta-row">
                <div className="case-meta-item">📍 Chennai</div>
                <div className="case-meta-item">⏱️ 12 mins ago</div>
              </div>

              <div className="case-status-track">
                <div className="cst-step done">
                  <div className="cst-dot done"></div>
                  <div className="cst-label">Reported</div>
                </div>

                <div className="cst-line done"></div>

                <div className="cst-step active">
                  <div className="cst-dot active"></div>
                  <div className="cst-label">Assigned</div>
                </div>

                <div className="cst-line"></div>

                <div className="cst-step">
                  <div className="cst-dot"></div>
                  <div className="cst-label">Rescue</div>
                </div>
              </div>
            </div>

            <div className="case-card-footer">
              <div className="case-org">
                <div className="case-org-avatar">🐾</div>
                <div>
                  <div className="case-org-name">Paws Rescue NGO</div>
                  <div className="case-org-type">Animal Welfare</div>
                </div>
              </div>

              <div className="case-time">ETA: 10 mins</div>
            </div>
          </div>
        </div>
      </section>

      <section className="start-section">
        <div className="start-inner">
          <div className="start-intro">
            <div className="start-eyebrow">Get Started</div>
            <h2 className="start-heading">Choose your role</h2>
            <p className="start-sub">
              Whether you're reporting or rescuing, start here.
            </p>
          </div>

          <div className="start-cards">
            <div className="start-card primary">
              <div className="sc-num">01</div>
              <div className="sc-body">
                <div className="sc-title">Report an Animal</div>
                <div className="sc-desc">Submit a rescue request</div>
              </div>
            </div>

            <div className="start-card">
              <div className="sc-num">02</div>
              <div className="sc-body">
                <div className="sc-title">Join as Rescuer</div>
                <div className="sc-desc">Help animals in need</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ngo-strip">
        <div className="ngo-strip-inner">
          <div className="ngo-strip-label">Trusted by</div>
          <div className="ngo-list">
            <span className="ngo-name">Blue Cross</span>
            <span className="ngo-name">PETA</span>
            <span className="ngo-name">Local NGOs</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App