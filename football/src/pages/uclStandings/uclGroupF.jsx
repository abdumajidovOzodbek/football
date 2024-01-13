import React, { useContext, useState } from 'react';
import { context } from '../../components/context/context';
import './UclStandings.css'
const UclGroupF = () => {
  const {uclF}=useContext(context)
  return(
    <>
    {uclF.map((e) => {
      return (
        <div key={e.team_key} className="start">
          <ul className="lists">
            <li className="item">
              <div className="group">
                <h4>{e.standing_team}</h4>
              </div>
              <div className="result1">
                <h2>{e.standing_P}</h2>
                <h2>{e.standing_W}</h2>
                <h2>{e.standing_D}</h2>
                <h2>{e.standing_L}</h2>
                <h2>{e.standing_GD}</h2>
                <h2>{e.standing_PTS}</h2>
              </div>
            </li>
          </ul>
        </div>
      );
    })}
  </>
    )
  }

export default UclGroupF;
