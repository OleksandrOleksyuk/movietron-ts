import { WatchedMovieListProps } from "../types";
import { WatchedMovie } from "./WatchedMovie";

function WatchedMovieList({ watched, onDeleteWatched }: WatchedMovieListProps) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
