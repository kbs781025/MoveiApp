import * as React from "react";
function Movie({ title }) {
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "Movies ",
            title)));
}
function App() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hello"),
        React.createElement(Movie, { title: "Batman" })));
}
export default App;
