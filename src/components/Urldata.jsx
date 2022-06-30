import React from "react";
import useFetch from "../hooks/useFetch";

const Urldata = () => {
  const url = "https://api.github.com/users";
  const { loading, error, data } = useFetch(url);
  return (
    <>
      <h1 style={{ textAlign: "center", borderBottom: "1px solid" }}>
        Github Users
      </h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong..</h2>}
        {data?.map((item) => (
          <div key={item.id}>
            <img src={item.avatar_url} alt="" width="250px" />
            <h1>{item.login}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Urldata;
