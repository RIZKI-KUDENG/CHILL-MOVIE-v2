import { useState } from "react";
import MovieSlider from "../Components/Fragments/MovieSlider";
import MovieModal from "../Components/Fragments/MovieModal";
import { useMovies } from "../Hooks/useMovies";
import { Button } from "../Components/Elements/Button";
import AddMovieModal from "../Components/Fragments/addMovieModal";
import { useDocumentTitle } from "../Data/useDocumentsTitle";


const EditMovie = () => {
  useDocumentTitle("Edit Movie" || "Chill Movie");
  const { movies, addMovie, updateMovie, deleteMovie } = useMovies();
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showAddMovie, setShowAddMovie] = useState(false);

  const top = movies.filter((movie) => movie.kategori === "Top");
  const New = movies.filter((movie) => movie.kategori === "New");
  const trending = movies.filter((movie) => movie.kategori === "Trending");

  const handleAddMovie = () => {
    setShowAddMovie(true);
  };
  const handleCloseAddMovie = () => {
    setShowAddMovie(false);
  };
  const handleCardClick = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="relative">
      <h1 className="text-6xl font-bold text-center">Edit Movie</h1>
      <Button
        onClick={handleAddMovie}
        btn="Tambah Film"
        clas="py-3 rounded-full bg-[#E7E3FC3B] mx-auto w-30 hover:bg-slate-300 hover:bg-opacity-20 transition-colors font-normal flex items-center justify-center gap-2 cursor-pointer"
      />
      <MovieSlider
        title="Top Rating Film dan Series Hari ini"
        movies={top}
        enableHover={false}
        onCardClick={handleCardClick}
      ></MovieSlider>
      <MovieSlider
        title="Film trending"
        movies={trending}
        enableHover={false}
        onCardClick={handleCardClick}
      ></MovieSlider>
      <MovieSlider
        title="Rilis Baru"
        movies={New}
        enableHover={false}
        onCardClick={handleCardClick}
      ></MovieSlider>
      {showModal && (
        <MovieModal
          onClose={handleClose}
          movie={selectedMovie}
          onUpdate={updateMovie}
          onDelete={deleteMovie}
        >
        </MovieModal>
      )}
      {showAddMovie && (
      <AddMovieModal onClose={handleCloseAddMovie} onInput={() => console.log("berhasil")} onAdd={addMovie} />
      )}
    </div>
  );
};
export default EditMovie;
