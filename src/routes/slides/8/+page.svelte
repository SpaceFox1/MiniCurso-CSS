<script lang="ts">
  import { setAmountOfSteps } from "$lib/slideManager.svelte";
  setAmountOfSteps(0);

  const bars = [28, 52, 38, 67, 44, 88, 62, 79, 47, 73, 58, 95];
</script>

<div class="vertical">
  <h1 class="title">Exemplos</h1>

  <div class="horizontal containers">

    <!-- ── DEV DASHBOARD ── -->
    <div class="container">
      <div class="dash">

        <header class="dash-header">
          <div class="dash-logo">⬡ Pulse</div>
          <nav class="dash-nav">
            <span class="nav-item active">Overview</span>
            <span class="nav-item">Deploy</span>
            <span class="nav-item">Logs</span>
          </nav>
          <div class="dash-avatar">MK</div>
        </header>

        <div class="dash-body">
          <aside class="dash-aside">
            <p class="aside-label">PROJETOS</p>
            <div class="proj proj-active"><span class="dot green"></span>api-gateway</div>
            <div class="proj"><span class="dot yellow"></span>frontend-v2</div>
            <div class="proj"><span class="dot green"></span>auth-service</div>
            <div class="proj"><span class="dot red"></span>worker-jobs</div>
            <p class="aside-label mt">EQUIPE</p>
            <div class="avatars">
              <div class="av-sm" style="background:linear-gradient(135deg,#7cfaaf,#38bdf8)">AL</div>
              <div class="av-sm" style="background:linear-gradient(135deg,#f472b6,#a78bfa)">RB</div>
              <div class="av-sm" style="background:linear-gradient(135deg,#fb923c,#fbbf24)">CF</div>
            </div>
          </aside>

          <main class="dash-main">
            <div class="metrics">
              <div class="metric">
                <span class="m-val">99.98%</span>
                <span class="m-label">Uptime</span>
              </div>
              <div class="metric">
                <span class="m-val">42ms</span>
                <span class="m-label">Latência P95</span>
              </div>
              <div class="metric metric-accent">
                <span class="m-val">2.4k</span>
                <span class="m-label">Req / min</span>
              </div>
            </div>

            <div class="chart-box">
              <p class="chart-label">Tráfego — últimas 24h</p>
              <div class="bars">
                {#each bars as h, i (i)}
                  <div class="bar" class:bar-last={i === bars.length - 1} style="height:{h}%"></div>
                {/each}
              </div>
            </div>

            <div class="logs">
              <div class="log log-ok">
                <span class="status-code ok">200</span>
                <span class="log-path">GET /api/users</span>
                <span class="log-ms">12ms</span>
              </div>
              <div class="log log-err">
                <span class="status-code err">404</span>
                <span class="log-path">GET /api/posts/99</span>
                <span class="log-ms">3ms</span>
              </div>
            </div>
          </main>
        </div>

      </div>
    </div>

    <!-- ── EDITORIAL MAGAZINE ── -->
    <div class="container">
      <div class="mag">

        <div class="mag-left">
          <span class="mag-section">GASTRONOMIA</span>
          <h2 class="mag-title">Risoto<br/>de Funghi<br/><em>Selvático</em></h2>
          <div class="mag-meta">
            <span>Por Ana Souza</span>
            <span class="sep">·</span>
            <span>40 min</span>
            <span class="sep">·</span>
            <span>4 porções</span>
          </div>
          <div class="mag-tags">
            <span>Italiano</span>
            <span>Comfort</span>
            <span>Outono</span>
          </div>
          <div class="mag-rating">★★★★★ <em>4.9 (312 avaliações)</em></div>
          <div class="mag-divider"></div>
          <ul class="mag-ing">
            <li>300g arroz arbóreo</li>
            <li>50g funghi secchi reidratado</li>
            <li>200ml vinho branco seco</li>
            <li>Cebola roxa · alho · tomilho</li>
            <li>Parmesão recém-ralado</li>
          </ul>
        </div>

        <div class="mag-right">
          <div class="mag-photo-main">
            <div class="photo-overlay">
              <span class="photo-pill">🍄 Receita da Semana</span>
            </div>
          </div>
          <div class="mag-photo-strip">
            <div class="mag-strip-item strip-a"></div>
            <div class="mag-strip-item strip-b">
              <p class="strip-quote">"O segredo está no caldo quente."</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');

  /* ── LAYOUT ── */
  .containers {
    width: 100%;
    height: 420px;
    gap: 18px;
  }

  .container {
    flex: 1;
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  }

  /* ════════════════════════════════
     DEV DASHBOARD
  ════════════════════════════════ */
  .dash {
    position: absolute;
    inset: 0;
    background: #08090d;
    color: #c9d4e8;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    display: flex;
    flex-direction: column;
  }

  /* header */
  .dash-header {
    display: flex;
    align-items: center;
    padding: 9px 16px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.025);
    gap: 0;
  }

  .dash-logo {
    font-size: 13px;
    font-weight: 700;
    color: #6efab8;
    letter-spacing: 0.04em;
    flex: 1;
  }

  .dash-nav {
    display: flex;
    gap: 16px;
  }

  .nav-item {
    opacity: 0.4;
    cursor: pointer;
    font-size: 10.5px;
    padding-bottom: 2px;
  }

  .nav-item.active {
    opacity: 1;
    color: #6efab8;
    border-bottom: 1px solid #6efab8;
  }

  .dash-avatar {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .dash-avatar::before {
    content: 'MK';
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6efab8, #38bdf8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: #08090d;
  }

  /* body */
  .dash-body {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .dash-aside {
    width: 120px;
    padding: 14px 10px;
    border-right: 1px solid rgba(255,255,255,0.05);
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex-shrink: 0;
  }

  .aside-label {
    font-size: 8.5px;
    letter-spacing: 0.12em;
    color: rgba(255,255,255,0.25);
    margin-bottom: 5px;
  }

  .aside-label.mt { margin-top: 12px; }

  .proj {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 4px 7px;
    border-radius: 5px;
    opacity: 0.45;
    font-size: 10.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .proj-active {
    opacity: 1;
    background: rgba(110,250,184,0.08);
    color: #6efab8;
    border: 1px solid rgba(110,250,184,0.15);
  }

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dot.green  { background: #4ade80; box-shadow: 0 0 5px #4ade80aa; }
  .dot.yellow { background: #fbbf24; box-shadow: 0 0 5px #fbbf24aa; }
  .dot.red    { background: #f87171; box-shadow: 0 0 5px #f87171aa; }

  .avatars {
    display: flex;
    gap: 5px;
    margin-top: 2px;
  }

  .av-sm {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    font-size: 8px;
    font-weight: 700;
    color: #08090d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* main area */
  .dash-main {
    flex: 1;
    padding: 13px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
  }

  .metrics {
    display: flex;
    gap: 8px;
  }

  .metric {
    flex: 1;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    padding: 9px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .metric-accent {
    border-color: rgba(110,250,184,0.25);
    background: rgba(110,250,184,0.04);
  }

  .m-val {
    font-size: 17px;
    font-weight: 700;
    color: #e2eaf8;
    line-height: 1;
  }

  .metric-accent .m-val {
    color: #6efab8;
    text-shadow: 0 0 12px rgba(110,250,184,0.4);
  }

  .m-label {
    font-size: 8.5px;
    color: rgba(255,255,255,0.28);
    letter-spacing: 0.06em;
  }

  /* chart */
  .chart-box {
    flex: 1;
    min-height: 0;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 8px;
    padding: 9px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .chart-label {
    font-size: 8.5px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.08em;
  }

  .bars {
    flex: 1;
    display: flex;
    align-items: flex-end;
    gap: 4px;
  }

  .bar {
    flex: 1;
    background: rgba(110,250,184,0.18);
    border-radius: 3px 3px 0 0;
  }

  .bar.bar-last {
    background: #6efab8;
    box-shadow: 0 -4px 10px rgba(110,250,184,0.5);
  }

  /* logs */
  .logs {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .log {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 5px 8px;
    border-radius: 5px;
    background: rgba(255,255,255,0.025);
    border-left: 2px solid transparent;
  }

  .log-ok  { border-left-color: #4ade80; }
  .log-err { border-left-color: #f87171; }

  .status-code {
    font-size: 9px;
    font-weight: 700;
    padding: 1px 6px;
    border-radius: 4px;
    min-width: 30px;
    text-align: center;
  }

  .ok  { background: rgba(74,222,128,0.12);  color: #4ade80; }
  .err { background: rgba(248,113,113,0.12); color: #f87171; }

  .log-path {
    flex: 1;
    opacity: 0.55;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .log-ms {
    font-size: 9px;
    color: rgba(255,255,255,0.2);
  }


  /* ════════════════════════════════
     EDITORIAL MAGAZINE
  ════════════════════════════════ */
  .mag {
    position: absolute;
    inset: 0;
    display: flex;
    font-family: 'Cormorant Garamond', serif;
    background: #f8f0e3;
  }

  .mag-left {
    width: 50%;
    background: #18100a;
    color: #f5ece0;
    padding: 22px 20px 18px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
    padding-right: 28px;
  }

  .mag-section {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5px;
    letter-spacing: 0.22em;
    color: #c9853a;
    margin-bottom: 10px;
    display: block;
  }

  .mag-title {
    font-size: 36px;
    font-weight: 300;
    line-height: 1.02;
    color: #fdf4e8;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  .mag-title em {
    font-style: italic;
    color: #c9853a;
  }

  .mag-meta {
    display: flex;
    gap: 5px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    color: rgba(245,236,224,0.35);
    margin-bottom: 10px;
    letter-spacing: 0.04em;
  }

  .sep { color: #c9853a; opacity: 0.5; }

  .mag-tags {
    display: flex;
    gap: 6px;
    margin-bottom: 10px;
  }

  .mag-tags span {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    padding: 2px 8px;
    border: 1px solid rgba(201,133,58,0.35);
    border-radius: 20px;
    color: #c9853a;
    letter-spacing: 0.06em;
  }

  .mag-rating {
    font-size: 11px;
    color: #c9853a;
    margin-bottom: 14px;
    letter-spacing: 0.04em;
  }

  .mag-rating em {
    font-style: normal;
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    color: rgba(245,236,224,0.3);
  }

  .mag-divider {
    width: 40px;
    height: 1px;
    background: rgba(201,133,58,0.4);
    margin-bottom: 14px;
  }

  .mag-ing {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: auto;
  }

  .mag-ing li {
    font-size: 11.5px;
    font-style: italic;
    color: rgba(245,236,224,0.55);
    padding-left: 14px;
    position: relative;
    line-height: 1.3;
  }

  .mag-ing li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #c9853a;
    font-style: normal;
  }

  /* right side */
  .mag-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: -1px;
  }

  .mag-photo-main {
    flex: 3;
    background:
      radial-gradient(ellipse at 60% 40%, #c4883a44 0%, transparent 60%),
      radial-gradient(ellipse at 80% 80%, #6b3a1a55 0%, transparent 50%),
      linear-gradient(160deg, #2a1a0e 0%, #5c3218 40%, #8b5e3c 70%, #c89060 100%);
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 12px 10px;
  }

  /* subtle mushroom texture illusion */
  .mag-photo-main::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 55% 55%, rgba(180,110,40,0.25) 0%, transparent 45%),
      radial-gradient(circle at 75% 35%, rgba(100,60,20,0.3) 0%, transparent 35%),
      radial-gradient(circle at 40% 70%, rgba(200,140,60,0.15) 0%, transparent 40%);
    mix-blend-mode: overlay;
  }

  .mag-photo-main::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(24,16,10,0.1) 0%, rgba(24,16,10,0.5) 100%);
  }

  .photo-overlay {
    position: relative;
    z-index: 1;
  }

  .photo-pill {
    background: rgba(24,16,10,0.65);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(201,133,58,0.3);
    color: #c9853a;
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    letter-spacing: 0.08em;
    padding: 3px 10px;
    border-radius: 20px;
  }

  .mag-photo-strip {
    flex: 1;
    display: flex;
    gap: 2px;
  }

  .mag-strip-item {
    flex: 1;
  }

  .strip-a {
    background:
      radial-gradient(circle at 50% 40%, rgba(255,200,100,0.12) 0%, transparent 60%),
      linear-gradient(135deg, #3d2010 0%, #7a4828 50%, #b07040 100%);
  }

  .strip-b {
    background:
      linear-gradient(135deg, #f0e6d0 0%, #e8d4b0 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  .strip-quote {
    font-size: 9.5px;
    font-style: italic;
    color: #5c3a1a;
    text-align: center;
    line-height: 1.4;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
  }
</style>