import * as React from "react";
import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { MovieType } from "../Components/Movie";

// function About(
//   props: RouteComponentProps<{ id: string }, StaticContext, MovieType>
// ) {
//   console.log(props);
//   const movie: MovieType = props.location.state;
//   const id: string = props.match.params.id;
//   return (
//     <div>
//       <span>{id}</span>
//       <span>{movie.title}</span>
//     </div>
//   );
// }

interface movieDetailType {
  title: string;
  year: number;
}

class About extends React.Component<
  RouteComponentProps<{}, {}, movieDetailType>
> {
  componentDidMount() {
    const {
      location: { state },
      history,
    } = this.props;

    if (state == null) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <span>{location.state.title}</span>
          <span>{location.state.year}</span>
        </div>
      );
    }
    return null;
  }
}

export default About;
