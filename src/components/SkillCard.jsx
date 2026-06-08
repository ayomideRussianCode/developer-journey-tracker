

const SkillCard = (props) => {

    const totalSkills = props.skill.length;
    console.log(totalSkills);

    const completedSkills = props.skill.filter(skill => skill.completed).length;
    console.log(completedSkills);

    const percentage = Math.floor(completedSkills/totalSkills * 100);
    console.log(percentage);
  return (
    <div>
      <h1 className="text-2xl">{props.category}</h1>
      <ul>
        {props.skill.map((skill, i) => (
          <li key={i}>
            {skill.completed ? "✅" : "❌"} {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default SkillCard


// Dashboard knows category and skills.

// Dashboard gives category and skills to SkillCard.

// SkillCard receives category and skills.

// SkillCard displays category.