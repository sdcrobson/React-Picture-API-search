import React from "react";

if (module.hot) {
  module.hot.accept();
}

//class component -> has a state and render function!
class SearchBar extends React.Component {
  state = { term: "" };

  /*function to handle user input to be sent to the API
  onInputChange(event) {
    console.log(event.target.value);
  }
  */
  /*handles the form submission event -> takes the event
    prevents default behaviour from happening(refreshing)
    then takes the prop object and invokes the onsubmit -> App.js handles this
  */
  onFormSubmit = (event) => {
    //stops browser from refreshing the page
    event.preventDefault();
    //fixing the this problem is undefined
    //console.log(this.state.term);
    //reference to object that was passed in on line 36
    this.props.onSubmit(this.state.term);
  };

  /*
    can also use // arrow function used instead of created seperate function
    onChange={(e) => console.log(e.target.value)}
  */
  render() {
    //multiline jsx - remember to remove the ; from the end of the div tag!  it wont work!
    return (
      /*
        using semantic ui classNames to style the searchbar
        this.onInputChange is left without() - saves being automatically called everytime its render
        want it to be called sometime in the future - passing reference to the element
        onChange import property used to detect user changes text input - Also onClick and onSubmit
      */
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
