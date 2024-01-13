import React, { createContext, useState, useEffect } from 'react';

const context = createContext()

const Context = ({ children }) => {
  const apiKey =
    "a654637b17c26da7d0286185295f351b94ba67c80c44ea9a618a79855914f7c4";
  const [teams, setTeams] = useState([]);
  const [live, setLive] = useState([]);
  const [ucl, setUcl] = useState([]);
  const [uclB, setUclB] = useState([]);
  const [uclC, setUclC] = useState([]);
  const [uclD, setUclD] = useState([]);
  const [uclE, setUclE] = useState([]);
  const [uclF, setUclF] = useState([]);
  const [uclG, setUclG] = useState([]);
  const [uclH, setUclH] = useState([]);
  const [uzb, setUzb] = useState([]);
  const [ip, setIp] = useState([]);

  const get = async () => {
    let res = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=${apiKey}`
    );

    res = await res.json();

    setTeams(res.result);
  };
  const liveGet = async () => {
    let res = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`
    );
    res = await res.json();
    setLive(res.result);
  };
  const uclGet = async () => {
    let res = await fetch(
      `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=3&APIkey=${apiKey}`
    );
    res = await res.json();

    let group = res.result.total.filter((e) => e.league_round === "Group A");
    setUcl(group);
    let groupB = res.result.total.filter((e) => e.league_round === "Group B");
    setUclB(groupB);
    let groupC = res.result.total.filter((e) => e.league_round === "Group C");
    setUclC(groupC);
    let groupD = res.result.total.filter((e) => e.league_round === "Group D");
    setUclD(groupD);
    let groupE = res.result.total.filter((e) => e.league_round === "Group E");
    setUclE(groupE);
    let groupF = res.result.total.filter((e) => e.league_round === "Group F");
    setUclF(groupF);
    let groupG = res.result.total.filter((e) => e.league_round === "Group G");
    setUclG(groupG);
    let groupH = res.result.total.filter((e) => e.league_round === "Group H");
    setUclH(groupH);
  };
  const uzbSuper = async () => {
    let res = await fetch(
      `https://allsportsapi.com/api/football/?&met=Standings&leagueId=545&APIkey=${apiKey}`
    );

    res = await res.json();
    console.log(res);
    setUzb(res.result.total);
  };
  useEffect(() => {
    get();
    uzbSuper();
    liveGet();
    uclGet();
  }, []);

  return (
    <context.Provider value={{ ucl, uclB, uclC, uclD, uclE, uclF, uclG, uclH, uzb, live, teams }}>
      <context.Consumer>
        {
          () => children
        }
      </context.Consumer>
    </context.Provider>
  );
}
export { context }
export default Context;
