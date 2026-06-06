import { roadmap } from "../data";
import SkillCard from "./SkillCard";

const entries = Object.entries(roadmap);

//    console.log(category);   const category = entries[0];

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div>
        {entries.map((entry, i) => (
          <SkillCard key={i} category={entry[0]} skill={entry[1]} /> 
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
