// ============================================
// ÁREA DE INFORMAÇÕES - EDITE AQUI!
// ============================================

const sobreData = {
  titulo: 'Sobre',
  informacoes: [
    'Desenvolvedor web com  em React, TypeScript e Node.js',
    'Especialista em criar interfaces modernas, performáticas e responsivas',
    'Foco em entregar soluções que conectam tecnologia e resultados de negócio',
    'Compromisso com código limpo, boas práticas e atenção aos detalhes',
    'Transforme suas ideias em produtos digitais de alto impacto',
  ],
}
// ============================================

import { motion } from 'framer-motion'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ProjectsGrid } from './components/ProjectsGrid/ProjectsGrid'
import { Barbearia } from './componentes/barbearia/Barbearia'
import { Delivery } from './componentes/delivery/Delivery'
import { Gestao } from './componentes/gestao/Gestao'
import { Oficina } from './componentes/oficina/Oficina'
import { contactInfo, projects } from './data/projects'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  const heroRef = useScrollReveal<HTMLElement>()
  const sobreRef = useScrollReveal<HTMLElement>()

  const categoryPages = {
    '/barbearia': <Barbearia />,
    '/delivery': <Delivery />,
    '/gestao': <Gestao />,
    '/oficina': <Oficina />,
  }
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const categoryPage = categoryPages[currentPath as keyof typeof categoryPages]

  if (categoryPage) {
    return (
      <div className="app-shell">
        <Header contact={contactInfo} />
        {categoryPage}
        <Footer contact={contactInfo} />
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Header contact={contactInfo} />

      <main>
        <section className="hero-section reveal" ref={heroRef}>
          <div className="hero-copy">
            <p className="eyebrow">Desenvolvimento digital</p>
            <h1>Transformo ideias em produtos digitais que geram valor real.</h1>
            <p className="subtitle">
              Crio interfaces, sistemas e experiências web com foco em performance,
              estratégia de negócio e visual premium.
            </p>

            <div className="cta-row">
              <a href="#projects" className="primaryCta">Ver projetos</a>
              <a href="https://wa.me/5511993667248" className="secondaryCta">
                Falar comigo
              </a>
            </div>

            <div className="skills-header">
              <h3 className="skills-title">Habilidades Técnicas</h3>
              <p className="skills-description">O ecossistema de desenvolvimento que utilizo para construir experiências web completas.</p>
            </div>

            <ul className="stats">
              <li className="tech-badge" data-tooltip="React">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                </span>
              </li>
              <li className="tech-badge" data-tooltip="TypeScript">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
                </span>
              </li>
              <li className="tech-badge" data-tooltip="Node.js">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                </span>
              </li>
              <li className="tech-badge" data-tooltip="JavaScript">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                </span>
              </li>
              <li className="tech-badge" data-tooltip="Tailwind CSS">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                </span>
              </li>
              <li className="tech-badge" data-tooltip="HTML5">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                </span>
              </li>
              <li className="tech-badge" data-tooltip="CSS3">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                </span>
              </li>
              <li className="tech-badge" data-tooltip="Vite">
                <span className="badgeIcon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" />
                </span>
              </li>
            </ul>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="scanlines" />
            <div className="terminal-panel">
              <div className="terminal-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-body">
                <p>&lt;code /&gt;</p>
                <p>const experience = 'UI + Performance'</p>
                <p>const delivery = 'Escalável e moderno'</p>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Seção Sobre - Compacta */}
        <section className="about-compact reveal" id="sobre" ref={sobreRef}>
          <div className="about-layout">
            <div className="about-content">
              <p className="eyebrow">{sobreData.titulo}</p>
              <ul className="about-list">
                {sobreData.informacoes.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>

            <div className="about-visual" aria-label="Tela de computador com código sendo digitado">
              <div className="computer-scene">
                <div className="screen">
                  <div className="screen-header">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>

                  <div className="screen-body">
                    <div className="code-window">
                      <span className="line line-1 code-comment">// build product</span>
                      <span className="line line-2">const stack = ['React', 'TS', 'Node']</span>
                      <span className="line line-3">const result = 'Impacto real'</span>
                      <span className="line line-4">return &lt;Experience /&gt;</span>
                      <span className="cursor" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div className="keyboard-base">
                  <div className="keyboard-row" />
                </div>

                <div className="floating-badge badge-react">React</div>
                <div className="floating-badge badge-node">Node</div>
                <div className="floating-badge badge-ts">TS</div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsGrid projects={projects} />
      </main>

      <Footer contact={contactInfo} />
    </div>
  )
}

export default App
