import React, { Component } from 'react';
import { Recipe } from './Recipe';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props){ 
    super(props);
    this.state = { recipes : [], search : "" };
  }

  async getRecipes() {
    let RECIPE_REQUEST = "https://api.edamam.com/search?q="+this.state.search+"&app_id=9cbe3a7aapp_key=14564733183bf245bbb89a88a1e9fec4";
    const response = await fetch(RECIPE_REQUEST);
    response.json().then( (data) => {
      this.setState({recipes : data.hits});
    });
  }

  render () {
    return (
      <div className="home">
        <form className='search-form'>
          <input className="search-bar" type="text" onChange={(e) => { this.state.search = e.target.value }}/>
          <button onClick={() => this.getRecipes()} className="search-btn" type="button">Search</button>
        </form>
        <div className="recipes">
          {this.state.recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe.recipe}/>
            ))}
        </div>
      </div>
    );
  }
}
