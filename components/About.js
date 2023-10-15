import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <SectionTitle title="About" />
      <div className="w-5/6 m-auto relative text-gray-50 rounded-xl section bg-zinc-900">
        <p className="section-text p-6 text-base text-justify">
          Matija K, from Croatia, 23 years old. Computer science bachelor since
          2021. Master of Science in Multimedia and Graphic Technology since
          2023. Been coding on a regular basis since 2014, when I started
          learning web design in high school.
        </p>
      </div>
    </div>
  );
};

export default About;
