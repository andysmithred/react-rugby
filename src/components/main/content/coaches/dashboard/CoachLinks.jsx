import { useDispatch } from "react-redux";
import { fetchCity, setCitiesView } from "../../../../reducers/cities/citiesSlice";
import Link from "../../common/links/Link";

import "./CoachLinks.css";


const CoachLinks = ({ coach }) => {
    const dispatch = useDispatch();

    let items = [];
    
    const handleRegionClicked = (id) => {
        dispatch(fetchCity(id));
        dispatch(setCitiesView("details"));
    }

    items.push(
        <Link 
            id={coach.cityId} 
            categoryName="Cities" 
            title={coach.city.name} 
            onItemClick={handleRegionClicked} 
        />
    );

    return <div className="mt-1 pb-1 coach-links">
        {items}
    </div>;
}

export default CoachLinks;