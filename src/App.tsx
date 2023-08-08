import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import NumResults from "./components/NumResults.tsx";
import Box from "./components/Box.tsx";
import MovieList from "./components/MovieList.tsx";
import WatchedMovieList from "./components/WatchedMovieList.tsx";
import WatchedSummary from "./components/WatchedSummary.tsx";
import Search from "./components/Search.tsx";
import MovieDetails from "./components/MovieDetails.tsx";
import useMovies from "./components/CustomHook/useMovies.tsx";
import { useLocalStorageState } from "./components/CustomHook/useLocalStorageState.tsx";
import { WatchedMovie } from "./types.ts";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState<WatchedMovie[] | []>(
    [],
    "watched"
  );

  function handleSelectMovie(movieId: string) {
    setSelectedId((selectId) => (selectId === movieId ? null : movieId));
  }

  function handleCloseMovies() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: WatchedMovie) {
    setWatched((watchedList: WatchedMovie[]) => [...watchedList, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watchedList: WatchedMovie[]) =>
      watchedList.filter((movie) => movie.imdbID !== id)
    );
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults length={movies.length} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovies}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="error">
      <span>❌</span> {message}
    </p>
  );
}
