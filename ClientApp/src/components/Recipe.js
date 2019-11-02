import React, { Component } from 'react';
import './Recipe.css';

export class Recipe extends Component {
  constructor(props){
    super(props);
    this.state = { recipe : props.recipe };
  }

  render () {
    return (
      <div className="recipe">
        <h1 className="title" align="center">{this.state.recipe.label}</h1>
        <img className="image" src={this.state.recipe.image}/>
        <ol>
          {
            this.state.recipe.ingredientLines.map((ingredient, index) => (
            <li className="ingredient" key={index}>{ingredient}</li>
          ))
          }
        </ol>
        <a href={this.state.recipe.url}>Detailed Directions</a>
      </div>
    );
  }
}