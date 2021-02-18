import React from "react";
import Content from "./components/Content";
import Header from "./components/header";
// import Content from "./components/Content";

function App() {
  return (
    <>
      <div className="flex flow-root min-h-screen items-center justify-center">
        <Header />
        {/* conteúdo do site */}

        <Content />
      </div>
    </>
  );
}

export default App;
