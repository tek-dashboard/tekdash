import React from "react";
import Footer from "../components/Footer";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import MapImage from "../components/MapImage";
console.log(process.env.REACT_APP_CITY_KEY);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityToSubmit: "",
      cityData: {},
      lat: "",
      lon: "",
      mapImage: "",
      displayError: false,
      errorMessage: "error from state attribute",
    };
  }

  handleCityInput = (event) => {
    console.log(event.target.value);
    this.setState({
      cityToSubmit: event.target.value,
    });
  };

  //add getLocationData
  submitCityHandler = async (event) => {
    event.preventDefault();
    try {
      let URL = `${process.env.REACT_APP_SERVER}/getLocation?cityNameToSearch=${this.state.cityToSubmit}`;
      let cityInfo = await axios.get(URL);
      let cityDataFromServer = cityInfo.data;
      // console.log("JJ", cityDataFromServer);
      this.setState({
        cityData: cityInfo,
        city: cityDataFromServer[0],
        mapImage: cityDataFromServer[1],
        lat: cityDataFromServer[2],
        lon: cityDataFromServer[3],
        displayError: false,
      });

      this.getWeather(
        cityDataFromServer[2],
        cityDataFromServer[3],
        cityDataFromServer[0]
      );
    } catch (error) {
      console.log("ERROR.message", error.message);
      this.state({
        displayError: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
  };

  getWeather = async (lat, lon, locationName) => {
    try {
      const weatherToDisplay = await axios.get(`${process.env.REACT_APP_SERVER}/weather`,
        {
          params: {
            lat: lat,
            lon: lon,
            locationName: locationName,
          },
        }
      );
      console.log("back from server", weatherToDisplay);
    } catch (error) {
      this.setState({
        mapImage: false,
        displayError: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      });
    }
  };

  render() {
    return (
      <>
        <Container fluid>
          <Row style={{ textAlign: "center" }}>
            <h1>WELCOME HOME</h1>
            <form onSubmit={this.submitCityHandler}>
              <label>
                Pick a City:
                <input type="text" onChange={this.handleCityInput} />
              </label>
              <button style={{ marginLeft: "50px" }} type="submit">Explore!</button>
            </form>
          </Row>

          <Row className="align-middle">
            <Col>
              <Card
                className="card"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "38rem",
                  height: "28rem",
                  backgroundColor: "#c0d6df",
                  marginTop: "2rem",
                }}
              >
                asdf
              </Card>
            </Col>
            <Col>
              {this.state.error ? (
                <p>{this.state.errorMessage}</p>
              ) : (
                <>
                  <Card
                    className="card"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "38rem",
                      height: "28rem",
                      backgroundColor: "#c0d6df",
                      marginTop: "2rem",
                      textAlign: "center"
                    }}
                  >
                    {this.state.mapImage === "" ? (
                      ""
                    ) : (
                      <MapImage
                        mapImage={this.state.mapImage}
                        cityName={this.state.cityData.data[0]}
                        lat={this.state.lat}
                        lon={this.state.lon}
                      />
                    )}
                  </Card>
                </>
              )}
            </Col>
          </Row>

          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}

export default Home;
