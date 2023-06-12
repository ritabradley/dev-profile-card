function Skill({ name, emoji, bgColor }) {
  return (
    <p className="skill" style={{ backgroundColor: bgColor }}>
      {name} <span>{emoji}</span>
    </p>
  );
}

export default Skill;
