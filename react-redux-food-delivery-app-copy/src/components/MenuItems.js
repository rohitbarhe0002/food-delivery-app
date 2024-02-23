/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../actions/categoriesActions';

const MenuItems = () => {
  const dispatch   = useDispatch()
    const {data:categories,isLoading,isFailed} = useSelector((state)=>state.categories)
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="menu-section">
      <h2>Menu Items</h2>
      <div className="menu-content">
        {isFailed && (
          <p className="error-msg">
            Error while loading categories. Please try again.
          </p>
        )}
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          categories.map((category) => {
            const { _id, image, cat_title } = category;
            return (
              <div className="menu" key={_id}>
                <img
                  src={image.url}
                  alt={cat_title}
                  width={image.width}
                  height={image.height}
                  className="img-responsive reveal-inline-block"
                />
                <Link
                  to={`/products?search=${cat_title.toLowerCase()}`}
                  className="menu-link"
                >
                  {cat_title.charAt(0) + cat_title.substring(1)}
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};



export default MenuItems;
