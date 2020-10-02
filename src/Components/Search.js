import React from 'react';
import searchImg from '../img/search.png';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Search results: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="search">
            <form onSubmit={this.handleSubmit}>
                {/* <label> */}
                  <div className="searchField">
                    <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Поиск"
                    />
                    <div className="searchImg" onClick={this.handleSubmit}>
                      <img src={searchImg} alt="searchImg"></img>
                    </div>
                  </div>
                {/* </label> */}
            {/* <input type="submit" value="Submit" /> */}
            </form>
        </div>
      );
    }
  }
  export default Search;