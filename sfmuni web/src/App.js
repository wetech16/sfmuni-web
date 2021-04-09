import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import xml2js from "xml2js";

const allRoutes = ["9", "8", "8AX"];

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGeolocaiton = () => {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
          })
        : console.log("Geolocation is not supported by this browser");
    };

    let newEventData = [];
    const fetchEvents = async () => {
      await Promise.all(
        allRoutes.map(async (route) => {
          console.log("2");
          const parser = new xml2js.Parser();
          console.log("3");
          const res = await fetch(
            `http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=sf-muni&r=${route}&t=0`,
            {
              "Content-Type": "application/xml; charset=utf-8",
            }
          );
          console.log("4");
          const data = await res.text();

          parser.parseString(data, (err, res) => {
            let temp = { route, vehicle: res.body.vehicle };
            newEventData.push(temp);
            console.log("5");
          });
        })
      );
      console.log("eventData", eventData);
      console.log("newEventData", newEventData);
      setEventData(newEventData);
    };

    const timer = setInterval(async () => {
      await fetchEvents();
    }, 5000);

    return () => {
      setLoading(true);
      getGeolocaiton();
      clearInterval(timer);
      setLoading(false);
    };
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
