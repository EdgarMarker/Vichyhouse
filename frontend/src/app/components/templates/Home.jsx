import {
  getApproachData,
  getHeroData,
  getHeroIntroData,
  getHomeBlogData,
  getHomeDivisorData,
  getPreviewProjectCard,
  getServicesData,
} from "@/app/services/home.services";
import Approach from "../sections/Home/approach/Approach";
import Divisor from "../sections/Home/divisor/Divisor";
import FeaturedProjects from "../sections/Home/featured_projects/FeaturedProjects";
import Hero from "../sections/Home/hero/Hero";
import Intro from "../sections/Home/intro/Intro";
import SectionBlog from "../sections/Home/section_blog/SectionBlog";
import HomeServices from "../sections/Home/services/HomeServices";
import Testimonials from "../sections/Home/testimonials/Testimonials";

const Main = async () => {
  const heroData = await getHeroData();
  const heroIntroData = await getHeroIntroData();
  const approachData = await getApproachData();
  const servicesData = await getServicesData();
  const previewProjectCard = await getPreviewProjectCard();
  const homeBlogData = await getHomeBlogData();
  const homeDivisorData = await getHomeDivisorData();

  return (
    <>
      {heroData.map((data, idx) => (
        <Hero data={data.pageSections[0]} key={idx} />
      ))}
      {heroIntroData.map((data, idx) => (
        <Intro data={data.pageSections[1]} key={idx} />
      ))}
      {approachData.map((data, idx) => (
        <Approach data={data.pageSections[2]} key={idx} />
      ))}
      {servicesData.map((data, idx) => (
        <HomeServices data={data.pageSections[3]} key={idx} />
      ))}
      {previewProjectCard.map((data, idx) => (
        <FeaturedProjects data={data.pageSections[4]} key={idx} />
      ))}
      {homeBlogData.map((data, idx) => (
        <SectionBlog dataBlog={data.pageSections[5]} key={idx} />
      ))}
      {homeDivisorData.map((data, idx) => (
        <Divisor data={data.pageSections[6]} key={idx} />
      ))}
      <Testimonials />
    </>
  );
};

export default Main;
