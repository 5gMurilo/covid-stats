import React from "react";
import Content from "./components/Content";
import Header from "./components/header";
// import Content from "./components/Content";

function App() {
  return (
    <>
      <Header></Header>

      <main className="flex flow-root min-h-auto items-center justify-center">
        <Content />
      </main>
    </>
  );
}

export default App;
