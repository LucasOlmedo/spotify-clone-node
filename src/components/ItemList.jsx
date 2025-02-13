import SingleItem from "./SingleItem.jsx";
import PropTypes from "prop-types";

const ItemList = ({ title, items }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <a className="item-list__link" href="#">Ver todos</a>
      </div>

      <div className="item-list__container">
        {Array(items).fill().map((_, index) => (
          <SingleItem key={`${title}-${index}`} />
        ))}
      </div>
    </div>
  )
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number,
};

ItemList.defaultProps = {
  items: 0,
};

export default ItemList;
