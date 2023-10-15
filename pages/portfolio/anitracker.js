import Intro from "../../components/Intro";
import Navigation from "../../components/Navigation";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Img1 from "../../public/portfolio_img/anitracker1.png";
import Img2 from "../../public/portfolio_img/anitracker2.png";
import Img3 from "../../public/portfolio_img/anitracker3.png";
import Img4 from "../../public/portfolio_img/anitracker4.png";

export default function Anitracker() {
  return (
    <div className="w-full">
      <Intro />
      <Navigation />
      <SectionTitle title="anitracker" />
      <div className="flex flex-col md:flex-row mt-6 justify-center px-5 w-full lg:w-5/6 m-auto items-baseline">
        <div className="basis-10/12 text-gray-50 rounded-xl bg-zinc-900 mx-5 h-46 project-desc">
          <p className="section-text p-6 text-base text-justify">
            A client for the anime tracking website called anilist. Hybrid
            application made using Cordova. Tailwind was used for the styling.
            The data fetching and manipulation was done using the anilist API.
            The API calls were made in GraphQL. A demo is hosted on Netlify but
            an anilist profile is required.
            <br />
            <a
              href="https://github.com/mkrajacic/anitracker"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 inline-block text-white text-sm mt-6 link-btn py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-sky-700 rounded"
            >
              Github link
            </a>
            <a
              href="https://anitrackermk.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 w-32 inline-block text-white text-sm mt-6 link-btn py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-700 rounded"
            >
              Demo link
            </a>
          </p>
        </div>
        <div className="basis-[13.6667%] skills-ul text-gray-50 rounded-xl bg-zinc-900 mx-5 w-5/6 md:w-full">
          <ul className="portfolio-skill-list text-center p-6">
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              Cordova
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              HTML
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              CSS
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              Tailwind
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              JavaScript
            </li>
            <li className="portfolio-skill-list-item text-sm italic">JQuery</li>
            <li className="portfolio-skill-list-item text-sm italic">
              Slick.js
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              anilist API
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              GraphQL
            </li>
          </ul>
        </div>
      </div>
      <div className="images mt-12 w-3/5 m-auto">
        <div className="flex justify-center mt-3">
          <Image src={Img1} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The first page of the application features 20 of the highest rated
          anime on the platform, and 20 of the most popular anime on the
          platform. The slider was made using
          <a
            className="caption-link"
            href="https://kenwheeler.github.io/slick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Slick.js{" "}
          </a>
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img2} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The modal for adding an item to the list.
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img3} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Anime entries on the platform can be searched by the name
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img4} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          A list of the anime on the list of the logged in user
        </p>
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
