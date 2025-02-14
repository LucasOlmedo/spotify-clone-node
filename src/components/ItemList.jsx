import SingleItem from "./SingleItem.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ title, size, items, path, itemPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <Link className="item-list__link" to={path}>Ver todos</Link>
      </div>

      <div className="item-list__container">
        {
          items
            .slice(0, size)
            .map((item, index) => (
              <SingleItem key={`${title}-${index}`} { ...item } itemPath={itemPath} />
            ))
        }
      </div>
    </div>
  )
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
  items: PropTypes.array,
  path: PropTypes.string,
  itemPath: PropTypes.string,
};

ItemList.defaultProps = {
  size: 0,
  items: [],
  path: '/',
  itemPath: '/',
};

export default ItemList;
