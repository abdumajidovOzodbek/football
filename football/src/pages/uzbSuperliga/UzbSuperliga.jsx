import React from 'react';
import { useContext } from 'react';
import { context } from '../../components/context/context';

const UzbSuperliga = () => {
    const {uzb}=useContext(context)
    console.log(uzb);
    return(
        <>
        {uzb.map((e) => {
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

export default UzbSuperliga;
