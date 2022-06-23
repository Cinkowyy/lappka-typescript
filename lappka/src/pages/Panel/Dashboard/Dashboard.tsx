import PetCard from "components/PetCard/PetCard";
import PetDetails from "components/PetCard/PetDetails/PetDetails";

import { cardProps } from "interfaces";

import moniakImage from "img/moniak.png";
import genderIcon from "img/male-icon.svg";
import { useEffect } from "react";
import { useState } from "react";

function Dashboard() {
  const petData = {
    image: moniakImage,
    name: "Moniak",
    breed: "Kundelek",
    genderIcon: genderIcon,
    details: [
      {
        detailName: "Wiek",
        value: "1 rok",
      },
      {
        detailName: "Kolor",
        value: "Czarny",
      },
      {
        detailName: "Waga",
        value: "1.2kg",
      },
      {
        detailName: "Sterylizacja",
        value: "Tak",
      },
    ],
  };

  const [petsData, setPetsData] = useState<cardProps[]>([]);

  useEffect(() => {
    const pets: cardProps[] = [];

    for (let i = 0; i < 6; i++) {
      pets.push(petData);
    }

    setPetsData(pets);
  }, []);

  return (
    <div className="dashboard">
      <p className="dashboard-title">Zwierzęta w schronisku</p>
      <div className="dashboard-content">
        {petsData.map((pet) => {
          return <PetCard {...pet} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
