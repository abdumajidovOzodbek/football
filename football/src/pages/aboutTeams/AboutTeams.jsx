import React from "react";
import './AboutTeams.css'
const AboutTeams = ({ country_name, country_iso2, country_logo }) => {
    function info(){
        let url = `https://en.wikipedia.org/wiki/${country_name}_national_football_team`
			window.open(url, '_self')
    }
  return (
    <div className="gien">
      <ul onClick={info} className="list">
        <img className="logo-img" src={country_logo} alt={country_name} />
        <li className="list-item1">{country_name}</li>
        <li className="list-item2">{country_iso2}</li>
      </ul>
    </div>
  );
};

export default AboutTeams;
