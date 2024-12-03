import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  background-color: #ce2829;
  height: 10rem;
  width: 100vw;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <Container>Teknolojik Yemekler</Container>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orderpizza">
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
