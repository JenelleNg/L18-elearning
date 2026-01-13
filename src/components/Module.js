import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module({ favourites, setFavourites }) {
  const { diplomaId, moduleId } = useParams();

  const { name, desc, speaker } = getModule({
    diplomaId,
    moduleId
  });

  const favValue = diplomaId + "|" + moduleId;

  const favList = favourites ? favourites.split(",") : "";
  const isFavourite = favList && favList.includes(favValue);

  function toggleFavourite() {
    if (isFavourite) {
      setFavourites(
        favList.filter(item => item !== favValue).join(",")
      );
    } else {
      setFavourites(
        favourites
          ? favourites + "," + favValue
          : favValue
      );
    }
  }

  return (
    <>
      <h2>
        Module{" "}
        <span
          onClick={toggleFavourite}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        >
          {isFavourite ? "★" : "☆"}
        </span>
      </h2>

      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <p>{speaker.title}</p>
    </>
  );
}
