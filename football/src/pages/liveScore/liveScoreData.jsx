import React from "react";
import { useContext } from "react";
import { context } from "../../components/context/context";
import LiveScore from "./LiveScore";

const LiveScoreData = () => {
  const {live}=useContext(context)
  return (
    <div>
      {live.map((e) => {
        return(
        <LiveScore key={e.home_team_key} {...e} />
       
        )
      })}
    </div>
  );
};

export default LiveScoreData;
