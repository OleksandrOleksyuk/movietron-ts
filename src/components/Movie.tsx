import { MovieData } from "../types";

interface MovieProps {
  movie: MovieData;
  onSelectMovie: (imdbID: string) => void;
}

export function Movie({ movie, onSelectMovie }: MovieProps) {
  if (!movie) return <p>Loading...</p>;

  const { imdbID, Poster, Title, Year } = movie;

  return (
    <li key={imdbID} onClick={() => onSelectMovie(imdbID)}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
}
