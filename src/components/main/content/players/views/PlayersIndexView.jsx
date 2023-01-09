import { useSelector } from "react-redux";
import { setView } from "../../../../reducers/players/playersSlice";

import ItemsHeader from "../../common/ItemsHeader";
import ItemsGrid from "../../common/ItemsGrid";

import "../../Content.css";

const PlayersIndexView = () => {
  const items = useSelector((state) => state.players.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Players")
  );

  const colDefs = [
    { field: "playerId" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "dateOfBirth" },
    { field: "dateOfDeath" },
    { field: "city.name" },
    { field: "springbokNo" },
    { field: "weight" },
    { field: "height" },

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

export default PlayersIndexView;
