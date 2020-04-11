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
  RouteComponentProps<{}, {}, movieDetailType>,
  movieDetailType
> {
  constructor(props: RouteComponentProps<{}, {}, movieDetailType>) {
    super(props);
    this.state = props.location.state;
  }

  componentDidMount() {
    const {
      location: { state },
      history,
    } = this.props;
    console.log(state);
    if (state === undefined) {
      console.log("UNDEFINED");
      history.push("/");
    }
  }

  render() {
    if (this.state) {
      return (
        <div>
          <span>{this.state.title}</span>
          <span>{this.state.year}</span>
        </div>
      );
    }
    return null;
  }
}

export default About;
