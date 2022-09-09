import { useSelector, useDispatch } from "react-redux/es/exports";
import DetailsHeader from "../../common/DetailsHeader";
import DetailsItem from "../../common/DetailsItem";
// import HomeFeaturedMap from "./HomeFeaturedMap";
import { setCategory } from "../../../../reducers/categories/categoriesSlice";
import { getFullFlagImage } from "../../../../utils/ImageDetails";

// import { fetchPlace } from "../../../../reducers/places";

// import { DetailsItem } from "../common/DetailsItem";
// import { createStringFromList } from "../../../../reducers/commonFunctions";

// import FeaturedMapContainer from "./FeaturedMapContainer";
// import { getFullFlagImage } from "../../../utils/ImageDetils";

import "./HomeFeaturedCity.css";
import { fetchCity } from "../../../../reducers/cities/citiesSlice";

const HomeFeaturedCity = () => {
  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.cities.fetching);
  const cities = useSelector((state) => state.cities.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Cities")
  );

  const handleItemClick = (category, id) => {
    dispatch(fetchCity(id));
    dispatch(setCategory(category));
  };

  if (fetching) {
    return <div className="loading">LOADING...</div>;
  }

  const index = Math.floor(Math.random() * cities.length + 1);
  const city = cities[index];
  const flag = city && getFullFlagImage(city.region.flagUrl);

  return (
    <div className="mt-1 me-1 home-featured-city">
      <DetailsHeader label="Featured City" icon={category.icon} />

      {city && (
        <div
          className="d-flex flex-row my-1 ps-1 featured-city-header"
          onClick={() => handleItemClick(category, city.cityId)}
        >
          <img src={flag} className="my-2 me-2 image" alt={city.name} />
          <div className="d-flex flex-column ps-1">
            <div className="title">{city.name}</div>
            <div className="subtitle">{city.region.name}</div>
          </div>
        </div>
      )}

      {city && (
        <div className="map">
          {/* <HomeFeaturedMap place={city} /> */}
          MAP
        </div>
      )}

      {city && (
        <div className="d-flex flex-row flex-wrap details">
          <div className="half">
            <DetailsItem label="Id" value={city.cityId} />
          </div>
          <div className="half">
            <DetailsItem label="Region" value={city.region.name} />
          </div>
          <div className="half">
            <DetailsItem
              label="Capital"
              value={city.isCapital ? "Yes" : "No"}
            />
          </div>
          <div className="half">
            <DetailsItem label="Population" value={city.population} />
          </div>
          <div className="half">
            <DetailsItem
              className="half"
              label="Latitude"
              value={city.latitude}
            />
          </div>
          <div className="half">
            <DetailsItem
              className="half"
              label="Longitude"
              value={city.longitude}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeFeaturedCity;

// class HomeFeaturedPlace extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleItemClick = this.handleItemClick.bind(this);
//   }

//   handleItemClick = (category, id) => {
//     this.props.setCategory(category);
//     this.props.fetchPlace(id);
//   };

//   render() {
//     const { fetching, places, category } = this.props;

//     if (fetching) {
//       return <div className="loading">LOADING...</div>;
//     }

//     const index = Math.floor(Math.random() * this.props.places.length + 1);
//     const place = places[index];
//     const flag = place && getFullFlagImage(place.flags[0]);
//     const territories = place && createStringFromList(place.territories);

//     return (
//       <div className="HomeFeaturedPlace">
//         <DetailsHeader label="Featured Place" icon={category.icon} />

//         {place && (
//           <div
//             className="FeaturedPlaceHeader"
//             onClick={() => this.handleItemClick(category, place.id)}
//           >
//             <div>
//               <img src={flag} className="image" alt={place.name} />
//             </div>
//             <div className="details">
//               <div className="title">{place.name}</div>
//               <div className="subtitle">{place.territories}</div>
//             </div>
//           </div>
//         )}

//         {place && (
//           <div className="map">
//             <FeaturedMapContainer place={place} />
//           </div>
//         )}

//         {place && (
//           <div className="details">
//             <div className="half">
//               <DetailsItem label="Local Name" value={place.localName} />
//             </div>
//             <div className="half">
//               <DetailsItem
//                 className="half"
//                 label="Territories"
//                 value={territories}
//               />
//             </div>
//             <div className="half">
//               <DetailsItem
//                 className="half"
//                 label="Latitude"
//                 value={place.latitudeDegrees}
//               />
//             </div>
//             <div className="half">
//               <DetailsItem
//                 className="half"
//                 label="Longitude"
//                 value={place.longitudeDegrees}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchPlace: (id) => dispatch(fetchPlace(id)),
//     setCategory: (category) => dispatch(setCategory(category)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomeFeaturedPlace);
