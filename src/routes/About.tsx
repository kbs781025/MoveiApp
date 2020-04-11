import * as React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";

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
  RouteComponentProps<{ id: string }, {}, movieDetailType>
> {
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
    return <Redirect to="/"></Redirect>;
  }
}

export default About;
