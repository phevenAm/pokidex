import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      weight {
        maximum
      }
      attacks {
        fast {
          name
          damage
        }
        special {
          name
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;
