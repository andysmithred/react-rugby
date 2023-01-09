import { useSelector } from "react-redux";
import HomeContent from "./home/HomeContent";
import CitiesContent from "./cities/CitiesContent";
import CoachesContent from "./coaches/CoachesContent";
import CompetitionsContent from "./competitions/CompetitionsContent";
import CountriesContent from "./countries/CountriesContent";
import MatchesContent from "./matches/MatchesContent";
import MatchLineUpsContent from "./matchLineUps/MatchLineUpsContent";
import MatchPointsContent from "./matchPoints/MatchPointsContent";
import MatchPositionsContent from "./matchPositions/MatchPositionsContent";
import MatchTeamsContent from "./matchTeams/MatchTeamsContent";
import PenaltyTriesContent from "./penaltyTries/PenaltyTriesContent";
import PlayersContent from "./players/PlayersContent";
import PointTypesContent from "./pointTypes/PointTypesContent";
import PositionsContent from "./positions/PositionsContent";
import RefereesContent from "./referees/RefereesContent";
import RegionsContent from "./regions/RegionsContent";
import SchoolsContent from "./schools/SchoolsContent";
import SchoolTypesContent from "./schoolTypes/SchoolTypesContent";
import SeasonPointsContent from "./seasonPoints/SeasonPointsContent";
import SeasonsContent from "./seasons/SeasonsContent";
import StadiaContent from "./stadia/StadiaContent";
import TeamCountriesContent from "./teamCountries/TeamCountriesContent";
import TeamPlayersContent from "./teamPlayers/TeamPlayersContent";
import TeamsContent from "./teams/TeamsContent";

import "./Content.css";


const Content = () => {
  const category = useSelector((state) => state.categories.selected);

  if (!category) {
    return <div>loading</div>;
  }

  return (
    <div className="d-flex flex-column flex-fill content">
      {category.name === "Home" && <HomeContent />}
      {category.name === "Cities" && <CitiesContent />}
      {category.name === "Coaches" && <CoachesContent />}
      {category.name === "Competitions" && <CompetitionsContent />}
      {category.name === "Countries" && <CountriesContent />}
      {category.name === "Matches" && <MatchesContent />}
      {category.name === "MatchLineUps" && <MatchLineUpsContent />}
      {category.name === "MatchPoints" && <MatchPointsContent />}
      {category.name === "MatchPositions" && <MatchPositionsContent />}
      {category.name === "MatchTeams" && <MatchTeamsContent />}
      {category.name === "PenaltyTries" && <PenaltyTriesContent />}
      {category.name === "Players" && <PlayersContent />}
      {category.name === "PointTypes" && <PointTypesContent />}
      {category.name === "Positions" && <PositionsContent />}
      {category.name === "Referees" && <RefereesContent />}
      {category.name === "Regions" && <RegionsContent />}
      {category.name === "Schools" && <SchoolsContent />}
      {category.name === "SchoolTypes" && <SchoolTypesContent />}
      {category.name === "SeasonPoints" && <SeasonPointsContent />}
      {category.name === "Seasons" && <SeasonsContent />}
      {category.name === "Stadia" && <StadiaContent />}
      {category.name === "TeamCountries" && <TeamCountriesContent />}
      {category.name === "TeamPlayers" && <TeamPlayersContent />}
      {category.name === "Teams" && <TeamsContent />}
    </div>
  );
};

export default Content;
