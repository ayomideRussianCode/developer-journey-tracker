

const SkillCard = (props) => {
    console.log(props)
  return (
    <div>
        <h1 className="text-2xl">{props.category}</h1>
        <ul>{props.skill.map((skill, i)=>(
            <li key={i} >{skill.name}</li>
        ))}</ul>
    </div>
  )
}

export default SkillCard


// Dashboard knows category and skills.

// Dashboard gives category and skills to SkillCard.

// SkillCard receives category and skills.

// SkillCard displays category.