import PetCard from "../../../components/PetCard/PetCard";

import moniakImage from "../../../img/moniak.png";
import genderIcon from "../../../img/male-icon.svg";

function Dashboard() {
  const petData = {
    image: moniakImage,
    name: "Moniak",
    breed: "Kundelek",
    genderIcon: genderIcon,
    age: "1 rok",
    color: "Czarny",
    weight: "1.2 kg",
    sterilization: "tak",
  };

  return (
    <div className="dashboard">
      <p className="dashboard-title">Zwierzęta w schronisku</p>
      <div className="dashboard-content">
        <PetCard {...petData} />
        <PetCard {...petData} />
        <PetCard {...petData} />
        <PetCard {...petData} />
        <PetCard {...petData} />
        <PetCard {...petData} />
      </div>
    </div>
  );
}

export default Dashboard;
