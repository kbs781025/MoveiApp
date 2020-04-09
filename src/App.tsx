import * as React from "react";
import Axios from "axios";
import Movie from "./Movie";

// interface MovieProp {
//   key: number;
//   title: string;
//   date: string;
// }

// function Movie({ title, date }: MovieProp) {
//   return (
//     <div>
//       <h1>
//         Movies {title} {date}
//       </h1>
//     </div>
//   );
// }

// const movies: { id: number; name: string; date: string }[] = [
//   { id: 1, name: "Batman", date: "200408" },
//   { id: 2, name: "Superman", date: "200420" },
// ];

// function renderMovies(movie: {
//   id: number;
//   name: string;
//   date: string;
// }): JSX.Element {
//   return <Movie key={movie.id} title={movie.name} date={movie.date} />;
// }

// function App() {
//   return <div>{movies.map(renderMovies)}</div>;
// }

interface MovieType {
  id: number;
  title: string;
  year: number;
  rating: number;
}

interface pageState {
  isLoading: boolean;
  movies: Movie[];
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
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
