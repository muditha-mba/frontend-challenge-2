import "./ViewWrapper.css";
import PropTypes from "prop-types";

const ViewWrapper = ({ children }) => {
  return <div className="viewWrapper">{children}</div>;
};

ViewWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewWrapper;
