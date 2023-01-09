import { useDispatch, useSelector } from "react-redux";
import {
  deletePlayer,
  setView,
} from "../../../../reducers/players/playersSlice";
import ItemsHeader from "../../common/ItemsHeader";
import DeletePlayer from "../forms/DeletePlayer";


const PlayersDeleteView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Players")
  );

  const handleDelete = (id) => {
    dispatch(deletePlayer(id));
  };

  const handleCancel = () => {
    dispatch(setView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Edit", "Delete"]}
        category={category}
        setView={setView}
      />
      <DeletePlayer onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default PlayersDeleteView;
