import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm"


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path="/"> <WelcomePage/> </Route>
      <Route path="/CharacterList"> <CharacterList/> </Route>
    </main>
  );
}
