import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Scenario() {
  const [posts, Setposts] = useState([]);
  const [search, Setsearch] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await res.json();
        Setposts(data)
      } catch (err) {
        console.log("this is my error", err);
      }
    };
    fetchdata();
  }, []);

  const filterposts = posts.filter((podata) =>
    podata.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="m-20 bg-amber-200 w-200 gap-10 rounded-2xl  " >
        <h1 className="p-2" >POST FILTER </h1>
        <input className="border-black border-2  rounded-1xl w-150 justify-center-safe ml-20"
          type="text"
          placeholder="search posts"
          value={search}
          onChange={(ee) => Setsearch(ee.target.value)}
        />

        <ul>
          {filterposts.map((po) => (
            <li key={po.id}>{po.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Scenario;
