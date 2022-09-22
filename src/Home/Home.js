import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import MainDua from "../components/Main-Dua/MainDua";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [duas, setDuas] = useState([]);
  const [id,setId] = useState(1)

  //Category
  useEffect(() => {
    axios.get("/dua-main/category").then((res) => setCategory(res.data.result));
    axios
      .get("/dua-main/sub-category")
      .then((res) => setSubCategory(res.data.result));
  }, []);

  useEffect(() => {
    axios.get(`/dua-main/dua/${id}`)
    .then(res=>setDuas(res.data.result))
  }, [id]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Category 
        category={category}
        subCategory={subCategory}
        />
      </div>
      <div className="col-span-2">
        <MainDua />
      </div>
    </div>
  );
};

export default Home;
