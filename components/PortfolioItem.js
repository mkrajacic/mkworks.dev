import Link from "next/link";
import Image from "next/image";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item group bg-gray-100 hover:shadow-inner h-80 rounded-xl flex items-center justify-center relative">
      <div className="group-hover:hidden">
        <Image src={props.src} layout="fill" objectFit={"cover"} />
      </div>
      <div className="portfolio-text hidden group-hover:block">
        <h1 className="portfolio-title text-lg mb-3 antialiased">
          {props.title}
        </h1>
        <Link href={props.href}>
          <button className="rounded-full bg-black text-white w-28 h-10 portfolio-btn text-xl">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
