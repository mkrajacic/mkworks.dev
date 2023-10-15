import Intro from "../../components/Intro";
import Navigation from "../../components/Navigation";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Img1 from "../../public/portfolio_img/qa1.jpg";
import Img2 from "../../public/portfolio_img/qa2.jpg";
import Img3 from "../../public/portfolio_img/qa3.jpg";
import Img4 from "../../public/portfolio_img/qa4.jpg";
import Img5 from "../../public/portfolio_img/qa5.jpg";

export default function QBox() {
  return (
    <div className="w-full">
      <Intro />
      <Navigation />
      <SectionTitle title="ASP.NET MVC Q&A app" />
      <div className="flex flex-col md:flex-row mt-6 justify-center px-5 w-full lg:w-5/6 m-auto items-baseline">
        <div className="basis-10/12 text-gray-50 rounded-xl bg-zinc-900 mx-5 h-46 project-desc">
          <p className="section-text p-6 text-base text-justify">
            An application which allows users to input questions and answer
            them. The questions are separated by categories and can be searched,
            either by category or name. The user which asked the questions could
            choose their favorite answer. An ability to export questions/answers
            as PDFs was included. The application was a team project with four
            other students at the university, and I was put in charge of the
            team
            <br />
            <a
              href="https://github.com/mkrajacic/PAUP_QA"
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
              ASP.NET MVC
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              HTML
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              CSS
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              JavaScript
            </li>
            <li className="portfolio-skill-list-item text-sm italic">JQuery</li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              MySQL
            </li>
          </ul>
        </div>
      </div>
      <div className="images mt-12 w-3/5 m-auto">
        <div className="flex justify-center mt-3">
          <Image src={Img1} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Introduction page
        </p>
        <div className="flex justify-center mt-3">
          <Image src={Img2} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Displayed list of the latest questions.
        </p>
        <div className="flex justify-center mt-3">
          <Image src={Img3} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          An example of a form, in this case for registration
        </p>
        <div className="flex justify-center mt-3">
          <Image src={Img4} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          User profile modal which includes a list of the questions made by the
          user
        </p>
        <div className="flex justify-center mt-3">
          <Image src={Img5} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Logged in user profile modal without any created questions
        </p>
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
