import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.35) 0px 5px 15px, var(--Cyan) 0 -7px 1px -3px",
        }}
        title="Supervisor"
        desc="Monitors activity to identify project roadblocks"
        icon="/icon-supervisor.svg"
      />
      <div className="card-bundle">
        <Card
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.35) 0px 5px 15px, var(--Red) 0 -7px 1px -3px",
          }}
          title="Team Builder"
          desc="Scans our talent network to create the optimal team for your project"
          icon="/icon-team-builder.svg"
        />
        <Card
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.35) 0px 5px 15px, var(--Orange) 0 -7px 1px -3px",
          }}
          title="Karma"
          desc="Regularly evaluates our talent to ensure quality"
          icon="/icon-karma.svg"
        />
      </div>
      <Card
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.35) 0px 5px 15px, var(--Blue) 0 -7px 1px -3px",
        }}
        title="Calculator"
        desc="Uses data from past projects to provide better delivery estimates"
        icon="/icon-calculator.svg"
      />
    </div>
  );
};

export default Cards;
