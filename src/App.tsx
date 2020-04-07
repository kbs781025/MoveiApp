import * as React from "react";

interface MovieProp {
  title: string;
}

function Movie({ title }: MovieProp) {
  return (
    <div>
      <h1>Movies {title}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Movie title="Batman" />
    </div>
  );
}

export default App;
