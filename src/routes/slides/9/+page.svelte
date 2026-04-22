<script lang="ts">
  import * as THREE from "three";
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    const torusGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 180, 24, 2, 3);

    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      metalness: 0.9,
      roughness: 0.15,
    });

    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(1.8, 0, 0);
    scene.add(torus);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x2a1535,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const wireKnot = new THREE.Mesh(torusGeo, wireMat);
    wireKnot.position.copy(torus.position);
    scene.add(wireKnot);

    const pink = new THREE.PointLight(0xff3090, 4, 12);
    pink.position.set(-2, 2, 3);
    scene.add(pink);

    const blue = new THREE.PointLight(0x3030ff, 3, 12);
    blue.position.set(3, -2, 2);
    scene.add(blue);

    scene.add(new THREE.AmbientLight(0xffffff, 0.05));

    // resize handling
    function resize() {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;

      renderer.setSize(W, H, false);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    }

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let frame: number;

    function animate() {
      frame = requestAnimationFrame(animate);

      t += 0.008;

      torus.rotation.x = t * 0.4;
      torus.rotation.y = t * 0.6;
      wireKnot.rotation.copy(torus.rotation);

      pink.position.x = Math.sin(t * 0.7) * 3 - 1;
      pink.position.y = Math.cos(t * 0.5) * 2;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  });
</script>

<div class="vertical">
  <h1 class="title">Hierarquia</h1>

  <div class="horizontal">
    <!-- ====== RETRO MOCKUP ====== -->
    <div class="mockup-wrap">
      <div class="browser-chrome retro-chrome">
        <div class="chrome-bar">
          <div class="menu-bar">
            <span>Arquivo</span>
            <span>Editar</span>
            <span>Exibir</span>
            <span>Favoritos</span>
            <span>Ferramentas</span>
            <span>Ajuda</span>
          </div>
          <div class="toolbar">
            <div class="btn-group">
              <button class="tb-btn">◄ Voltar</button>
              <button class="tb-btn">► Avançar</button>
              <button class="tb-btn">✕ Parar</button>
              <button class="tb-btn">⟳ Atualizar</button>
              <button class="tb-btn">🏠 Início</button>
            </div>
            <div class="address-bar">
              <span class="address-label">Endereço:</span>
              <div class="address-input">
                http://www.forumxp.com.br/forum/index.php
              </div>
              <button class="go-btn">Ir</button>
            </div>
          </div>
        </div>

        <div class="retro-site">
          <div class="retro-title-bar">
            <span class="icon">F</span>
            ForumXP Brasil — O maior fórum de tecnologia do Brasil!
          </div>

          <div class="retro-body">
            <div class="retro-sidebar">
              <div class="sidebar-section">
                <div class="sidebar-header">▼ NAVEGAR</div>
                <div class="sidebar-item">Início</div>
                <div class="sidebar-item">Fóruns</div>
                <div class="sidebar-item">Membros</div>
                <div class="sidebar-item">Calendário</div>
                <div class="sidebar-item">FAQ</div>
              </div>
              <div class="sidebar-section">
                <div class="sidebar-header">▼ MINHA CONTA</div>
                <div class="sidebar-item">Login</div>
                <div class="sidebar-item">Registrar</div>
                <div class="sidebar-item">Perfil</div>
                <div class="sidebar-item">Mensagens</div>
              </div>
              <div class="sidebar-ad">
                ★ GRÁTIS ★<br />RINGTONES<br />Clique Aqui!
              </div>
              <div class="sidebar-section">
                <div class="sidebar-header">▼ TOP TÓPICOS</div>
                <div class="sidebar-item" style="font-size:10px">
                  XP SP2 lançado!
                </div>
                <div class="sidebar-item" style="font-size:10px">
                  Orkut convites
                </div>
                <div class="sidebar-item" style="font-size:10px">
                  MSN Plus grátis
                </div>
              </div>
            </div>

            <div class="retro-main">
              <div class="retro-banner">
                ★ BEM-VINDO AO FORUMXP — CADASTRE-SE GRÁTIS! ★
              </div>

              <div class="online-users">
                <div class="online-dot"></div>
                <strong>Usuários online agora:</strong>&nbsp;admin, PowerUser99,
                hacker_br, Xuxa_Fans, +12 visitantes
              </div>

              <div class="forum-box">
                <div class="forum-box-header">
                  <span>📁 HARDWARE &amp; TECNOLOGIA</span>
                  <span style="font-weight:normal;font-size:10px"
                    >47 tópicos | 1.203 posts</span
                  >
                </div>
                <table class="forum-table">
                  <thead>
                    <tr>
                      <th style="width:16px"></th>
                      <th>Tópico</th>
                      <th>Autor</th>
                      <th>Resp.</th>
                      <th>Último Post</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="text-align:center">🔥</td>
                      <td
                        ><span class="topic-link hot-topic"
                          >Windows XP SP2 — Vale atualizar?</span
                        ></td
                      >
                      <td>admin</td>
                      <td style="text-align:center"><strong>247</strong></td>
                      <td style="font-size:10px">hoje 14:32</td>
                    </tr>
                    <tr>
                      <td style="text-align:center">📄</td>
                      <td
                        ><span class="topic-link"
                          >Pentium 4 vs Athlon 64 — COMPARATIVO</span
                        ></td
                      >
                      <td>PowerUser99</td>
                      <td style="text-align:center">83</td>
                      <td style="font-size:10px">ontem 22:10</td>
                    </tr>
                    <tr>
                      <td style="text-align:center">📢</td>
                      <td
                        ><span class="topic-link new-topic"
                          >[NOVO] Testei o Firefox 1.0 — Opinião</span
                        ></td
                      >
                      <td>geekzinho</td>
                      <td style="text-align:center">31</td>
                      <td style="font-size:10px">hoje 09:45</td>
                    </tr>
                    <tr>
                      <td style="text-align:center">📄</td>
                      <td
                        ><span class="topic-link"
                          >Melhor antivírus gratuito 2005?</span
                        ></td
                      >
                      <td>noob_master</td>
                      <td style="text-align:center">89</td>
                      <td style="font-size:10px">22/08 18:00</td>
                    </tr>
                  </tbody>
                </table>
                <div class="forum-stats">
                  <span>📊 Total: 1.203 posts em 47 tópicos</span>
                  <span>Moderador: <u>admin</u> | <u>SuperMod2005</u></span>
                </div>
              </div>

              <div class="forum-box">
                <div class="forum-box-header">
                  <span>📁 PROGRAMAÇÃO &amp; WEB</span>
                  <span style="font-weight:normal;font-size:10px"
                    >28 tópicos | 674 posts</span
                  >
                </div>
                <table class="forum-table">
                  <thead>
                    <tr>
                      <th style="width:16px"></th>
                      <th>Tópico</th>
                      <th>Autor</th>
                      <th>Resp.</th>
                      <th>Último Post</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="text-align:center">📄</td>
                      <td
                        ><span class="topic-link"
                          >Ajuda com HTML — como centralizar tabela?</span
                        ></td
                      >
                      <td>user123</td>
                      <td style="text-align:center">15</td>
                      <td style="font-size:10px">hoje 11:20</td>
                    </tr>
                    <tr>
                      <td style="text-align:center">🔥</td>
                      <td
                        ><span class="topic-link hot-topic"
                          >PHP ou ASP — Qual aprender em 2005?</span
                        ></td
                      >
                      <td>dev_br</td>
                      <td style="text-align:center">112</td>
                      <td style="font-size:10px">hoje 08:33</td>
                    </tr>
                  </tbody>
                </table>
                <div class="forum-stats">
                  <span>📊 Total: 674 posts em 28 tópicos</span>
                  <span>Moderador: <u>hacker_br</u></span>
                </div>
              </div>
            </div>
          </div>

          <div class="retro-statusbar">
            <span>✓ Concluído</span>
            <span>🔒 Zona: Internet</span>
            <span>© 2005 ForumXP Brasil — Todos os direitos reservados</span>
          </div>
        </div>
      </div>
      <div class="mockup-label">retro 2005 — forum</div>
    </div>

    <!-- ====== CONCEPTUAL MOCKUP ====== -->
    <div class="mockup-wrap">
      <div class="browser-chrome concept-chrome">
        <div class="chrome-bar">
          <div class="dots">
            <div class="dot dot-r"></div>
            <div class="dot dot-y"></div>
            <div class="dot dot-g"></div>
          </div>
          <div class="tabs">
            <div class="tab">Nova Aba</div>
            <div class="tab active">void.interface — entrada</div>
            <div class="tab">about:blank</div>
          </div>
          <div class="url-bar">
            <span class="lock-icon">🔒</span>
            void.interface/entrada
          </div>
        </div>

        <div class="concept-site">
          <canvas
            bind:this={canvas}
            style="position:absolute; inset:0;width: 100%;height: 100%;object-fit: cover;"
          ></canvas>

          <nav class="concept-nav">
            <div class="concept-logo">VOID.INTERFACE</div>
            <div class="concept-nav-links">
              <span>manifesto</span>
              <span>objetos</span>
              <span>sobre</span>
            </div>
          </nav>

          <div class="concept-hero">
            <div class="concept-tag">experiência digital — 2024</div>
            <h1 class="concept-h1">
              onde a forma<br />precede a <em>função</em>
            </h1>
            <p class="concept-desc">
              interação não-linear<br />
              fluxo fragmentado<br />
              percepção acima de propósito
            </p>
            <div class="concept-cta">
              <button class="concept-btn">entrar</button>
              <button class="concept-btn-ghost">↓ explorar</button>
            </div>
          </div>

          <div class="concept-bottom">
            <div class="concept-stats">
              <div class="concept-stat">
                <strong>∅3</strong>
                objetos ativos
              </div>
              <div class="concept-stat">
                <strong>∞</strong>
                estados possíveis
              </div>
              <div class="concept-stat">
                <strong>0.1s</strong>
                latência
              </div>
            </div>
            <div class="concept-scroll-hint">▼ SCROLL</div>
          </div>
        </div>
      </div>
      <div class="mockup-label">conceitual — void.interface</div>
    </div>
  </div>
</div>

<style>
  /* ===================== SHARED MOCKUP WRAPPER ===================== */
  .mockup-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    max-width: 560px;
  }

  .mockup-label {
    color: #555;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    font-family: monospace;
  }

  .browser-chrome {
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.7),
      0 0 0 1px rgba(255, 255, 255, 0.05);
  }

  /* ===================== RETRO BROWSER CHROME ===================== */
  .retro-chrome .chrome-bar {
    background: linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 100%);
    padding: 6px 8px 0;
    border-bottom: 2px solid #999;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .retro-chrome .menu-bar {
    font-family: "Tahoma", sans-serif;
    font-size: 11px;
    color: #000;
    display: flex;
    gap: 12px;
    padding: 1px 0 3px;
  }
  .retro-chrome .menu-bar span {
    cursor: pointer;
  }
  .retro-chrome .menu-bar span:first-child {
    text-decoration: underline;
  }

  .retro-chrome .toolbar {
    display: flex;
    gap: 4px;
    align-items: center;
    padding-bottom: 5px;
  }

  .retro-chrome .btn-group {
    display: flex;
    gap: 2px;
  }

  .retro-chrome .tb-btn {
    background: linear-gradient(180deg, #f5f5f5, #d8d8d8);
    border: 1px solid #888;
    border-radius: 2px;
    font-size: 10px;
    font-family: "Tahoma", sans-serif;
    padding: 2px 8px;
    cursor: pointer;
    color: #000;
    white-space: nowrap;
  }
  .retro-chrome .tb-btn:active {
    background: linear-gradient(180deg, #d0d0d0, #bbb);
  }

  .retro-chrome .address-bar {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-family: "Tahoma", sans-serif;
  }
  .retro-chrome .address-label {
    color: #333;
    white-space: nowrap;
  }
  .retro-chrome .address-input {
    flex: 1;
    border: 2px inset #aaa;
    background: white;
    padding: 1px 4px;
    font-size: 11px;
    font-family: "Tahoma", sans-serif;
    color: #000080;
  }

  .retro-chrome .go-btn {
    background: linear-gradient(180deg, #f5f5f5, #d8d8d8);
    border: 1px solid #888;
    border-radius: 2px;
    font-size: 11px;
    font-family: "Tahoma", sans-serif;
    padding: 1px 8px;
    color: #000;
    cursor: pointer;
  }

  /* ===================== RETRO SITE CONTENT ===================== */
  .retro-site {
    background: #c0c0c0;
    font-family: "Tahoma", Arial, sans-serif;
    font-size: 12px;
    min-height: 480px;
    display: flex;
    flex-direction: column;
  }

  .retro-title-bar {
    background: linear-gradient(90deg, #000080, #1084d0);
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .retro-title-bar .icon {
    width: 16px;
    height: 16px;
    background: #ffcc00;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: #000080;
    font-weight: 900;
  }

  .retro-body {
    display: flex;
    flex: 1;
  }

  .retro-sidebar {
    width: 130px;
    background: #d4d0c8;
    border-right: 2px solid #888;
    padding: 6px 0;
    flex-shrink: 0;
  }

  .sidebar-section {
    margin-bottom: 4px;
  }

  .sidebar-header {
    background: linear-gradient(90deg, #000080, #0050a0);
    color: white;
    font-weight: bold;
    font-size: 11px;
    padding: 3px 6px;
    margin-bottom: 2px;
  }

  .sidebar-item {
    padding: 2px 8px;
    font-size: 11px;
    color: #000080;
    text-decoration: underline;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .sidebar-item:hover {
    background: #b0c4de;
  }
  .sidebar-item::before {
    content: "►";
    font-size: 7px;
    color: #000080;
  }

  .sidebar-ad {
    margin: 8px 4px;
    border: 2px inset #888;
    background: #ffffcc;
    padding: 4px;
    font-size: 10px;
    text-align: center;
    color: #cc0000;
    font-weight: bold;
    animation: blink 1s step-start infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .retro-main {
    flex: 1;
    padding: 8px;
    background: #e8e8e8;
    overflow: hidden;
  }

  .retro-banner {
    background: linear-gradient(90deg, #000080, #cc0000);
    color: #ffff00;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    margin-bottom: 8px;
    font-family: "Impact", sans-serif;
    letter-spacing: 1px;
    text-shadow: 1px 1px 0 #000;
  }

  .forum-box {
    border: 2px solid #000;
    background: white;
    margin-bottom: 8px;
  }

  .forum-box-header {
    background: linear-gradient(90deg, #000080, #0055bb);
    color: white;
    font-weight: bold;
    font-size: 11px;
    padding: 3px 6px;
    display: flex;
    justify-content: space-between;
  }

  .forum-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
  }

  .forum-table th {
    background: #000080;
    color: white;
    padding: 3px 5px;
    text-align: left;
    font-weight: bold;
    font-size: 11px;
  }

  .forum-table td {
    padding: 3px 5px;
    border-bottom: 1px solid #ccc;
    vertical-align: top;
  }

  .forum-table tr:nth-child(odd) td {
    background: #f0f0f0;
  }
  .forum-table tr:nth-child(even) td {
    background: #e0e0e0;
  }
  .forum-table tr:hover td {
    background: #d0d8f0;
  }

  .topic-link {
    color: #000080;
    text-decoration: underline;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .topic-link::before {
    content: "📄";
    font-size: 10px;
  }
  .hot-topic::before {
    content: "🔥";
  }
  .new-topic::before {
    content: "📢";
  }

  .forum-stats {
    background: #d4d0c8;
    border-top: 1px solid #888;
    padding: 4px 6px;
    font-size: 10px;
    color: #444;
    display: flex;
    justify-content: space-between;
  }

  .online-users {
    background: #ffffcc;
    border: 1px solid #cc9900;
    padding: 4px 6px;
    font-size: 10px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .online-dot {
    width: 8px;
    height: 8px;
    background: #00cc00;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .retro-statusbar {
    background: linear-gradient(180deg, #d4d0c8, #c0bdb4);
    border-top: 2px solid #888;
    padding: 2px 6px;
    font-size: 10px;
    color: #444;
    display: flex;
    gap: 16px;
  }

  /* ===================== CONCEPT BROWSER CHROME ===================== */
  .concept-chrome .chrome-bar {
    background: #1c1c1e;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #2c2c2e;
  }

  .concept-chrome .dots {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  }

  .concept-chrome .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .dot-r {
    background: #ff5f57;
  }
  .dot-y {
    background: #febc2e;
  }
  .dot-g {
    background: #28c840;
  }

  .concept-chrome .tabs {
    display: flex;
    gap: 2px;
    flex: 1;
    overflow: hidden;
  }

  .concept-chrome .tab {
    background: #2c2c2e;
    border-radius: 6px 6px 0 0;
    padding: 4px 14px;
    font-size: 11px;
    font-family: -apple-system, sans-serif;
    color: #8a8a8e;
    white-space: nowrap;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .concept-chrome .tab.active {
    background: #3a3a3c;
    color: #e5e5ea;
  }

  .concept-chrome .url-bar {
    background: #2c2c2e;
    border-radius: 6px;
    padding: 4px 12px;
    font-size: 11px;
    font-family: -apple-system, monospace;
    color: #8a8a8e;
    min-width: 200px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .concept-chrome .lock-icon {
    color: #30d158;
    font-size: 10px;
  }

  /* ===================== CONCEPT SITE ===================== */
  .concept-site {
    background: #050505;
    min-height: 480px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  #three-canvas {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .concept-nav {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    background: rgba(5, 5, 5, 0.3);
  }

  .concept-logo {
    font-family: "Courier New", monospace;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .concept-nav-links {
    display: flex;
    gap: 24px;
    font-family: -apple-system, sans-serif;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 1px;
  }

  .concept-nav-links span {
    cursor: pointer;
    transition: color 0.3s;
  }

  .concept-hero {
    position: relative;
    z-index: 10;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 40px 20px;
  }

  .concept-tag {
    font-family: "Courier New", monospace;
    font-size: 9px;
    color: rgba(255, 255, 255, 0.25);
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .concept-tag::before {
    content: "";
    display: block;
    width: 20px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }

  .concept-h1 {
    font-family: "Georgia", serif;
    font-size: 42px;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -1px;
    margin-bottom: 20px;
    max-width: 340px;
  }

  .concept-h1 em {
    font-style: italic;
    color: rgba(255, 120, 180, 0.9);
  }

  .concept-desc {
    font-family: -apple-system, sans-serif;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.3);
    line-height: 1.8;
    letter-spacing: 0.5px;
    margin-bottom: 28px;
    max-width: 240px;
  }

  .concept-cta {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .concept-btn {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.8);
    padding: 8px 20px;
    font-size: 11px;
    font-family: -apple-system, sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s;
  }

  .concept-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .concept-btn-ghost {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.3);
    font-size: 11px;
    font-family: -apple-system, sans-serif;
    letter-spacing: 1px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .concept-bottom {
    position: relative;
    z-index: 10;
    padding: 16px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .concept-stats {
    display: flex;
    gap: 24px;
  }

  .concept-stat {
    font-family: "Courier New", monospace;
    font-size: 9px;
    color: rgba(255, 255, 255, 0.2);
    letter-spacing: 1px;
  }

  .concept-stat strong {
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
  }

  .concept-scroll-hint {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.15);
    letter-spacing: 2px;
    font-family: monospace;
    animation: fadeUpDown 2s ease-in-out infinite;
  }

  @keyframes fadeUpDown {
    0%,
    100% {
      opacity: 0.15;
      transform: translateY(0);
    }
    50% {
      opacity: 0.4;
      transform: translateY(-3px);
    }
  }

  /* ===================== RESPONSIVE ===================== */
  @media (max-width: 900px) {
    body {
      flex-direction: column;
      align-items: center;
    }
    .mockup-wrap {
      max-width: 100%;
      width: 100%;
    }
  }
</style>
