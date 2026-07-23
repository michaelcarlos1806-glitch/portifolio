import React, { useState, useEffect } from 'react';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Garante a rolagem suave globalmente ao carregar a página
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const projects = [
    {
      title: "Landing Page Ateliê Acetinados",
      description: "Página moderna desenvolvida para o Ateliê Acetinados, focada em design elegante, apresentação de produtos e conversão de clientes.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://michaelcarlos1806-glitch.github.io/siteatelier/",
      image: "/AtelierAcetinados.png"
    },
    {
      title: "Landing Page PhoneShop",
      description: "Página moderna focada em performance, design limpo e adaptabilidade total para dispositivos móveis, desenvolvida para o nicho de tecnologia e celulares.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://michaelcarlos1806-glitch.github.io/landig-page-basic/",
      image: "/phoneshop.png"
    },
    {
      title: "Gerenciador Financeiro",
      description: "Aplicação web completa para controle de receitas, despesas e relatórios consolidados por pessoa, focada em robustez e tratamentos de dados.",
      tags: ["React", "TypeScript", "API REST"],
      link: "https://michaelcarlos1806-glitch.github.io/gerenciador-financeiro/",
      image: "/gerenciadorfinanceiro.png"
    }
  ];

  const experiences = [
    {
      period: "2024 - ATUAL",
      role: "Estudante de Desenvolvimento de Software & Projetos",
      company: "Projetos Acadêmicos & Independentes",
      description: "Desenvolvendo aplicações com C#, .NET, React e TypeScript, aplicando conceitos modernos de programação e buscando uma oportunidade de estágio.",
      tags: ["C#", ".NET", "React", "TypeScript", "SQLite"]
    }
  ];

  const education = [
    {
      institution: "Unyleya / Ensino Superior",
      course: "Análise e Desenvolvimento de Sistemas",
      period: "Em Andamento",
      description: "Aprendendo fundamentos de engenharia de software, estruturas de dados, algoritmos e boas práticas de desenvolvimento."
    }
  ];

  const certifications = [
    {
      title: "Scrum Foundation Professional Certificate (SFPCM)",
      issuer: "CertiProf",
      description: "Concluído • Fundamentos de metodologias ágeis, papéis, artefatos e cerimônias do Scrum."
    },
    {
      title: "Formação .NET Developer / C#",
      issuer: "DIO (Digital Innovation One)",
      description: "Em andamento • Estudos práticos em C#, orientação a objetos, manipulação de dados e construção de APIs."
    },
    {
      title: "Formações DIO (Lógica, GitHub, HTML, CSS, JavaScript, SQL e QA)",
      issuer: "DIO (Digital Innovation One)",
      description: "Concluído / Em andamento • Capacitações abrangentes cobrindo desenvolvimento web front-end, versionamento, banco de dados e garantia de qualidade."
    }
  ];

  const techSkills = [
    { name: "C#", level: 45, category: "Back-End" },
    { name: ".NET", level: 40, category: "Back-End" },
    { name: "React", level: 50, category: "Front-End" },
    { name: "TypeScript", level: 45, category: "Front-End" },
    { name: "HTML5 / CSS3", level: 60, category: "Front-End" },
    { name: "Tailwind CSS", level: 55, category: "Front-End" },
    { name: "SQLite / SQL", level: 40, category: "Banco de Dados" },
    { name: "Git / GitHub", level: 50, category: "Ferramentas" }
  ];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-x-hidden">

      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">MICHAEL CARLOS</span>
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono font-medium text-slate-300">
            <a href="#inicio" className="hover:text-emerald-400 transition-colors">INÍCIO</a>
            <a href="#projetos" className="hover:text-emerald-400 transition-colors">PROJETOS</a>
            <a href="#experiencia" className="hover:text-emerald-400 transition-colors">TRAJETÓRIA</a>
            <a href="#educacao" className="hover:text-emerald-400 transition-colors">FORMAÇÃO</a>
            <a href="#tecnologias" className="hover:text-emerald-400 transition-colors">ESTUDOS & SKILLS</a>
            <a href="#sobre" className="hover:text-emerald-400 transition-colors">SOBRE MIM</a>
            <a href="#contato" className="hover:text-emerald-400 transition-colors">CONTATO</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/michaelcarlos1806-glitch" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/michael-carlos1411/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono">
              LinkedIn
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none font-mono text-sm border border-slate-800 px-3 py-1.5 rounded-lg"
          >
            {mobileMenuOpen ? 'FECHAR' : 'MENU'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090d16] border-b border-slate-800 px-6 py-4 space-y-3 font-mono text-sm">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-1">INÍCIO</a>
            <a href="#projetos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-1">PROJETOS</a>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-1">TRAJETÓRIA</a>
            <a href="#educacao" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-1">FORMAÇÃO</a>
            <a href="#tecnologias" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-1">ESTUDOS & SKILLS</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-1">SOBRE MIM</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-1">CONTATO</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-40 pb-28 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 min-h-[90vh]">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs rounded-full mb-4">
            BUSCANDO OPORTUNIDADE DE ESTÁGIO
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 text-white">
            MICHAEL <span className="text-emerald-400">CARLOS</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 font-mono">
            ESTUDANTE DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
          </h2>
          <p className="text-slate-400 text-sm md:text-base mb-8 font-mono tracking-widest uppercase">
            Estudando C# | .NET | React | TypeScript | SQLite
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#projetos"
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 text-sm font-mono tracking-wider"
            >
              VER PROJETOS
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/michaelcarlos1806-glitch" target="_blank" rel="noreferrer" className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all font-mono text-xs">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/michael-carlos1411/" target="_blank" rel="noreferrer" className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all font-mono text-xs">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* FOTO 1 - HERO */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin"></div>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#090d16] border-2 border-emerald-500/40 shadow-2xl flex items-center justify-center relative overflow-hidden group">
            <img 
              src="/imagemmichealport.png" 
              alt="Michael Carlos" 
              className="w-full h-full object-cover scale-125 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2 text-white flex items-center gap-3">
            PROJETOS PRÁTICOS
          </h2>
          <p className="text-slate-400 font-mono text-sm">Clique na imagem do projeto para visitar o site ao vivo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* IMAGEM COM LINK DIRETO */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block w-full h-48 bg-slate-950 rounded-xl overflow-hidden mb-4 border border-slate-800 group relative cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-emerald-500 text-slate-950 font-mono text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                      Visitar Site →
                    </span>
                  </div>
                </a>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-emerald-400 font-mono text-xs uppercase px-2.5 py-1 bg-emerald-500/10 rounded-md">Portfólio</span>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-mono text-xs underline">
                    Acessar Online
                  </a>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIA / TRAJETÓRIA */}
      <section id="experiencia" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2 text-white">
            TRAJETÓRIA & OBJETIVO
          </h2>
          <p className="text-slate-400 font-mono text-sm">Foco atual em transição e aprendizado profissional na área de tecnologia.</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <span className="text-xs font-mono text-emerald-400 mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-slate-300 text-sm font-semibold mb-2">{exp.company}</p>
              <p className="text-slate-400 text-sm mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCAÇÃO E CERTIFICADOS */}
      <section id="educacao" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2 text-white">
            FORMAÇÃO & CERTIFICADOS
          </h2>
          <p className="text-slate-400 font-mono text-sm">Minha base acadêmica e capacitações profissionais.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-4 font-mono">FORMAÇÃO SUPERIOR</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 mb-4">
                <span className="text-xs font-mono text-slate-400 mb-1 block">{edu.period}</span>
                <h4 className="text-md font-bold text-white">{edu.institution}</h4>
                <p className="text-emerald-400 text-xs font-mono mb-2">{edu.course}</p>
                <p className="text-slate-400 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-4 font-mono">CAPACITAÇÕES & CERTIFICADOS</h3>
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 mb-4">
                <span className="text-xs font-mono text-emerald-400 mb-1 block">{cert.issuer}</span>
                <h4 className="text-md font-bold text-white">{cert.title}</h4>
                <p className="text-slate-400 text-sm mt-1">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2 text-white">
            ESTUDOS & NÍVEL DE APRENDIZAGEM
          </h2>
          <p className="text-slate-400 font-mono text-sm">Minhas porcentagens atuais de conhecimento, focando no desenvolvimento e busca por estágio.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {techSkills.map((tech, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-bold text-white">{tech.name}</h4>
                  <span className="text-xs font-mono text-slate-400">{tech.category} (Em Aprendizado)</span>
                </div>
                <span className="text-emerald-400 font-mono font-bold text-sm">
                  {tech.level}%
                </span>
              </div>
              
              <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden mt-2">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-wider mb-6 text-white">
              SOBRE MIM
            </h2>
            <p className="text-slate-300 leading-relaxed text-justify mb-4">
              Estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia e resolução de problemas. Atualmente, concentro meus estudos no ecossistema <span className="text-emerald-400 font-semibold">C#, .NET, React e TypeScript</span>.
            </p>
            <p className="text-slate-300 leading-relaxed text-justify mb-6">
              Estou em busca da minha primeira oportunidade de estágio para colaborar em equipe, transformar código em soluções reais e acelerar meu crescimento profissional.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/michaelcarlos1806-glitch" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-emerald-400 hover:border-emerald-500 text-xs font-mono transition-all">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/michael-carlos1411/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-emerald-400 hover:border-emerald-500 text-xs font-mono transition-all">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl flex flex-col items-center text-center">
            {/* FOTO 2 - SOBRE MIM */}
            <div className="w-24 h-24 rounded-full bg-[#090d16] border border-emerald-500/50 mb-4 overflow-hidden shadow-lg flex items-center justify-center">
              <img 
                src="/imagemmichealport.png" 
                alt="Michael Carlos"
                className="w-full h-full object-cover scale-125 rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-white">Michael Carlos</h3>
            <p className="text-emerald-400 font-mono text-xs mt-1 mb-4">Em busca de Estágio • Dev Web</p>
            <div className="w-full border-t border-slate-800 pt-4 flex justify-around text-sm font-mono text-slate-400">
              <div>
                <span className="block text-white font-bold">Mossoró</span>
                <span>RN, Brasil</span>
              </div>
              <div>
                <span className="block text-emerald-400 font-bold">Status</span>
                <span>Disponível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 px-6 max-w-4xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-wider mb-2 text-white">CONTATO</h2>
          <p className="text-slate-400 font-mono text-sm">Vamos conversar sobre oportunidades de estágio ou projetos!</p>
          <p className="text-emerald-400 font-mono text-sm mt-2 font-bold">michaelcarloa1806@gmail.com</p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl">
          {formSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold mb-4 animate-bounce">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
              <p className="text-slate-400 font-mono text-sm">Obrigado pelo contato. Retornarei em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Recrutador / Empresa" 
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Seu E-mail</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="empresa@email.com" 
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Mensagem</label>
                <textarea 
                  rows={4} 
                  required 
                  placeholder="Escreva sua mensagem ou proposta de estágio..." 
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none text-sm"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-sm tracking-wider font-mono cursor-pointer"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs font-mono text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 • Michael Carlos • Buscando Estágio em Desenvolvimento Web.</p>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/michaelcarlos1806-glitch" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/michael-carlos1411/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;