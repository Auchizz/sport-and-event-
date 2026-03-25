import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="sliit-section py-4">
      <div className="overflow-hidden rounded-[2rem] border border-sliit-gold/30 bg-gradient-to-r from-sliit-gold/15 via-sliit-panel to-sliit-blue/10 p-6 shadow-gold-glow sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="sliit-pill">Join Your Community</p>
            <h2 className="sliit-heading mt-5 text-4xl text-white sm:text-5xl">
              Want to join a sports team or club? Contact the Captain or Vice Captain directly through our platform.
            </h2>
            <p className="mt-4 text-base leading-7 text-sliit-muted">
              Reach out to student leaders, ask about trials and training, and discover the right space for your talent.
            </p>
          </div>

          <Link to="/sports-clubs#sports" className="sliit-button-primary whitespace-nowrap">
            Find Your Sport →
          </Link>
        </div>
      </div>
    </section>
  )
}
