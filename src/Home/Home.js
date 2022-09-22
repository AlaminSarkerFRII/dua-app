import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import MainDua from "../components/Main-Dua/MainDua";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [duas, setDuas] = useState([]);
  const [startID,setStartID] = useState(1)
  const [endID,setEndID] = useState(7)

  //Category
  useEffect(() => {
    axios.get("/dua-main/category").then((res) => setCategory(res.data.result));
    axios
      .get("/dua-main/sub-category")
      .then((res) => setSubCategory(res.data.result));
  }, []);

  useEffect(() => {
    axios.get(`/dua-main/dua/${startID}`)
    .then(res=>setDuas(res.data.result));

  }, [startID,endID]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="h-screen overflow-auto">
        <Category 
        category={category}
        subCategory={subCategory}
        setStartID = {setStartID}
        setEndID={setEndID}
        duas={duas}
        />
      </div>
      <div className="col-span-2 h-screen overflow-auto">
        <MainDua duas={duas} />
      </div>
    </div>
  );
};

export default Home;
