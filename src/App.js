import { Cards } from "./Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles.css";

const arrays = [
  {
    name: "Airplane Flight Wallpaper",
    url:
      "https://wallpapers.com/images/file/samsung-galaxy-s22-airplane-flight-tsqk2h1k4nrqpxm1.jpg",
    phones: [
      "Samsung Galaxy S22",
      "Samsung Galaxy S7 Edge",
      "Samsung Galaxy S4",
      "Samsung Galaxy S5"
    ]
  },
  {
    name: "Spiral Triangles Wallpaper",
    url:
      "https://wallpapers.com/images/file/samsung-galaxy-s22-spiral-triangles-4hcyp5lauwssbd77.jpg",
    phones: ["Samsung Galaxy S4", "Samsung Galaxy S5", "Samsung Galaxy S22"]
  },
  {
    name: "Smoke Art Wallpaper",
    url:
      "https://wallpapers.com/images/file/samsung-galaxy-s22-smoke-art-uqkdah1ygx9nm3bu.jpg",
    phones: [
      "Samsung Galaxy S22",
      "Samsung Galaxy",
      "Samsung Galaxy S20",
      "Samsung Galaxy S5",
      "Samsung Galaxy S4"
    ]
  }
];
export default function App() {
  return (
    <div className="App">
      <div>
        <container>
          <Row>
            {arrays.map((item) => {
              return (
                <Col>
                  <Cards name={item.name} url={item.url} />
                </Col>
              );
            })}
          </Row>
        </container>
      </div>
    </div>
  );
}
