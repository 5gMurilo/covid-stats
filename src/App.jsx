import React from "react";
import Content from "./components/Content";
import Header from "./components/header";
// import Content from "./components/Content";

function App() {
  return (
    <>
      <Header></Header>

      <main
        className="
        lg:flex w-full flow-root min-h-auto items-center justify-center
        md:flex w-11/12 flow-root items-center justify-center
        sm:flex w-11/12 flow-root items-center justify-center
        "
      >
        <Content />
      </main>
    </>
  );
}

export default App;
