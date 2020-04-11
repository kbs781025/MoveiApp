import * as React from "react";
function Movie({ title, year, genres, coverImage, rating }) {
    return (React.createElement("div", null,
        React.createElement("h3", null,
            "Title ",
            title),
        React.createElement("h3", null,
            "Year ",
            year),
        React.createElement("ul", null, genres.map((genre, index) => {
            return React.createElement("li", { key: index }, genre);
        })),
        React.createElement("img", { alt: title, src: coverImage, title: title }),
        React.createElement("h3", null,
            "Rating ",
            rating)));
}
export default Movie;
