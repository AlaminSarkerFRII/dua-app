import React from "react";

const Category = ({ category, subCategory, setEndID, setStartID }) => {
  return (
    <div>
      <h2 className="bg-green-400 text-white p-1 text-center rounded-t-lg ">
        Category
      </h2>
      <ul className="list-none my-4">
        {category.map((item) => (
          //   <li className="my-2"></li>
          <li className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {item.cat_name_en}
            </div>
            <div className="collapse-content">
              <ul className="list-none my-4">
                {subCategory.map((subItem) => {
                  if (item.cat_id === subItem.cat_id) {
                    return (
                      //   <li className="my-2"></li>
                      <li className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                          {subItem.subcat_name_en}
                        </div>
                        <div className="collapse-content">
                          <p>Hello</p>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
