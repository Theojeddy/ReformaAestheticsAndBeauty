import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";
import JenAndBecky from "../../assets/Jen&becky.svg";

export default function Home() {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

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
    if (coordinates) {
      const map = new maplibregl.Map({
        container: "my-map",
        style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=ca54ba162c664b2988fad6b2db9061a0`,
        center: coordinates,
        zoom: 14,
      });

      new maplibregl.Marker().setLngLat(coordinates).addTo(map);
    }
  }, [coordinates]);

  return (
    <div className={styles.pageContent}>
      <main className={styles.homepageLayout}>
        {/* First Row */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>

        <div className={styles.titleSection}>
          <h2 className={styles.title}>Welcome to</h2>
          <h2 className={styles.titleAccent}>Reforma Aesthetics and Beauty</h2>
          <h3 className={styles.subtitle}>
            OFFERING EVERYTHING YOU NEED IN ONE PLACE
          </h3>
        </div>

        {/* Second Row */}
        <div className={styles.visionSection}>
          <h1 className={styles.visionTitle}>Our Vision</h1>
          <p>
            Reforma Aesthetics and beauty is a friendly family-run aesthetics
            clinic and beauty studio that is primarily about allowing
            individuals to gain confidence and pride in their appearance by
            enhancing their natural beauty in a private and professional
            environment. Providing a varied range of high-quality treatments by
            skilled, qualified professionals.
          </p>
        </div>

        <div className={styles.visionImageContainer}>
          <img
            className={styles.visionImage}
            src={JenAndBecky}
            alt="Jen and Becky"
          />
        </div>

        {/* Third Row */}
        <div className={styles.mapSection} id="my-map"></div>
        <div className={styles.visitUsSection}>
          <h2>How To Find us</h2>
          <p>
            Reforma Beauty
            <br />
            716 Portway, Bristol,
            <br/>
            Bristol,
            <br/>
            United Kingdom,
            <br/>
             BS11 9NX
          </p>
        </div>
      </main>
    </div>
  );
}
