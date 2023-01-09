import { useDispatch, useSelector } from "react-redux/es/exports";

import { addPlayer, setView } from "../../../../reducers/players/playersSlice";
import ItemsHeader from "../../common/ItemsHeader";
import AddPlayer from "../forms/AddPlayer";

const PlayersNewView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Players")
  );

  const handleAddItem = (item) => {
    dispatch(addPlayer(item));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index"]}
        category={category}
        setView={setView}
      />
      <AddPlayer onAdd={handleAddItem} />
    </div>
  );
};

export default PlayersNewView;
