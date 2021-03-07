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
    evolutions,
  } = pokemon;
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{name}</p>
      </div>
      <div className="pokemon__meta">max weight, hp and cp</div>
      <div className="pokemon__image">image</div>
      <div className="pokemon__attacks">
        <div className="pokemon__attacksFast">fast attacks name and dmg</div>
        <div className="pokemon__attacksSpecial">special attacks and dmg</div>
      </div>
    </div>
  );
};

export default Pokemon;
