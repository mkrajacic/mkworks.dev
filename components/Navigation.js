import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <div className="m-auto text-base sm:gap-x-5 sm:w-full menu text-gray-50 list-none flex justify-center md:gap-x-14 uppercase sm:text-2xl font-semibold">
        <div>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/#skills">
            <a>Skills</a>
          </Link>
        </div>
        <div>
          <Link href="/#projects">
            <a>Projects</a>
          </Link>
        </div>
        <div>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </div>
        <div>
          <a
            href="https://europa.eu/europass/eportfolio/screen/share/522a82c2-322e-474a-adb6-d6b44837e381?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div>
          <a
            href="https://github.com/mkrajacic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
