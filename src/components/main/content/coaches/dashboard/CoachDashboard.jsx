import { useSelector } from "react-redux";
// import SchoolDetails from "./SchoolDetails";
// import SchoolHeader from "./SchoolHeader";

import CoachHeader from "./CoachHeader";
import CoachDetails from "./CoachDetails";
import CoachLinks from "./CoachLinks";

import "./CoachDashboard.css";

const CoachDashboard = () => {
  const fetching = useSelector((state) => state.coaches.fetchingItem);
  const item = useSelector((state) => state.coaches.item);

  if (fetching) {
    return <div>LOADING...</div>;
  }

  if (item) {
    return (
      <div className="pt-1 ps-1 coach-dashboard">
        <CoachHeader item={item} />
        <CoachLinks coach={item} />   
        <div className="row">
          <div className="col-lg-4">
            <CoachDetails item={item} />
            {/* <CityDetails city={city} /> */}
          </div>
          {/* <div className="col-lg-1" style={{"border": "solid 2px red"}}></div> */}
        </div>
      </div>
    );
  } else {
    return <div className="coach-dashboard">No coach found</div>;
  }
};

export default CoachDashboard;
