import Intro from "../../components/Intro";
import Navigation from "../../components/Navigation";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Img1 from "../../public/portfolio_img/ballattack1.png";
import Img2 from "../../public/portfolio_img/ballattack2.png";
import Img3 from "../../public/portfolio_img/ballattack3.png";
import Img4 from "../../public/portfolio_img/ballattack4.png";

export default function BallAttack() {
  return (
    <div className="w-full">
      <Intro />
      <Navigation />
      <SectionTitle title="BallAttack" />
      <div className="flex flex-col md:flex-row mt-6 justify-center px-5 w-full lg:w-5/6 m-auto items-baseline">
        <div className="basis-10/12 text-gray-50 rounded-xl bg-zinc-900 mx-5 h-46 project-desc">
          <p className="section-text p-6 text-base text-justify">
            A game made using the Unity game engine. The code was written in C#.
            <br />
            <a
              href="https://github.com/mkrajacic/BallAttack"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 inline-block text-white text-sm mt-6 link-btn py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-sky-700 rounded"
            >
              Github link
            </a>
          </p>
        </div>
        <div className="basis-[13.6667%] skills-ul text-gray-50 rounded-xl bg-zinc-900 mx-5 w-5/6 md:w-full">
          <ul className="portfolio-skill-list text-center p-6">
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              Unity
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              C#
            </li>
          </ul>
        </div>
      </div>
      <div className="images mt-12 w-3/5 m-auto">
        <div className="flex justify-center mt-3">
          <Image src={Img1} />
        </div>
        <div className="flex justify-center mt-8">
          <Image src={Img2} />
        </div>
        <div className="flex justify-center mt-8">
          <Image src={Img3} />
        </div>
        <div className="flex justify-center mt-8">
          <Image src={Img4} />
        </div>
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
