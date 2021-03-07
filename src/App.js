import ApolloClient from "apollo-boost"; //used to target graphql server
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";
import "./Styling/App/App.css";
function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
    //make request to open graphql server
  });
  return (
    <ApolloProvider client={client}>
      <main className="app">
        <h1 className="app__title">Pokidex</h1>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
