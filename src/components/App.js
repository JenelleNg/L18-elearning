import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./diploma";
import Module from "./Module";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Header from "./Header";
import Favourites from "./Favourites";

function App() {
  const [favourites, setFavourites] = useState("");

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />

        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route
              path=":moduleId"
              element={
                <Module
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              }
            />
          </Route>
        </Route>

        <Route
          path="favourites"
          element={<Favourites favourites={favourites} />}
        />

        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
