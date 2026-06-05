

const SkillCard = (props) => {
    console.log(props)
  return (
    <div>
        <li>{props.category}</li>
        <li>{props.skill}</li>
    </div>
  )
}

export default SkillCard


// Dashboard knows category and skills.

// Dashboard gives category and skills to SkillCard.

// SkillCard receives category and skills.

// SkillCard displays category.