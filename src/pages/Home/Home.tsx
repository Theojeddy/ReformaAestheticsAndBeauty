import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";
import JenAndBecky from "../../assets/Jen&becky.svg";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null); // Store coordinates

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set loading time to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          "https://api.geoapify.com/v1/geocode/search?text=bs11%209nx&lang=en&limit=1&type=postcode&format=json&apiKey=ca54ba162c664b2988fad6b2db9061a0"
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const { lat, lon } = data.results[0]; // Extract the lon/lat from the response
          setCoordinates([lon, lat]);
        } else {
          console.error("Coordinates not found");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates && !isLoading) {
      const map = new maplibregl.Map({
        container: "my-map", // The id of the HTML element to inject the map into
        style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=ca54ba162c664b2988fad6b2db9061a0`,
        center: coordinates, // Use the fetched coordinates to center the map
        zoom: 14, // Adjust zoom level as needed
      });

      // Optional: Add a marker at the center
      new maplibregl.Marker().setLngLat(coordinates).addTo(map);
    }
  }, [coordinates, isLoading]);

  return (
    <div
      className={`${styles.homePageTransition} ${
        !isLoading ? styles.show : ""
      }`}
    >
      {isLoading && (
        <div className={styles.loadingScreen}>
          <img
            className={styles.loadingLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
      )}

      <div className={`${styles.pageContent} ${!isLoading ? styles.show : ""}`}>
        <main className={`container ${styles.homepageLayout}`}>
          {/* First Row */}
          <div className={styles.logoSection}>
            <img
              className={styles.mainLogo}
              src={ReformaLogo}
              alt="Reforma Logo"
            />
          </div>

          <div className={styles.titleSection}>
            <h2 className={styles.title}>Welcome to Reforma Beauty</h2>
          </div>

          {/* Second Row */}
          <div className={styles.visionSection}>
            <h1>Our Vision</h1>
            <p>
              Reforma Aesthetics and beauty is a friendly family-run aesthetics
              clinic and beauty studio that is primarily about allowing
              individuals to gain confidence and pride in their appearance by
              enhancing their natural beauty in a private and professional
              environment. Providing a varied range of high-quality treatments
              by skilled, qualified professionals.
            </p>
          </div>

          {/* Vision Image */}
          <div className={styles.visionImageContainer}>
            <img
              className={styles.visionImage}
              src={JenAndBecky} // Use the imported variable here
              alt="Jen and Becky"
            />
          </div>

          {/* Third Row */}
          <div className={styles.mapSection} id="my-map"></div>
          <div className={styles.visitUsSection}>
            <h2>Visit Us</h2>
            <p>
              Reforma Beauty
              <br />
              123 Beauty Street
              <br />
              Bristol, BS11 9NX
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
