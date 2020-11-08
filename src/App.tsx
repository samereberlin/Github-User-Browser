import React, { useState } from "react";

import Container from "./components/container";
import Content from "./components/content";
import Header from "./components/header";

function App() {
  const [userLogin, setUserLogin] = useState("");

  const onChangeCB = (userLogin: string) => setUserLogin(userLogin);

  return (
    <Container>
      <Header label="GitHub User Browser" onChange={onChangeCB} />
      <Content userLogin={userLogin} />
    </Container>
  );
}

export default App;
