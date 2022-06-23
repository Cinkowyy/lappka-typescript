import PetCard from "components/PetCard/PetCard";

import { petDataType } from "interfaces";

import moniakImage from "img/moniak.png";
import genderIcon from "img/male-icon.svg";
import { useEffect, useMemo, useState } from "react";

function Dashboard() {
  const getPetsData = useMemo(() => {
    const petData: petDataType = {
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

    const pets: petDataType[] = [];

    for (let i = 0; i < 6; i++) {
      pets.push(petData);
    }

    return pets;
  }, []);

  const [petsData, setPetsData] = useState<petDataType[]>([]);

  useEffect(() => {
    setPetsData(getPetsData);
  }, [getPetsData]);

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
