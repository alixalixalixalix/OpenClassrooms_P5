import Dropdown from "./Dropdown";

const BlocLogement = ({
  id,
  title,
  location,
  hostName,
  hostPicture,
  description,
  tags,
  rating,
  equipments,
}) => {
  // On convertit rating en number
  parseInt(rating);

  // Création d'un tableau pour apparition des ratings
  const tabRating = Array.from({ length: 5 }, (_, i) => (
    <img
      key={i}
      src={i < rating ? "/star-active.png" : "/star-inactive.png"}
      alt="etoile notation"
    />
  ));

  return (
    <div className="blocLogement marginComponent">
      <div className="blocLogement__top">
        <div className="blocLogement__title">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="blocLogement__title__tags">
            {tags.map((unTag) => (
              <p key={`${unTag}-${id}`}>{`${unTag}`}</p>
            ))}
          </div>
        </div>
        <div className="blocLogement__hote">
          <div className="blocLogement__hote__nom">
            <p>{hostName}</p>
            <img src={hostPicture} alt="hote" />
          </div>
          <div className="blocLogement__hote__note">
            {tabRating}
            {/*
            <img src="/star-active.png" alt="etoile notation" />
            <img
              src={rating > 1 ? "/star-active.png" : "/star-inactive.png"}
              alt="etoile notation"
            />
            <img
              src={rating > 2 ? "/star-active.png" : "/star-inactive.png"}
              alt="etoile notation"
            />
            <img
              src={rating > 3 ? "/star-active.png" : "/star-inactive.png"}
              alt="etoile notation"
            />
            <img
              src={rating > 4 ? "/star-active.png" : "/star-inactive.png"}
              alt="etoile notation"
            />
            */}
          </div>
        </div>
      </div>
      <div className="blocLogement__dropdown">
        <Dropdown name="Description" content={<p>{description}</p>} />
        <Dropdown
          name="Équipements"
          content={
            <ul>
              {equipments.map((unEquipement) => (
                <li key={`${unEquipement}-${id}`}>{`${unEquipement}`}</li>
              ))}
            </ul>
          }
        ></Dropdown>
      </div>
    </div>
  );
};

export default BlocLogement;
