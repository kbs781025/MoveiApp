import * as React from "react";

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
}

function Movie({ id, title, year, rating }: Movie) {
  return (
    <div>
      <h3>Id {id}</h3>
      <h3>Title {title}</h3>
      <h3>Year {year}</h3>
      <h3>Rating {rating}</h3>
    </div>
  );
}

export default Movie;
