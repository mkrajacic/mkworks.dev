import Intro from "../../components/Intro";
import Navigation from "../../components/Navigation";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Img1 from "../../public/portfolio_img/praksa1.png";
import Img2 from "../../public/portfolio_img/praksa2.png";
import Img3 from "../../public/portfolio_img/praksa4.png";
import Img4 from "../../public/portfolio_img/praksa5.png";

export default function Phpwebshop() {
  return (
    <div className="w-full">
      <Intro />
      <Navigation />
      <SectionTitle title="PHP MySQL web shop" />
      <div className="flex flex-col md:flex-row mt-6 justify-center px-5 w-full lg:w-5/6 m-auto items-baseline">
        <div className="basis-10/12 text-gray-50 rounded-xl bg-zinc-900 mx-5 h-46 project-desc">
          <p className="section-text p-6 text-base text-justify">
            Internship web shop project made using PHP and MySQL.
            Functionalities include viewing products by categories, sorting,
            adding and removing from cart, placing orders. Backend technologies
            were the focus of the internship. The app also includes an
            administration section and an API built in PHP and tested using
            Postman.
            <br />
            <a
              href="https://github.com/mkrajacic/marker_praksa_2021_matija_krajacic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 inline-block text-white text-sm mt-6 link-btn py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-sky-700 rounded"
            >
              Github link
            </a>
            <a
              href="https://marker.hr/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="ml-4 w-48 inline-block text-white text-sm mt-6 link-btn py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-700 rounded"
            >
              Internship company
            </a>
          </p>
        </div>
        <div className="basis-[13.6667%] skills-ul text-gray-50 rounded-xl bg-zinc-900 mx-5 w-5/6 md:w-full">
          <ul className="portfolio-skill-list text-center p-6">
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              PHP
            </li>
            <li className="portfolio-skill-list-item text-sm italic">
              Postman
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              HTML
            </li>
            <li className="portfolio-skill-list-item text-xl text-sky-200">
              CSS
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
          The first page of the application, which displays highlighted products
        </p>
        <div className="flex justify-center mt-3">
          <Image src={Img2} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Displayed products from a specific category. Sorting options are on
          the left
        </p>
        <div className="flex justify-center mt-3">
          <Image src={Img3} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          Product details after the product has been added to the cart
        </p>
        <div className="flex justify-center mt-3">
          <Image src={Img4} />
        </div>
        <p className="text-white bg-zinc-800 text-center p-3 rounded-lg caption w-4/5 m-auto">
          The products within the cart
        </p>
      </div>
      <SectionTitle title="Contact" />
      <ContactForm />
    </div>
  );
}
