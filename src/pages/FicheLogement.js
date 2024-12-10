import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlocLogement from "../components/BlocLogement";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const FicheLogement = () => {
  const { id } = useParams();
  const onFiltre = data.find((unLogement) => unLogement.id === id); // {id}
  const listTags = onFiltre.tags; // je rassemble les tags pour les envoyer dans blocLogement
  const listEquipments = onFiltre.equipments; // je rassemble les equipments pour les envoyer dans blocLogement

  // tjr 5 étoiles mais autant d'active que nb

  return (
    <div>
      <Header />
      <Slider pictures={onFiltre.pictures} />
      <BlocLogement
        title={onFiltre.title}
        location={onFiltre.location}
        hostName={onFiltre.host.name}
        hostPicture={onFiltre.host.picture}
        description={onFiltre.description}
        rating={onFiltre.rating}
        tags={listTags}
        equipments={listEquipments}
      />
      <Footer />
    </div>
  );
};

export default FicheLogement;
