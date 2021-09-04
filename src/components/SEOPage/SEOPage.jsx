import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const SEOPage = ({ component: Component, title, ...props }) => (
  <>
    <Helmet>
      <title>{`${title} | React Material-UI Dictionary`}</title>
    </Helmet>
    <Component {...props} />
  </>
);

SEOPage.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
  props: PropTypes.any,
};

export default SEOPage;
