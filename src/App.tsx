import * as React from "react";
import Axios from "axios";
import Movie from "./Movie";
import { MovieType } from "./Movie";

interface pageState {
  isLoading: boolean;
  movies: MovieType[];
}

class App extends React.Component<{}, pageState> {
  state: pageState = {
    isLoading: true,
    movies: [],
  };

  getMovies = () => {
    return Axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  loadMovies = async () => {
    const response = await this.getMovies();
    const loadedMovies: MovieType[] = [];
    for (const movie of response.data.data.movies) {
      loadedMovies.push({
        id: movie.id,
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
        coverImage: movie.medium_cover_image,
        rating: movie.rating,
      });
    }

    this.setState({ movies: loadedMovies });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
    this.loadMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  genres={movie.genres}
                  coverImage={movie.coverImage}
                  rating={movie.rating}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
