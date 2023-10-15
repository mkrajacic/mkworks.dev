const SectionTitle = (props) => {
  return (
    <div
      className="section-title-wrapper relative flex py-5 mt-6 items-center"
      id={props.id}
    >
      <div className="flex-grow border-t divider"></div>
      <span className="text-gray-50 flex-shrink mx-4 section-title text-center text-3xl">
        {props.title}
      </span>
      <div className="flex-grow border-t divider"></div>
    </div>
  );
};

export default SectionTitle;
