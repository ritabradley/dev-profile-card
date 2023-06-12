import Skill from "./Skill";
import { skillsData } from "../data";

function SkillList() {
  return (
    <>
      <ul className="skill-list">
        {skillsData.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            emoji={skill.emoji}
            bgColor={skill.bgColor}
          />
        ))}
      </ul>
    </>
  );
}

export default SkillList;
