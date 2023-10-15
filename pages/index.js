import Intro from "../components/Intro";
import Navigation from "../components/Navigation";
import About from "../components/About";
import SectionTitle from "../components/SectionTitle";
import Skill from "../components/Skill";
import PortfolioItem from "../components/PortfolioItem";
import ContactForm from "../components/ContactForm";

import p1 from "../public/portfolio_img/codestation1.jpg";
import p2 from "../public/portfolio_img/anitracker1.png";
import p3 from "../public/portfolio_img/ballattack4.png";
import p4 from "../public/portfolio_img/weathar4.jpg";
import p5 from "../public/portfolio_img/map1.jpg";
import p6 from "../public/portfolio_img/photo3.png";
import p7 from "../public/portfolio_img/mkworksdev.png";
import p8 from "../public/portfolio_img/praksa1.png";
import p9 from "../public/portfolio_img/qa2.jpg";
import p10 from "../public/portfolio_img/xml1.png";

import data from "../public/data";
let skills = data.skills;

function widthClass(width) {
  return width == "w-1/4 2xl:w-1/5" ? "w-1/4 2xl:w-1/5" : "w-1/2";
}

export default function Home() {
  let display_skills = skills.map((skill) => {
    return (
      <Skill
        width={widthClass(skill.width)}
        src={skill.src}
        key={skill.skill}
      />
    );
  });

  return (
    <div className="w-full main-wrapper p-6">
      <Intro />
      <Navigation />
      <About />
      <SectionTitle title="Skills" id="skills" />
      <div className="w-4/6 skills xl:w-5/6 grid xl:grid-cols-4 lg:grid-cols-3 gap-4 text-center m-auto items-center sm:w-5/6 sm:grid-cols-2">
        {display_skills}
      </div>
      <SectionTitle title="Projects" id="projects" />
      <div className="w-5/6 portfolio xl:w-2/3 grid gap-4 text-center m-auto sm:grid-cols-1 md:grid-cols-2">
        <PortfolioItem
          src={p1}
          href="/portfolio/codestation"
          title="PHP programming language learning app"
        />
        <PortfolioItem
          src={p2}
          href="/portfolio/anitracker"
          title="Cordova tailwind anilist client"
        />
        <PortfolioItem
          src={p3}
          href="/portfolio/ballattack"
          title="Unity C# game"
        />
        <PortfolioItem
          src={p4}
          href="/portfolio/weathar"
          title="Unity AR weather app"
        />
        <PortfolioItem
          src={p5}
          href="/portfolio/chizu"
          title="P5.js leaflet country selector"
        />
        <PortfolioItem
          src={p6}
          href="/portfolio/mkgami"
          title="React photography collection website"
        />
        <PortfolioItem
          src={p7}
          href="/portfolio/mkworksdev"
          title="Next.js tailwind portfolio website"
        />
        <PortfolioItem
          src={p8}
          href="/portfolio/phpwebshop"
          title="PHP MySQL web shop"
        />
        <PortfolioItem
          src={p9}
          href="/portfolio/qbox"
          title="ASP.NET MVC Q&A app"
        />
        <PortfolioItem
          src={p10}
          href="/portfolio/escxml"
          title="XML visualization"
        />
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
