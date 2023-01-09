import { useDispatch, useSelector } from "react-redux/es/exports";
import { updatePlayer, setView } from "../../../../reducers/players/playersSlice";
import ItemsHeader from "../../common/ItemsHeader";
import EditPlayer from "../forms/EditPlayer";


const PlayersEditView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Players")
  );

  const handleEdit = (updated) => {
    console.log(updated);
    dispatch(updatePlayer(updated));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setView}
      />
      <EditPlayer onEdit={handleEdit} />
    </div>
  );
};

export default PlayersEditView;
