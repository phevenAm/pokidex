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
        <span>{maxHP}</span>
        <span>{maxCP}</span>
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
                <p>special harm: {specialAttackName}</p>
                <p>special dmg: {specialAttackDamage}</p>
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
