import * as React from "react";
// @ts-ignore
import { Link } from "react-router-dom";

export interface MovieType {
  id: number;
  title: string;
  year: number;
  genres: string[];
  coverImage: string;
  rating: number;
}

function Movie({ id, title, year, genres, coverImage, rating }: MovieType) {
  return (
    <div>
      <Link to={`/movie-detail/${id}`}>
        <h3>Title {title}</h3>
      </Link>
      <h3>Year {year}</h3>
      <ul>
        {genres.map((genre, index) => {
          return <li key={index}>{genre}</li>;
        })}
      </ul>
      <img alt={title} src={coverImage} title={title} />
      <h3>Rating {rating}</h3>
    </div>
  );
}

export default Movie;
