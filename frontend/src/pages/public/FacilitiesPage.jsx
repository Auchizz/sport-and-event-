import FacilitiesSection from '../../components/public/FacilitiesSection'
import {
  facilityAvailability,
  facilityOverview
} from '../../data/sliitSportsHubData'

export default function FacilitiesPage() {
  return (
    <section className="sliit-section py-12 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="sliit-pill justify-center">Facilities Booking</p>
        <h1 className="sliit-heading mt-6 text-5xl text-white sm:text-6xl">Plan your training around courts, grounds, and gym availability.</h1>
        <p className="mt-5 text-lg leading-8 text-sliit-muted">
          Students can book sports grounds and courts, reserve gym facilities, and review indicative slot availability before making a request.
        </p>
      </div>

      <div className="mt-10">
        <FacilitiesSection overview={facilityOverview} availability={facilityAvailability} />
      </div>
    </section>
  )
}
