import React from "react";

const Pokemon = ({ pokemon }) => {
  const {
    name,
    image,
    maxHP,
    maxCP,
    weight: { maximum: maxWeight },
    attacks: {
      fast: { name: fastAttackName, damage: fastAttackDamage },
      special: { name: specialAttackName, damage: specialAttackDamage },
    },
    // evolutions,
  } = pokemon;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default Pokemon;
