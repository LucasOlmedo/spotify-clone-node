import SingleItem from "./SingleItem.jsx";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, size, items, path, itemPath }) => {

  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const finalItems = isHome ? size : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">Mostrar tudo</Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {
          items
            .slice(0, finalItems)
            .map((item, index) => (
              <SingleItem key={`${title}-${index}`} {...item} itemPath={itemPath} />
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
