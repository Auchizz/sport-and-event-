import { Link } from 'react-router-dom'

export default function ComingSoonPage({ title, description }) {
  return (
    <section className="sliit-section py-16">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-sliit sm:p-12">
        <p className="sliit-pill justify-center">Phase 2</p>
        <h1 className="sliit-heading mt-6 text-5xl text-white">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-sliit-muted">{description}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/join-team" className="sliit-button-primary">
            Open Join Directory
          </Link>
          <Link to="/sports-clubs#sports" className="sliit-button-secondary">
            Explore Sports
          </Link>
        </div>
      </div>
    </section>
  )
}
