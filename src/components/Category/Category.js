import React from "react";

const Category = ({ category, subCategory, setEndID, setStartID, duas }) => {
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
                      <li
                        onClick={() => setStartID(subItem.subcat_id)}
                        tabIndex={0}
                        className="collapse"
                      >
                        <div className="collapse-title text-xl font-medium">
                          {subItem.subcat_name_en}
                        </div>
                        <div className="collapse-content">
                          <ul tabIndex={0} className="list-none my-4">
                            {duas.map((dua) => {
                              if (subItem.subcat_id === dua.subcat_id) {
                                return (
                                  //   <li className="my-2"></li>
                                  <li className="my-2 px-1 text-bold">{dua.dua_name_en}</li>
                                );
                              }
                            })}
                          </ul>
                        </div>
                      </li>

                      //   <li className="my-2"></li>
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
