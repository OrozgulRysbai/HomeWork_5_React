import { AddMovies } from "../AddMovies/AddMovies";
import Button from "../Button/Button";
import { useState } from "react";

function Header({ onSubmit, onClick}) {
  const [addMovies, setAddMovies] = useState(false);

  function openAndCloseAddMoviesHandler() {
    setAddMovies((prev) => !prev);
  }
  return (
    <header>
      <h1>Favorite Movies</h1>
      <div >
        {addMovies ? (
          <AddMovies
            onClick={openAndCloseAddMoviesHandler}
            onSubmit={onSubmit}
          />
        ) : (
          <Button
            userColor={"orange"}
            userTitle={"ADD Movie"}
            onClick={openAndCloseAddMoviesHandler}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
