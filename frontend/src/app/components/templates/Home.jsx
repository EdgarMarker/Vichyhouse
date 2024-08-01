import Approach from "../sections/Home/approach/Approach";
import Divisor from "../sections/Home/divisor/Divisor";
import FeaturedProjects from "../sections/Home/featured_projects/FeaturedProjects";
import Hero from "../sections/Home/hero/Hero";
import Intro from "../sections/Home/intro/Intro";
import SectionBlog from "../sections/Home/section_blog/SectionBlog";
import Services from "../sections/Home/services/Services";
import Testimonials from "../sections/Home/testimonials/Testimonials";

const Main = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Approach />
      <Services />
      <FeaturedProjects />
      <SectionBlog />
      <Divisor />
      <Testimonials/>
    </>
  );
};

export default Main;
