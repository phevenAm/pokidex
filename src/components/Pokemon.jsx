import React from "react";

const Pokemon = ({ pokemon }) => {
  // console.log(pokemon);
  const {
    name,
    image,
    maxHP,
    maxCP,
    weight: { maximum: maxWeight },
    attacks: {
      fast: [{ name: fastAttackName, damage: fastAttackDamage }],
      special,
      // special: [{ name: specialAttackName, damage: specialAttackDamage }],
    },
    evolutions,
  } = pokemon;
  console.log(special);
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{name}</p>
      </div>
      <div className="pokemon__meta">
        <span className="pokemon__metaSpan">{maxHP}HP</span>
        <span className="pokemon__metaSpan">{maxCP}CP</span>
      </div>
      <div className="pokemon__image">
        <img src={image} alt={name} />
      </div>
      <div className="pokemon__attacks">
        <div className="pokemon__attacksFast">
          <p>{fastAttackName}</p>
          <p> {fastAttackDamage}</p>
        </div>

        {pokemon?.attacks?.special.map(
          ({ name: specialAttackName, damage: specialAttackDamage }) => {
            return (
              <div className="pokemon__attacksSpecial" key={specialAttackName}>
                <p> {specialAttackName}</p>
                <p> {specialAttackDamage}</p>
              </div>
            );
          }
        )}
        {/* <p>{specialAttackName}</p> */}
        {/* <p> SPECIAL: {specialAttackDamage}</p> */}
      </div>
    </div>
  );
};

export default Pokemon;
