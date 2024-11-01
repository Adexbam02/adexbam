import { Footer } from "@/components/Footer"
import {Header} from "@/components/Header"
import { CTA } from "@/components/CTA"
import {Navbar} from "@/components/Navbar"
import { Process } from "@/components/Process"
import { Project } from "@/components/Project"
import { Social } from "@/components/Social"
// import { TechWall } from "@/components/StackWall"
import { Testimonial } from "@/components/Testimonial"

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <TechWall /> */}
      <Process />
      <Project />
      <Testimonial />
      <CTA />
      <Social />
      <Footer />
    </div>
  )
}

export default page