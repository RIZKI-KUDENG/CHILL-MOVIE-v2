import { useState } from "react";
const MovieCard = ({ Movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex relative flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={Movie.image} alt={Movie.title} className="max-sm:w-23 max-sm:h-35 w-2xs h-2xs rounded-xl hover:scale-105 transition-all" />
      {isHovered && (
        <div className="flex flex-col gap-3 absolute top-0 left-0 z-3">
          <div>
            <img src={Movie.image} alt={Movie.title} className="w-22 h-13" />
          </div>
          <div>
            <div>
              <button>Play</button>
              <button>Pause</button>
              <button>Detail</button>
            </div>
          </div>
          <div>
            <p>Drama</p>
            <p>Komedi</p>
            <p>Aksi</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieCard;