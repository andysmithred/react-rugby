import { useDispatch } from "react-redux";
import { fetchRegion, setRegionsView } from "../../../../reducers/regions/regionsSlice";
import Link from "../../common/links/Link";

import "./CityLinks.css";


const CityLinks = ({ city }) => {
    const dispatch = useDispatch();

    let items = [];
    
    const handleRegionClicked = (id) => {
        dispatch(fetchRegion(id));
        dispatch(setRegionsView("details"));
    }

    items.push(
        <Link 
            id={city.regionId} 
            categoryName="Regions" 
            title={city.region.name} 
            onItemClick={handleRegionClicked} 
        />
    );

    return <div className="mt-1 pb-1 city-links">
        {items}
    </div>;
}

export default CityLinks;