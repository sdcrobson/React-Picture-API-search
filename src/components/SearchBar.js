import React from "react";

if (module.hot) {
  module.hot.accept();
}

//class componen -> has a state and render function!
class SearchBar extends React.Component {
  //function to handle user input to be sent to the API
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    //multiline jsx - remember to remove the ; from the end of the div tag!  it wont work!
    return (
      //using semantic ui classNames to style the searchbar
      //this.onInputChange is left without() - saves being automatically called everytime its render
      // want it to be called sometime in the future - passing reference to the element
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
