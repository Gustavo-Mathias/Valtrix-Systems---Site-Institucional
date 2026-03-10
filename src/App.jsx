const pillars = [
  "Estrutura digital empresarial",
  "Automação de processos",
  "Desenvolvimento de sistemas",
  "Integração de ferramentas e plataformas",
  "Evolução tecnológica contínua para empresas",
];

const roadmap = [
  {
    phase: "Fase 1",
    title: "Estrutura e automação",
    text: "Projetos de estrutura digital e automação para criar base sólida de crescimento.",
  },
  {
    phase: "Fase 2",
    title: "Squads e expansão",
    text: "Criação de squads especializadas e atendimento de empresas de maior porte.",
  },
  {
    phase: "Fase 3",
    title: "Produtos SaaS",
    text: "Desenvolvimento de produtos e soluções SaaS com potencial de escala.",
  },
  {
    phase: "Fase 4",
    title: "Consolidação",
    text: "Empresa de tecnologia consolidada com contratos estratégicos de alto valor.",
  },
];

function App() {
  return (
    <>
      <div className="bg-orb orb-top" />
      <div className="bg-orb orb-bottom" />

      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">
            <img className="brand-logo" src="/logo-valtrix.jpeg" alt="Logotipo da Valtrix Systems" />
            <span>Valtrix Systems</span>
          </div>
          <a className="cta-outline" href="#contato">
            Falar com especialista
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="kicker">Tecnologia estratégica para empresas que querem escalar</p>
              <h1>Criamos experiências digitais que impulsionam empresas.</h1>
              <p className="lead">
                A Valtrix Systems estrutura o digital de negócios que buscam crescer com organização,
                previsibilidade e eficiência operacional.
              </p>
              <div className="hero-actions">
                <a className="cta-solid" href="#contato">
                  Solicitar diagnóstico estratégico
                </a>
                <a className="cta-link" href="#servicos">
                  Explorar soluções
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <h2>Valtrix Systems</h2>
              <p>Estruturando o digital de empresas que querem crescer.</p>
              <ul>
                <li>Automação e integração orientadas a resultados</li>
                <li>Sistemas personalizados para operações escaláveis</li>
                <li>Estratégia digital com visão de negócio</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <h3>Nossa proposta de valor</h3>
            <p className="section-intro">
              Não entregamos soluções isoladas. Construímos uma estrutura digital estratégica para
              transformar o digital em ativo de crescimento sustentável.
            </p>
            <div className="grid three">
              <article className="card">
                <h4>Missão</h4>
                <p>
                  Estruturar empresas através de tecnologia, automação e sistemas inteligentes que
                  transformem o digital em um ativo estratégico de crescimento.
                </p>
              </article>
              <article className="card">
                <h4>Visão</h4>
                <p>
                  Tornar-se referência em estrutura digital empresarial, com squads especializadas e
                  produtos próprios que impactem empresas em grande escala.
                </p>
              </article>
              <article className="card">
                <h4>Posicionamento</h4>
                <p>
                  Atuação corporativa e orientada a resultados para empresas que precisam crescer com
                  inteligência tecnológica e execução estruturada.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section muted">
          <div className="container">
            <h3>Pilares da Valtrix</h3>
            <div className="pillars">
              {pillars.map((pillar) => (
                <div key={pillar} className="pillar-item">
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3>Direção de longo prazo</h3>
            <div className="roadmap">
              {roadmap.map((item) => (
                <article key={item.phase} className="road-card">
                  <span>{item.phase}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section final-cta">
          <div className="container final-cta-wrap">
            <h3>Estruture hoje o digital da sua empresa</h3>
            <p>
              Da estratégia à implementação, criamos a base tecnológica para sustentar escala real.
            </p>
            <a className="cta-solid" href="mailto:valtrixsystems@gmail.com">
              valtrixsystems@gmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
