import { useSelector, useDispatch } from "react-redux/es/exports";
import DetailsHeader from "../common/DetailsHeader";
import { setCategory } from "../../../reducers/categories/categoriesSlice";



// import React from "react";
// import { connect } from "react-redux";

// import { fetchPlace } from "../../../../reducers/places";
// import { setCategory } from "../../../../reducers/categories";

// import { DetailsItem } from "../common/DetailsItem";
// import { createStringFromList } from "../../../../reducers/commonFunctions";

// import FeaturedMapContainer from "./FeaturedMapContainer";
// import { getFullFlagImage } from "../../../utils/ImageDetils";

import "./HomeFeaturedCity.css";

const HomeFeaturedCity = () => {
    const dispatch = useDispatch();
  const fetching = useSelector((state) => state.cities.fetching);
  const cities = useSelector((state) => state.cities.items);
  const category = useSelector((state) =>
    state.categories.items.find((c) => c.name === "Cities")
  );

  const handleItemClick = (category, id) => {
    dispatch(setCategory(category));

    //this.props.setCategory(category);
    //this.props.fetchPlace(id);
  };

  if (fetching) {
    return <div className="loading">LOADING...</div>;
  }

  const index = Math.floor(Math.random() * cities.length + 1);
  const city = cities[index];
  const flag = city //&& getFullFlagImage(place.flags[0]);

  return (
    <div className="home-featured-city">
      <DetailsHeader label="Featured City" icon={category.icon} />

      {city && (
        <div
          className="featured-city-header"
          onClick={() => handleItemClick(category, city.id)}
        >
          <div>
            <img src={flag} className="image" alt={city.name} />
          </div>
          <div className="details">
            <div className="title">{city.name}</div>
            <div className="subtitle">{city.region}</div>
          </div>
        </div>
      )}

      {city && (
        <div className="map">
            MAP
          {/* <FeaturedMapContainer place={place} /> */}
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
