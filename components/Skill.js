const Skill = (props) => {
  return (
    <div className="skill bg-gray-50 hover:bg-sky-100 h-24 rounded-xl flex items-center justify-center">
      <img className={props.width} src={props.src} />
    </div>
  );
};

export default Skill;
