import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { states } from "./states";
import { connect, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 800
  }
}));

function Statistics(props) {
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
  const [allState, setAllState] = useState([]);
  const [allFacility, setAllFacility] = useState([]);
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const token = useSelector(state => state.auth.token);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderMarkers = () => {
    var data = [];
    states.map((state, index) => {
      if (allState) console.log(allState["Penang"]);

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

  const renderMarkersFacility = () => {
    var data = [];
    // console.log(allState);
    states.map((state, index) => {
      switch (index) {
        case 0:
          var infected = allFacility["Kedah"];
          break;
        case 1:
          var infected = allFacility["Perak"];
          break;
        case 2:
          var infected = allFacility["Perlis"];
          break;
        case 3:
          var infected = allFacility["Penang"];
          break;
        case 4:
          var infected = allFacility["Negeri Sembilan"];
          break;
        case 5:
          var infected = allFacility["Kelantan"];
          break;
        case 6:
          var infected = allFacility["Sabah"];
          break;
        case 7:
          var infected = allFacility["Pahang"];
          break;
        case 8:
          var infected = allFacility["Selangor"];
          break;
        case 9:
          var infected = allFacility["Johor"];
          break;
        case 10:
          var infected = allFacility["Wilayah Persekutuan"];
          break;
        case 11:
          var infected = allFacility["Melaka"];
          break;
        case 12:
          var infected = allFacility["Sarawak"];
          break;
        case 13:
          var infected = allFacility["Terengganu"];
          break;

        default:
          var infected = "0";
          break;
      }

      //console.log(index + typeof index);

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
          {infected}
        </div>
      );
    });
    return data;
  };

  const renderMarkersState = () => {
    var data = [];
    // console.log(allState);
    states.map((state, index) => {
      switch (index) {
        case 0:
          var infected = allState["Kedah"];
          break;
        case 1:
          var infected = allState["Perak"];
          break;
        case 2:
          var infected = allState["Perlis"];
          break;
        case 3:
          var infected = allState["Penang"];
          break;
        case 4:
          var infected = allState["Negeri Sembilan"];
          break;
        case 5:
          var infected = allState["Kelantan"];
          break;
        case 6:
          var infected = allState["Sabah"];
          break;
        case 7:
          var infected = allState["Pahang"];
          break;
        case 8:
          var infected = allState["Selangor"];
          break;
        case 9:
          var infected = allState["Johor"];
          break;
        case 10:
          var infected = allState["Wilayah Persekutuan"];
          break;
        case 11:
          var infected = allState["Melaka"];
          break;
        case 12:
          var infected = allState["Sarawak"];
          break;
        case 13:
          var infected = allState["Terengganu"];
          break;

        default:
          var infected = "0";
          break;
      }

      //console.log(index + typeof index);

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
          {infected}
        </div>
      );
    });
    return data;
  };

  const renderMap = () => {
    return (
      <div>
        <div id="map" style={{ height: 420, width: 780 }}>
          <h2 style={mapTitle}>
            {value == 1 && "Malaysia State COVID-19 Daily Total New Cases"}
            {value == 2 && "Number of All Patients for Each States"}
            {value == 3 && "Number of Patients of the Facility for Each States"}
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
            {value == 1 && renderMarkers()}
            {value == 2 && renderMarkersState()}
            {value == 3 && renderMarkersFacility()}
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
    );
  };

  const getDataWithFetch = async () => {
    const response = await fetch(
      "https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true"
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  const fetchData = () => {
    fetch("http://localhost:5000/patients/states/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        setAllState(json);
      });

    fetch("http://localhost:5000/patients/facility/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        setAllFacility(json);
      });
  };

  useEffect(() => {
    getDataWithFetch();
  });

  return (
    <div style={container}>
      {fetchData()}
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

      <div className={classes.root}>
        <TabContext value={value}>
          <AppBar position="static">
            <TabList
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Malaysia Daily New Cases" value="1" />
              <Tab label="Total Cases in System" value="2" />
              <Tab label="Total Cases of HealthCare Facility" value="3" />
            </TabList>
          </AppBar>
          {value == "1" && <TabPanel value="1">{renderMap()}</TabPanel>}

          {value == "2" && <TabPanel value="2">{renderMap()}</TabPanel>}
          {value == "3" && <TabPanel value="3">{renderMap()}</TabPanel>}
        </TabContext>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { token: state.token, signIn: state.signIn };
};

export default connect(mapStateToProps)(Statistics);
