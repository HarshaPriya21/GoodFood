import React from 'react';
import { useParams } from 'react-router-dom';

const recipeData = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'Creamy pasta with bacon and cheese',
    ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],
    instructions: [
      'Cook spaghetti according to package instructions.',
      'Fry bacon until crispy, then chop into pieces.',
      'Beat eggs with grated Parmesan and black pepper.',
      'Combine pasta, bacon, and egg mixture, stirring quickly.',
      'Serve with extra cheese and pepper.'
    ]
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    description: 'Spicy Indian chicken curry',
    ingredients: ['Chicken', 'Yogurt', 'Spices', 'Tomato Puree', 'Cream'],
    instructions: [
      'Marinate chicken in yogurt and spices.',
      'Cook chicken in a hot pan until golden.',
      'Make sauce with tomatoes, spices, and cream.',
      'Add chicken and cook for 10 more minutes.',
      'Serve with rice or naan.'
    ]
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    description: 'Crispy veggies in soy sauce',
    ingredients: ['Bell Peppers', 'Carrots', 'Broccoli', 'Soy Sauce', 'Ginger'],
    instructions: [
      'Chop veggies into pieces.',
      'Stir fry in oil until crispy.',
      'Add soy sauce and ginger.',
      'Cook for 2–3 minutes.',
      'Serve with rice or noodles.'
    ]
  },
  {
    id: 4,
    title: 'Fluffy Pancakes',
    description: 'Light, fluffy pancakes perfect for breakfast',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking Powder', 'Sugar', 'Butter'],
    instructions: [
      'Mix flour, baking powder, and sugar in a bowl.',
      'In a separate bowl, whisk milk and eggs.',
      'Combine wet and dry ingredients and stir until smooth.',
      'Heat a non-stick pan and pour batter in small rounds.',
      'Cook until bubbles form, flip, and cook the other side.',
      'Serve with maple syrup or fruit.'
    ]
  },
  {
    id: 5,
    title: 'Beef Tacos',
    description: 'Tasty Mexican beef tacos with fresh toppings',
    ingredients: ['Ground Beef', 'Taco Shells', 'Onion', 'Tomato', 'Lettuce', 'Cheese', 'Taco Seasoning'],
    instructions: [
      'Cook ground beef with taco seasoning and chopped onion.',
      'Chop tomato and lettuce for toppings.',
      'Warm taco shells in a pan or oven.',
      'Fill each shell with beef mixture.',
      'Top with tomato, lettuce, and shredded cheese.',
      'Serve immediately.'
    ]
  },
  {
    id: 6,
    title: 'Creamy Tomato Soup',
    description: 'A warm and comforting tomato soup',
    ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Cream', 'Salt', 'Pepper', 'Olive Oil'],
    instructions: [
      'Sauté chopped onion and garlic in olive oil.',
      'Add chopped tomatoes and cook until soft.',
      'Blend the mixture until smooth.',
      'Return to heat, add cream, salt, and pepper.',
      'Simmer for 5–10 minutes.',
      'Serve hot with croutons or bread.'
    ]
  }
  
  
  
];

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find(r => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </div>
  );
}

export default RecipeDetail;