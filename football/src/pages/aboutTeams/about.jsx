import React from "react";
import { useContext } from "react";
import { context } from "../../components/context/context";
import AboutTeams from "./AboutTeams";

const About = () => {
  const { teams } = useContext(context);

  return (
    <>
      {teams.map((e) => {
        return <AboutTeams key={e.team_key} {...e} />;
      })}
    </>
  );
};

export default About;
