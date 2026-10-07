'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, ArrowDownToLine, Plus, X, Phone, Mail, MapPin } from 'lucide-react'

const sections = [
  { title: 'Professional Summary', label: 'An introduction to my background', content: <p>Analytical Information Technology student specializing in Applied Artificial Intelligence, with freelance experience in AI evaluation, LLM benchmarking, and technical content creation. Passionate about leveraging AI tools to solve real-world problems and streamline workflows efficiently.</p> },
  { title: 'Skills', label: 'Technical expertise & core strengths', content: <ul className="skills-list">{['Customer Service', 'Critical Thinking', 'Attention to Detail', 'Team Collaboration', 'Efficiency Optimization', 'LLM Evaluation', 'Data Annotation', 'Quality Assurance', 'Technical Writing', 'Problem Solving'].map(skill => <li key={skill}>{skill}</li>)}</ul> },
  { title: 'Work Experience', label: 'My professional journey', content: <div className="experience-list">
    <Experience title="A.I. & Tech Freelancer" date="June 2026 - Present" points={[
      'Evaluate and benchmark LLM outputs across complex multi-turn prompts, performing detailed data annotation and error categorization to maintain the highest labeling accuracy for training and improvement datasets.',
      'Engineer structured prompt frameworks during pre-release beta testing, systematically stress-testing models to identify hallucinations, safety vulnerabilities, and alignment gaps.',
      'Deliver high-precision transcription and audio verification for specialized technical and conversational recordings, applying rigorous quality assurance protocols to consistently achieve verified accuracy above 99.2%.'
    ]} />
    <Experience title="Independent Contractor" date="June 2024 – Present" points={[
      'Processed 55-65 deliveries per week and utilized handheld devices to collect signatures, resulting in an 80% reduction in invoicing errors.',
      'Plan daily routes using GPS mapping applications and traffic data to reduce transit time, presenting ETA changes to dispatch and recipients to coordinate handoffs and improve delivery efficiency.',
      'Created a concise pre-trip checklist for navigators that shortened vehicle preparation time by 90% before shifts.'
    ]} />
    <Experience title="Evergreen Health Services" role="Medical Assistant" date="December 2016 - May 2024" points={[
      'Managed patient check in through the Electronic Health Records (EHR), verified insurance information, and updated medical histories to support prompt provider review.',
      'Prepared exam rooms, sanitized instruments, and restocked supplies to support a daily patient volume of 15-20, keeping schedules for three providers running efficiently.',
      'Collected and labeled laboratory specimens, processed point-of-care tests, recorded vital signs, performed EKGs, and communicated any abnormal findings to the provider and clinical nursing staff.'
    ]} />
  </div> },
  { title: 'Education & Certifications', label: 'Learning, qualifications & credentials', content: <div className="education-list">
    <article><h3>Campus- Sacramento (currently attending)</h3><p>Associate of Science, Information Technology - Applied AI</p></article>
    <article><h3>SUNY Niagara</h3><p>Pre-Nursing Studies</p></article>
    <article><h3>National Center for Competency Testing</h3><p>Nationally Certified Medical Assistant (NCMA)</p></article>
  </div> }
]

function Experience({ title, date, role, points }: { title: string; date: string; role?: string; points: string[] }) {
  return <article><div className="experience-heading"><h3>{title}</h3><span>{date}</span></div>{role && <p className="role">{role}</p>}<ul>{points.map(point => <li key={point}>{point}</li>)}</ul></article>
}

export default function Resume() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const [showPersonalInfo, setShowPersonalInfo] = useState(false)

  function openSection(index: number) {
    setActive(index)
    dialog.current?.showModal()
    document.body.style.overflow = 'hidden'
  }
  function restoreScroll() { document.body.style.overflow = '' }

  return <main className="resume-page">
    <div className="resume-sheet">
      <header className="resume-header">
        <div className="header-top"><span className="eyebrow">PERSONAL RÉSUMÉ</span></div>
        <div className="identity-row">
          <div className="identity"><h1>XAVIER<br />WASHINGTON<span className="name-period">.</span></h1></div>
          <div className="logo-wrap"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20-%20October%2005%2C%202026%20at%2012.45.35%20%281%29-k36cF2BOD1IlTXecPDRHAtiHQ70Ex" alt="Xavier Washington" /></div>
        </div>
        <address className={`contact-details ${!showPersonalInfo ? 'blur-personal-info' : ''}`}>
          <a href="tel:+17163598840" title={showPersonalInfo ? '' : 'Hover to reveal'}><Phone size={14} />(716) 359-8840</a>
          <a href="mailto:xfw1228@gmail.com" title={showPersonalInfo ? '' : 'Hover to reveal'}><Mail size={14} />xfw1228@gmail.com</a>
          <span title={showPersonalInfo ? '' : 'Hover to reveal'}><MapPin size={14} />Buffalo, NY, USA</span>
          <a href="https://www.linkedin.com/in/xavier-w-811675122" target="_blank" rel="noopener noreferrer" className="linkedin">linkedin.com/in/xavier-w-811675122<ArrowUpRight size={15} /></a>
        </address>
        <button 
          className="toggle-personal-info"
          onClick={() => setShowPersonalInfo(!showPersonalInfo)}
          aria-label={showPersonalInfo ? 'Hide personal information' : 'Show personal information'}
        >
          {showPersonalInfo ? '🔓 Hide Contact Info' : '🔒 Show Contact Info'}
        </button>
      </header>
      <section className="section-directory" aria-label="Résumé sections">
        <div className="directory-intro"><span>EXPLORE MY RÉSUMÉ</span><span>Click a section to discover more <ArrowDownToLine size={12} /></span></div>
        {sections.map((section, index) => <h2 key={section.title}><button className="section-trigger" onClick={() => openSection(index)} aria-haspopup="dialog"><span className="section-text"><span className="section-number">{String(index + 1).padStart(2, '0')}</span><span><span className="section-title">{section.title}</span><span className="section-description">{section.label}</span></span></span><span className="open-icon"><Plus size={16} /></span></button></h2>)}
      </section>
      <footer className="resume-footer"><span>Let's connect.<a href="mailto:xfw1228@gmail.com">Start a conversation <ArrowUpRight size={14} /></a></span><a className="download-link" href="/xavier-washington-resume.pdf" download>Download Resume<span className="pdf-label">PDF</span></a></footer>
    </div>
    <dialog ref={dialog} className="resume-dialog" aria-labelledby="section-dialog-title" onClose={restoreScroll} onClick={event => { if (event.target === dialog.current) dialog.current.close() }}>
      <div className="dialog-inner"><div className="dialog-top"><span className="eyebrow">XAVIER WASHINGTON</span><button className="close-dialog" aria-label="Close section" onClick={() => dialog.current?.close()}><X size={20} /></button></div><h2 id="section-dialog-title">{sections[active]?.title}</h2><div className="dialog-body">{sections[active]?.content}</div></div>
    </dialog>
  </main>
}
