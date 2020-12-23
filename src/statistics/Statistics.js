import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { states } from "./states";

function Statistics() {
  const container = {
    display: "flex",
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
    marginTop: 10
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
    minWidth: 800,
    marginTop: 10
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

  const mapTitle = {
    fontSize: "1.6rem",
    lineHeight: "1.2",
    fontWeight: "900"
  };

  const [data, setData] = useState("");

  const renderMarkers = () => {
    var data = [];
    states.map((state, index) => {
      data.push(
        <div
          key={state.index}
          lat={state.lat}
          lng={state.lng}
          style={{
            height: "auto",
            width: "60px",
            padding: 2,
            background: "#F7F2A3",
            borderRadius: "5px",
            textAlign: "center",
            color: "black"
          }}
        >
          {/* <p style={{ textAlign: "center" }}>{state.state}</p> */}
          <div>
            <img
              style={{ width: 15, height: 12, paddingTop: 3 }}
              src={state.abb}
            />
          </div>
          <p style={{ color: "black" }}>{state.state}</p>
          {state.infected}
        </div>
      );
    });
    return data;
  };

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
      <span class="malaysia-state-flag-icon malaysia-state-flag-icon-mlk"></span>
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

        <embed
          style={charts}
          src="https://flo.uri.sh/visualisation/1985060/embed"
        ></embed>
      </div>
      <div style={{ height: 30 }} />
      <div>
        <div id="map" style={{ height: 420, width: 780 }}>
          <h2 style={mapTitle}>
            Malaysia State CONVID-19 Daily Total New Cases
          </h2>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAdWEmhfQyer_yx4JlOAcJxkfjVKN3TcJg"
            }}
            defaultCenter={{
              lat: 3.9743,
              lng: 102.4381
            }}
            defaultZoom={7.5}
          >
            {renderMarkers()}
          </GoogleMapReact>
          <p
            style={{
              fontSize: "14px",
              color: "rgb(170, 170, 170)",
              marginBottom: 15
            }}
          >
            Source: Health Ministry • Cases are updated on 12am daily.
          </p>
          <div style={{ height: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
