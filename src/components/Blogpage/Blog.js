import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <img
          className="cover-img"
          src="images/image-omelette.jpeg"
          alt="Food Omelette"
        />
        {/* Header Section starts */}
        <div className="header-section">
          <h1 className="blog-title">Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        {/* Header section ends */}

        {/* preparation time section starts here */}
        <div className="prep-main">
          <h1 className="prep-heading">Preparation Time</h1>
          <ul>
            <li>
              <span className="strong">Total:</span> Approximately 10 minutes
            </li>
            <li>
              <span className="strong">Preparation:</span>5 minutes
            </li>
            <li>
              <span className="strong">Cooking:</span> 5 Minutes
            </li>
          </ul>
        </div>
        {/* prep section ends here */}

        {/* Ingredients start here */}
        <div className="ingredients">
          <h1>Ingredients</h1>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <hr />
        </div>
        {/*  ingredients end here */}
        {/* Instructions Section Starts Here*/}
        <div className="instructions">
          <h1>Instructions</h1>
          <ol>
            <li>
              <span>Beat the eggs:</span> In a bowl, beat the ggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan:</span> Place a non-stick frying pan over
              medium heat and add butter or oil.{" "}
            </li>
            <li>
              <span>Cook the omelette:</span>Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <span>Add fillings(optional):</span> When the eggs begin to set at
              the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li>
              <span>Fold and serve:</span> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.{" "}
            </li>
            <li>
              <span>Enjoy:</span> Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </div>
        <hr />
        {/*   instructions end here */}
        {/* Nutrition starts here */}
        <div className="nutrition">
          <h1> Nutrition </h1>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.{" "}
          </p>
          <table class="table">
            <thead class="thead-light"></thead>
            <tbody>
              <tr>
                <td>Calories</td>
                <td className="metric">277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td className="metric">0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td className="metric"> 20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td className="metric">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blog;
