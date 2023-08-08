import { ReactNode } from "react";

export interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
  imdbID: string;
}

export interface WatchedMovie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
  countRatingDecisions: number;
}

export interface MovieListProps {
  movies: MovieData[];
  onSelectMovie: (imdbID: string) => void;
}

export type ChildrenProps = {
  children: ReactNode;
};

export interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}

export interface WatchedSummaryProps {
  watched: WatchedMovie[];
}

export interface WatchedMovieListProps {
  watched: WatchedMovie[];
  onDeleteWatched: (imdbID: string) => void;
}

export interface WatchedMovieProps {
  movie: WatchedMovie;
  onDeleteWatched: (imdbID: string) => void;
}
