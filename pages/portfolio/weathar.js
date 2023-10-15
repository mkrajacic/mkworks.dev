import Intro from "../../components/Intro";
import Navigation from "../../components/Navigation";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Img1 from "../../public/portfolio_img/weathar1.jpg";
import Img2 from "../../public/portfolio_img/weathar2.png";
import Img3 from "../../public/portfolio_img/weathar3.jpg";
import Img4 from "../../public/portfolio_img/weathar4.jpg";

export default function WeathAR() {
  return (
    <div className="w-full">
      <Intro />
      <Navigation />
      <SectionTitle title="WeathAR" />
      <div className="flex flex-col md:flex-row mt-6 justify-center px-5 w-full lg:w-5/6 m-auto items-baseline">
        <div className="basis-10/12 text-gray-50 rounded-xl bg-zinc-900 mx-5 h-46 project-desc">
          <p className="section-text p-6 text-base text-justify">
            A weather app made in Unity. Users can scan names of places, and the
            app will display the current weather information for the places, if
            the information is available. The{" "}
            <a
              className="caption-link"
              href="https://cloud.google.com/vision/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Cloud Vision API
            </a>{" "}
            was used to detect the scanned text, which was then filtered and
            used on a{" "}
            <a
              className="caption-link"
              href="https://www.weatherapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              weatherapi
            </a>{" "}
            call to gather the weather information.{" "}
            <a
              className="caption-link"
              href="https://github.com/codemaker2015/google-cloud-vision-api-ocr-unity3d-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Github repository
            </a>{" "}
            was used as the base on which the project was created.
            <br />
            <a
              href="https://github.com/mkrajacic/weather-ar"
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
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              API
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              Google Cloud Vision API
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              weather api
            </li>
          </ul>
        </div>
      </div>
      <div className="images mt-12 w-3/5 m-auto">
        <div className="flex justify-center mt-3">
          <Image src={Img1} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The app menu.
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img2} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The info section.
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img3} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Scanning a list of places.
        </p>
        <div className="flex justify-center mt-8">
          <Image src={Img4} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The weather information of the scanned places.
        </p>
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
