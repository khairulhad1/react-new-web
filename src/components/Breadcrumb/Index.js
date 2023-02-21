import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

function Breadcrumb(props) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {props.list?.map?.((item, index) => {
            const arias =
              index === props.list?.length
                ? { "aria-label": "curren-page" }
                : {};
            return (
              <li key={item.url}>
                <Link to={item.name} {...arias}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Breadcrumb.prototype = {
  list: propTypes.array.isRequired,
};

export default Breadcrumb;
