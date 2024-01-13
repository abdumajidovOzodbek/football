import React from "react";
import './LiveScore.css'
const LiveScore = ({
  home_team_logo,
  event_home_team,
  event_status,
  away_team_logo,
  event_away_team,
  event_final_result
}) => {
  return (
    <div className="score">
      <div className="fall">
        <div className="team1">
          <img src={home_team_logo} alt="" />
          <h2 className="title">{event_home_team}</h2>
        </div>
        <div className="team_score1">
            {event_final_result}
          <h4 className="h4">{event_status}</h4>
        </div>
        <div className="team2">
          <img src={away_team_logo} alt="" />
          <h2 className="title">{event_away_team}</h2>
        </div>
      </div>
    </div>
  );
};

export default LiveScore;
