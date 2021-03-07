import ApolloClient from "apollo-boost"; //used to target graphql server
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";
function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
    //make request to open graphql server
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
