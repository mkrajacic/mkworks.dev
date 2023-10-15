import Intro from "../../components/Intro";
import Navigation from "../../components/Navigation";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Img1 from "../../public/portfolio_img/map1.jpg";
import Img2 from "../../public/portfolio_img/map2.jpg";
import Img3 from "../../public/portfolio_img/map3.jpg";
import Img4 from "../../public/portfolio_img/map4.jpg";

export default function Chizu() {
  return (
    <div className="w-full">
      <Intro />
      <Navigation />
      <SectionTitle title="chizu" />
      <div className="flex flex-col md:flex-row mt-6 justify-center px-5 w-full lg:w-5/6 m-auto items-baseline">
        <div className="basis-10/12 text-gray-50 rounded-xl bg-zinc-900 mx-5 h-46 project-desc">
          <p className="section-text p-6 text-base text-justify">
            This project allows the user to select the countries they wish to
            visit, and the countries they have already visited. The countries
            they wish to visit become marked in purple on the map, while the
            countries that have been visited get marked in green. A list gets
            populated next to the map as well. There is also an option to export
            the list data in JSON format. The JavaScript library{" "}
            <a
              className="caption-link"
              href="https://p5js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              P5.js
            </a>{" "}
            was used.{" "}
            <a
              className="caption-link"
              href="https://leafletjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leaflet.js
            </a>{" "}
            was used for creating the map. Once the leaflet map is clicked, the
            coordinate data of the clicked point is used in an{" "}
            <a
              className="caption-link"
              href="http://www.geonames.org/export/web-services.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              API
            </a>{" "}
            call which returns the name of the clicked country. That country is
            then marked into purple or green, depending on the value of the
            radiobutton. The data required for marking the countries is taken
            from the .geojson files downloaded from a Github repository.
            <br />
            <a
              href="https://github.com/mkrajacic/chizu"
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
              JavaScript
            </li>
            <li className="portfolio-skill-list-item text-sm italic">P5.js</li>
            <li className="portfolio-skill-list-item text-sm italic">
              leaflet.js
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              HTML
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              CSS
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              Geonames API
            </li>
          </ul>
        </div>
      </div>
      <div className="images mt-12 w-3/5 m-auto">
        <div className="flex justify-center mt-3">
          <Image src={Img1} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          A look at the map in which the user has marked both visited countries
          and those they would like to visit
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img2} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The map with only the countries the user would like to visit being
          marked. The cross sign next to the items on the list is a button which
          deletes the item from the list and unmarks the country from the map
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img3} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The map with only the countries the user has visited being marked
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img4} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The resulting JSON file of the &quot;Save countries&quot; button
        </p>
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
