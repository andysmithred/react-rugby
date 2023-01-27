import RegionLink from "../../regions/dashboard/RegionLink";

import "./CityLinks.css";


const CityLinks = ({ city }) => {

    let items = [];
    items.push(<RegionLink region={city.region} />)

    return <div className="mt-1 pb-1 city-links">
        {items}
    </div>;
}

export default CityLinks;