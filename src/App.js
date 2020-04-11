import * as React from "react";
import Axios from "axios";
import Movie from "./Movie";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isLoading: true,
      movies: [],
    };
    this.getMovies = () => {
      return Axios.get("https://yts-proxy.now.sh/list_movies.json");
    };
    this.loadMovies = () =>
      __awaiter(this, void 0, void 0, function* () {
        const response = yield this.getMovies();
        const loadedMovies = [];
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
      });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
    this.loadMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return React.createElement(
      "div",
      null,
      isLoading
        ? "Loading"
        : movies.map((movie) => {
            return React.createElement(Movie, {
              key: movie.id,
              id: movie.id,
              title: movie.title,
              year: movie.year,
              genres: movie.genres,
              coverImage: movie.coverImage,
              rating: movie.rating,
            });
          })
    );
  }
}
export default App;
