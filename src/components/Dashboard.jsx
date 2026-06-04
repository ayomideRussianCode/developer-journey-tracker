import { roadmap } from "../data";
import SkillCard from "./SkillCard";

const entries = Object.entries(roadmap);

//    console.log(category);   const category = entries[0];

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div>
        <SkillCard category={entries[0][0]} skill={entries[0][1]} />
      </div>
    </div>
  );
};

export default Dashboard;
