import * as React from "react";

export interface MovieType {
  id: number;
  title: string;
  year: number;
  genres: string[];
  coverImage: string;
  rating: number;
}

function Movie({ title, year, genres, coverImage, rating }: MovieType) {
  return (
    <div>
      <h3>Title {title}</h3>
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
