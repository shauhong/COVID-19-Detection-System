import React, { useState, useEffect } from "react";

function Statistics() {
  const container = {
    display: "flex",
    height: "90vh",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  };

  const innerContainer = {
    display: "flex",
    height: "100%",
    width: "800px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 100
  };

  const columns = {
    columnCount: 3,
    columnGap: "40px",
    columnRule: "1px solid lightblue"
  };

  const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 5
  };

  const charts = {
    minHeight: 600,
    minWidth: 800
  };

  const blueCards = {
    background: "#1D5BB8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: 3,
    width: 150,
    height: 80
  };

  const greenCards = {
    background: "#8EC3A7",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: 3,
    width: 150,
    height: 80
  };

  const yellowCards = {
    background: "#F0CB69",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: 3,
    width: 150,
    height: 80
  };

  const redCards = {
    background: "#DC5356",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: 3,
    width: 150,
    height: 80
  };

  const purpleCards = {
    background: "#9F6DAA",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    margin: 3,
    width: 150,
    height: 80
  };

  const [data, setData] = useState("");

  const getDataWithFetch = async () => {
    const response = await fetch(
      "https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true"
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    getDataWithFetch();
  });

  return (
    <div style={container}>
      <div style={innerContainer}>
        <div style={row}>
          <div style={blueCards}>
            Total Cases:
            <h2 style={{ textAlign: "center", marginTop: 5, color: "#fff" }}>
              {data.testedPositive}
            </h2>
          </div>
          <div style={greenCards}>
            Total Recovered:
            <h2 style={{ textAlign: "center", marginTop: 5, color: "#fff" }}>
              {data.recovered}
            </h2>
          </div>
          <div style={yellowCards}>
            Total Active Cases:
            <h2 style={{ textAlign: "center", marginTop: 5, color: "#fff" }}>
              {data.activeCases}
            </h2>
          </div>
          <div style={redCards}>
            Total Death Cases:
            <h2 style={{ textAlign: "center", marginTop: 5, color: "#fff" }}>
              {data.deceased}
            </h2>
          </div>
          <div style={purpleCards}>
            Total ICU:
            <h2 style={{ textAlign: "center", marginTop: 5, color: "#fff" }}>
              {data.inICU}
            </h2>
          </div>
        </div>
        <p
          style={{
            fontSize: "14px",
            color: "rgb(170, 170, 170)",
            marginBottom: 15
          }}
        >
          Source: Health Ministry • Active cases means total confirmed cases
          minus deaths and recoveries.
        </p>
        <div>
          <embed
            style={charts}
            src="https://flo.uri.sh/visualisation/1985060/embed"
          ></embed>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
