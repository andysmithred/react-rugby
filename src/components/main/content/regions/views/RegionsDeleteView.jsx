import { useDispatch, useSelector } from "react-redux";
import { 
  deleteRegion, 
  setRegionsView 
} from "../../../../reducers/regions/regionsSlice";
import ItemsHeader from "../../common/ItemsHeader";
import DeleteRegion from "../forms/DeleteRegion";


const RegionsDeleteView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Regions")
  );

  const handleDelete = (id) => {
    dispatch(deleteRegion(id));
  };

  const handleCancel = () => {
    dispatch(setRegionsView("details"));
  };

  return (
    <div className="d-flex flex-column">
      <ItemsHeader
        menuItems={["Index", "Details"]}
        category={category}
        setView={setRegionsView}
      />
      <DeleteRegion onDelete={handleDelete} onCancel={handleCancel} />
    </div>
  );
};

export default RegionsDeleteView;
