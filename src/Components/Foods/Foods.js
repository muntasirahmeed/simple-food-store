import React, { useEffect, useState } from "react";

const Foods = () => {
    const [foods, setFoods] = useState([]);
    console.log(foods)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Foods;
