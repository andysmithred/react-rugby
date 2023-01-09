import HomeItemCities from "./HomeItemCities";
import HomeItemCoaches from "./HomeItemCoaches";
import HomeItemCompetitions from "./HomeItemCompetitions";
import HomeItemCountries from "./HomeItemCountries";
import HomeItemMatches from "./HomeItemMatches";
import HomeItemMatchLineUps from "./HomeItemMatchLineUps";
import HomeItemMatchPoints from "./HomeItemMatchPoints";
import HomeItemMatchPositions from "./HomeItemMatchPositions";
import HomeItemMatchTeams from "./HomeItemMatchTeams";
import HomeItemPenaltyTries from "./HomeItemPenaltyTries";
import HomeItemPlayers from "./HomeItemPlayers";
import HomeItemPointTypes from "./HomeItemPointTypes";
import HomeItemPositions from "./HomeItemPositions";
import HomeItemReferees from "./HomeItemReferees";
import HomeItemRegions from "./HomeItemRegions";
import HomeItemSchools from "./HomeItemSchools";
import HomeItemSchoolTypes from "./HomeItemSchoolTypes";
import HomeItemSeasonPoints from "./HomeItemSeasonPoints";
import HomeItemSeasons from "./HomeItemSeasons";
import HomeItemStadia from "./HomeItemStadia";
import HomeItemTeamCountries from "./HomeItemTeamCountries";
import HomeItemTeamPlayers from "./HomeItemTeamPlayers";
import HomeItemTeams from "./HomeItemTeams";

import "./HomeItems.css";

const HomeItems = () => {
  return (
    <div className="d-flex flex-row flex-wrap py-1 home-items">
      <HomeItemCities />
      <HomeItemCoaches />
      <HomeItemCompetitions />
      <HomeItemCountries />
      <HomeItemMatches />
      <HomeItemMatchLineUps />
      <HomeItemMatchPoints />
      <HomeItemMatchPositions />
      <HomeItemMatchTeams />
      <HomeItemPenaltyTries />
      <HomeItemPlayers />
      <HomeItemPointTypes />
      <HomeItemPositions />
      <HomeItemReferees />
      <HomeItemRegions />
      <HomeItemSchools />
      <HomeItemSchoolTypes />
      <HomeItemSeasonPoints />
      <HomeItemSeasons />
      <HomeItemStadia />
      <HomeItemTeamCountries />
      <HomeItemTeamPlayers />
      <HomeItemTeams />
    </div>
  );
};

export default HomeItems;
