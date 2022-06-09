import "./ViewWrapper.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ViewWrapper = ({ children }) => {
  const { isDarkMode } = useSelector((state) => state.app);
  return (
    <div dark={isDarkMode.toString()} className="viewWrapper">
      {children}
    </div>
  );
};

ViewWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewWrapper;
