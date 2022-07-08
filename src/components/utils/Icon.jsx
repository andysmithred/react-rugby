import { IconContext } from "react-icons";
// import { GrHomeRounded } from "react-icons/gr";
import { FaHome, FaCity, FaRegMap, FaMap } from "react-icons/fa";

const Icon = ({ icon, style }) => {
  let reactIcon = null;

  switch (icon) {
    case "home":
      reactIcon = <FaHome />;
      break;
    case "cities":
      reactIcon = <FaCity />;
      break;
    case "regions":
      reactIcon = <FaRegMap />;
      break;
    case "countries":
      reactIcon = <FaMap />;
      break;
    default:
      reactIcon = <FaHome />;
      break;
  }

  return (
    <IconContext.Provider value={style} >
      <div>{reactIcon}</div>
    </IconContext.Provider>
  );
};

export default Icon;
