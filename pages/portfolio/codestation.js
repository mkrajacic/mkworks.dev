import Intro from "../../components/Intro";
import Navigation from "../../components/Navigation";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Img1 from "../../public/portfolio_img/codestation1.jpg";
import Img2 from "../../public/portfolio_img/codestation2.jpg";
import Img3 from "../../public/portfolio_img/codestation3.jpg";
import Img4 from "../../public/portfolio_img/codestation4.jpg";
import Img5 from "../../public/portfolio_img/codestation5.jpg";
import Img7 from "../../public/portfolio_img/codestation7.jpg";
import Img8 from "../../public/portfolio_img/codestation8.jpg";
import Img9 from "../../public/portfolio_img/codestation9.jpg";
import Img10 from "../../public/portfolio_img/codestation10.jpg";
import Img11 from "../../public/portfolio_img/codestation11.jpg";

export default function Codestation() {
  return (
    <div className="w-full">
      <Intro />
      <Navigation />
      <SectionTitle title="Codestation" />
      <div className="flex flex-col md:flex-row mt-6 justify-center px-5 w-full lg:w-5/6 m-auto items-baseline">
        <div className="basis-10/12 text-gray-50 rounded-xl bg-zinc-900 mx-5 h-46 project-desc">
          <p className="section-text p-6 text-base text-justify">
            Application for learning programming languages through decriptions
            and quizzes. The quizzes had different types of questions, including
            questions that required typing code.{" "}
            <a
              className="caption-link"
              href="https://www.jdoodle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JDoodle
            </a>{" "}
            was used for compiling the inputted code. The result of the code as
            well as its contents were compared to the correct answer.{" "}
            <a
              className="caption-link"
              href="https://github.com/Rob--W/cors-anywhere"
              target="_blank"
              rel="noopener noreferrer"
            >
              CORS Anywhere
            </a>{" "}
            was used to solve the CORS errors that would make using JDoodle
            impossible.
            <a
              href="https://github.com/mkrajacic/codestation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 block text-white text-sm mt-6 link-btn py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-sky-700 rounded"
            >
              Github link
            </a>
          </p>
        </div>
        <div className="basis-[13.6667%] skills-ul text-gray-50 rounded-xl bg-zinc-900 mx-5 w-5/6 md:w-full">
          <ul className="portfolio-skill-list text-center p-6">
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              HTML
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              CSS
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              Bootstrap
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              JavaScript
            </li>
            <li className="portfolio-skill-list-item text-sm italic">JQuery</li>
            <li className="portfolio-skill-list-item text-sm italic">
              Typed.js
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              Slick.js
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              JDoodle
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              CodeMirror
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              TinyMCE
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              CORS Anywhere
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              PHP
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              HTML Purifier
            </li>
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
          The first page of the application, text animations made using{" "}
          <a
            className="caption-link"
            href="https://mattboldt.com/demos/typed-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typed.js
          </a>
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img2} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The list of programming languages.
          <a
            className="caption-link"
            href="https://kenwheeler.github.io/slick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Slick.js{" "}
          </a>
          was used to make the slider
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img3} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The menu appears when hovering over the icon. It includes a dark mode,
          implemented using JavaScript&#39;s localStorage
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img4} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Language description
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img5} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          List of lessons
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img7} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          One of the questions. On the upper right is the number of remaining
          lives. The menu on the left has a return button, the button to submit
          the answer and to skip the question
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img8} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          This page appears after losing all 3 lives (incorrectly answering 3
          times)
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img9} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          How it looks when the correct answer is submitted
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img10} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The profile page that lists the completed languages and progress by
          unfinished languages, and includes buttons for editing the profile
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img11} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          A look at the responsivness
        </p>
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
