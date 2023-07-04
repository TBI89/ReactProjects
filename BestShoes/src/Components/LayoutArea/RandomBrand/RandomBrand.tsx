import "./RandomBrand.css";
import { useState } from "react";

function RandomBrand(): JSX.Element {
  const randomBrands = [
    { id: 1, brand: "Vans" },
    { id: 2, brand: "Puma" },
    { id: 3, brand: "New Balance" },
    { id: 4, brand: "FILA" },
    { id: 5, brand: "Aasics" }
  ];

   // State variable to hold the randomly selected brand
  const [randomBrand, setRandomBrand] = useState<string | null>(null);


  function displayRandomBrand() {
    const randomIndex = Math.floor(Math.random() * randomBrands.length); // Generate random index
    const selectedBrand = randomBrands[randomIndex].brand; // Get the brand 
    setRandomBrand(selectedBrand); // Update the the state variable
  }

  return (
    <div className="RandomBrand">
      <button onClick={displayRandomBrand}>Brand Roulette!</button>
      {randomBrand && <p>Random Brand: {randomBrand}</p>}
    </div>
  );
}

export default RandomBrand;
