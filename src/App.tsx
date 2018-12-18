import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import 'typeface-roboto';
import AppRouter from './AppRouter';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  credentials: 'include'
});

const App = () => (
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>
);

export default App;
