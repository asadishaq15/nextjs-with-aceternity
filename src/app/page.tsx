import TestimonialsCards from "@/components/testimonialsCards";
import FeaturedCourses from "@/components/featuredCourses";
import Herosection from "@/components/herosection";
import WhyChooseUs from "@/components/whyChooseUs";
import UpcomingwWebinars from "@/components/upcoming-webinars";
import Instructor from "@/components/instructor";
import Footer from "@/components/footer";


export default function Home() {
  return (
<main className="min-g-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]]">
<Herosection/>
<FeaturedCourses/>
<WhyChooseUs/>
<TestimonialsCards/>
<UpcomingwWebinars/>
<Instructor/>
<Footer/>
</main>  );
}
