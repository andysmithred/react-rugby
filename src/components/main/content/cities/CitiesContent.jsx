import { useSelector } from "react-redux";

// import ListTerritories from "./ListTerritories";
// import TerritoryDashboard from "./TerritoryDashboard";
import ListCities from "./ListCities";
import "../Content.css";

const CitiesContent = () => {
    const fetching = useSelector((state) => state.cities.fetching);

    if (fetching) {
        return <div className="content-main">LOADING...</div>
    }
  return <div className="content-main">
    <ListCities />
  </div>;
};

export default CitiesContent;

// class ContentTerritories extends React.Component {
//   render() {
//     const { fetching } = this.props;

//     if (fetching) {
//       return <div className="ContentMain">LOADING...</div>;
//     }

//     return (
//       <div className="ContentMain">
//         <ListTerritories />
//         <TerritoryDashboard />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     fetching: state.territories.fetchingItems,
//   };
// };

// export default connect(mapStateToProps)(ContentTerritories);
