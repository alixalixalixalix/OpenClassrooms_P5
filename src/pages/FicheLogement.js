import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlocLogement from "../components/BlocLogement";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const FicheLogement = () => {
  const { id } = useParams();
  const dataTri = data.find((unLogement) => unLogement.id === id); // {id}
  const listTags = dataTri.tags; // je recupère les tags pour les envoyer dans blocLogement
  const listEquipments = dataTri.equipments; // je recupère les equipments pour les envoyer dans blocLogement

  return (
    <div>
      <Header />
      <Slider pictures={dataTri.pictures} />
      <BlocLogement
        title={dataTri.title}
        location={dataTri.location}
        hostName={dataTri.host.name}
        hostPicture={dataTri.host.picture}
        description={dataTri.description}
        rating={dataTri.rating}
        tags={listTags}
        equipments={listEquipments}
      />
      <Footer />
    </div>
  );
};

export default FicheLogement;
