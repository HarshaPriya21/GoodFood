import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  { id: 1, title: 'Spaghetti Carbonara', description: 'Creamy pasta with bacon and cheese' },
  { id: 2, title: 'Chicken Tikka Masala', description: 'Spicy Indian chicken curry' },
  { id: 3, title: 'Vegetable Stir Fry', description: 'Crispy veggies in soy sauce' },
  { id: 4, title: 'Fluffy Pancakes', description: 'Light, fluffy pancakes perfect for breakfast' },
  { id: 5, title: 'Beef Tacos', description: 'Tasty Mexican beef tacos with fresh toppings' },
  { id: 6, title: 'Creamy Tomato Soup', description: 'A warm and comforting tomato soup' }
];

function RecipeList() {
  return (
    <div className="recipe-list">
      <h3>Our Recipes</h3>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h4><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h4>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;