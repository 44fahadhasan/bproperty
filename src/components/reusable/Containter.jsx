import PropTypes from "prop-types";

const Containter = ({ children, style }) => {
  return (
    <section className={`container w-[90%] mx-auto ${style}`}>
      {children}
    </section>
  );
};

Containter.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
};

export default Containter;
