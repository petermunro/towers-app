import PropTypes from "prop-types";

export default function Cell({ children }) {
  return <div className="cell">{children}</div>;
}

Cell.propTypes = {
  children: PropTypes.node,
};
