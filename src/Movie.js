import * as React from "react";
function Movie({ id, title, year, rating }) {
    return (React.createElement("div", null,
        React.createElement("h3", null,
            "Id ",
            id),
        React.createElement("h3", null,
            "Title ",
            title),
        React.createElement("h3", null,
            "Year ",
            year),
        React.createElement("h3", null,
            "Rating ",
            rating)));
}
export default Movie;
