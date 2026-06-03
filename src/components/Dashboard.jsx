import { roadmap } from "../data"
import SkillCard from "./SkillCard";
   

   const entries = Object.entries(roadmap);


//    console.log(category);   const category = entries[0];

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <ul>
        {entries.map((category, i) => (
          <li key={i}>{category[0]}</li>
        ))}
      </ul>
      <SkillCard/>
    </div>
  );
}

export default Dashboard