import React from "react";
import SearchBar from "./SearchBar";
//parent level in the heirarchy

if (module.hot) {
  module.hot.accept();
}
//functional components (no class)
const App = () => {
  //returns the searchbar component - allows for easy reuse!
  return (
    //classname allows for searchbar to be wrapped in container - also using inline styling for just on css style
    <div className="ui container" style={{ marginTop: 10 }}>
      <SearchBar />
    </div>
  );
};

export default App;
