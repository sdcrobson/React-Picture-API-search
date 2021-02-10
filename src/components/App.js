import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

//parent level in the heirarchy

if (module.hot) {
  module.hot.accept();
}
//functional components (no class)
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    //updating the state to display number of images that are found
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      //classname allows for searchbar to be wrapped in container - also using inline styling for just on css style
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
