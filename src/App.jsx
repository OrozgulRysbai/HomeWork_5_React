import "./App.css";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import { useState } from "react";

export const movies = [
  {
    id: 1,
    title: "Avatar 1",
    rating: 4,
    img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
  },

  {
    id: 2,
    title: "Kunfu panda",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },

  {
    id: 3,
    title: "Naruto Shipuden",
    rating: 5,
    img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
  },

  {
    id: 4,
    title: "Hobbit",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
  },
];
function App() {
  const [newMoviesMain, setNewMoviesMain] = useState(movies);
  const addNewMovieHandeler = (data) => {
    const newArr = [...newMoviesMain, data];
    setNewMoviesMain(newArr);
  };
  function deleteMainContent(id) {
    const newMovie = newMoviesMain.filter((el) => el.id !== id);
    setNewMoviesMain(newMovie);
   
  }
  return (
    <div className="App">
      <Header />
      <MainContent
        onDelete={deleteMainContent}
        onSubmit={addNewMovieHandeler}
        data={newMoviesMain}
      />
    </div>
  );
}

export default App;
