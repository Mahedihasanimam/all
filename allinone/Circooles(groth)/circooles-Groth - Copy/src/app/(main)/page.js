import Categories from "@/components/home/Categories";
import HeroSection from "@/components/home/HeroSection";
import InfoSumarize from "@/components/home/InfoSumarize";
import PopularCourses from "@/components/home/PopularCourses";
import Webinner from "./webinner/Webinner";
import RecomendedPrograms from "@/components/home/RecomendedPrograms";
import TopRatedMentor from "@/components/home/TopRatedMentor";


export default function Home() {
  return (
    <main>
      <div className=" mx-auto">
        <HeroSection/>
        <InfoSumarize/>
        <PopularCourses/>
        <RecomendedPrograms/>
        <TopRatedMentor/>
        {/* <Webinner/>
        <Categories/> */}
      </div>
    </main>
  );
}
