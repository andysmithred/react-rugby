import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/teamCountries/teamCountriesSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const TeamCountriesIndexView = () => {
  const items = useSelector((state) => state.teamCountries.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "TeamCountries")
  );

  const colDefs = [
    { headerName: "Id", field: "teamCountryId" },
    { headerName: "Team", field: "team.name" },
    { headerName: "Country", field: "country.name" }
  ];

  return (
    <div className="d-flex flex-column content-view">
      <ItemsHeader
        menuItems={["Details", "New"]}
        category={category}
        setView={setView}
      />
      <ItemsGrid items={items} columnDefs={colDefs} />
    </div>
  );
};

export default TeamCountriesIndexView;
