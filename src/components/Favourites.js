import { NavLink } from "react-router-dom";
import { getDiploma, getModule } from "../api";

export default function Favourites({ favourites }) {
  if (!favourites) {
    return (
      <div className="container">
        <h1>Favourite Modules</h1>
        <p>No favourite modules selected.</p>
      </div>
    );
  }

  const favList = favourites.split(",");

  return (
    <div className="container">
      <h1>Favourite Modules</h1>

      <ul>
        {favList.map(item => {
          const ids = item.split("|");
          const diplomaId = ids[0];
          const moduleId = ids[1];

          const diploma = getDiploma(diplomaId);
          const module = getModule({ diplomaId, moduleId });

          return (
            <li key={item}>
              <NavLink to={`/diplomas/${diplomaId}/${moduleId}`}>
                ★ {module.id} | {module.name} ({diploma.name})
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
