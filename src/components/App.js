import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

//parent level in the heirarchy

if (module.hot) {
  module.hot.accept();
}
//functional components (no class)
class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID DyM0i9Hjhq9cIiVu_s0KOT8GeD05cKMQBS558uFIo_M",
      },
    });
    console.log(response.data.results);
  }
  render() {
    return (
      //classname allows for searchbar to be wrapped in container - also using inline styling for just on css style
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
