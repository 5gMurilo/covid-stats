import React from "react";

const Title = (props) => {
  return (
    <>
      <img src={props.photo} className="h-12 self-center" alt="Figura" />
      <span className="font-bold text-xl p-0.5 self-center h-auto  leading-none m-2 object-fill tracking-wide text-white">
        {props.mainTitle}
      </span>
    </>
  );
};

export default Title;
