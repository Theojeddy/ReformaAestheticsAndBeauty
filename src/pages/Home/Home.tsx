import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import BrandUseCarousel from "../../components/BrandUseCarouselComponent/BrandUseCarousel";
import CarouselImage1 from "../../assets/Home/BrandLogo's/CarouselImage1.svg";
import CarouselImage2 from "../../assets/Home/BrandLogo's/CarouselImage2.svg";
import WhatYouLoveCarousel from "../../components/WhatYouLoveCarousel/WhatYouLoveCarousel";
import WhatYouLove1 from "../../assets/Home/WhatYouLove/WhatYouLove1.svg";
import WhatYouLove2 from "../../assets/Home/WhatYouLove/WhatYouLove2.svg";
import WhatYouLove3 from "../../assets/Home/WhatYouLove/WhatYouLove3.svg";
import WhatYouLove4 from "../../assets/Home/WhatYouLove/WhatYouLove4.svg";
import AsSeenOnYou from "../../components/AsSeenOnYou/AsSeenOnYou";
import AsSeenOnYou1 from "../../assets/Home/AsSeenOnYou/SeenOnYou1.svg";
import AsSeenOnYou2 from "../../assets/Home/AsSeenOnYou/SeenOnYou2.svg";
import AsSeenOnYou3 from "../../assets/Home/AsSeenOnYou/SeenOnYou3.svg";
import AsSeenOnYou4 from "../../assets/Home/AsSeenOnYou/SeenOnYou4.svg";
import AsSeenOnYou5 from "../../assets/Home/AsSeenOnYou/SeenOnYou5.svg";
import AsSeenOnYou6 from "../../assets/Home/AsSeenOnYou/SeenOnYou6.svg";

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

  const BrandcarouselImages = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage1,
    CarouselImage2,
    CarouselImage1,
    CarouselImage2,
    CarouselImage1,
    CarouselImage2,
    CarouselImage2,
    CarouselImage1,
    CarouselImage2,
    CarouselImage1,
    CarouselImage2,
    CarouselImage1,
    CarouselImage2,
    CarouselImage1,
    CarouselImage1,
  ];
  const WhatYouLoveCarouselImages = [
    WhatYouLove1,
    WhatYouLove2,
    WhatYouLove3,
    WhatYouLove4,
    WhatYouLove1,
    WhatYouLove2,
    WhatYouLove3,
    WhatYouLove4,
  ];
  const AsSeenOnYouCarouselImages = [
    AsSeenOnYou1,
    AsSeenOnYou2,
    AsSeenOnYou3,
    AsSeenOnYou4,
    AsSeenOnYou5,
    AsSeenOnYou6,
  ];

  return (
    <div className={styles.pageContent}>
      <main className={styles.homepageLayout}>
        {/* Row */}

        <div className={styles.WelcomeSection}>
          <h2 className={styles.Title}>Welcome to</h2>
          <h2 className={styles.titleAccent}>Reforma Aesthetics and Beauty</h2>
          <h3 className={styles.subtitle}>
            OFFERING EVERYTHING YOU NEED IN ONE PLACE
          </h3>
        </div>
        {/* Col */}

        {/* Row */}
        <div className={styles.carouselSection}>
          <BrandUseCarousel images={BrandcarouselImages} />
        </div>
        {/* Row */}
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
        {/* Row */}
        <div className={styles.YouLoveSection}>
          <h1 className={styles.YouLoveTitle}>What You'll Love</h1>
          <div className={styles.WhatYoullLove}>
            <div>
              <h1>Privacy</h1>
              <p>Enjoy a private and discreet clinic</p>
            </div>
            <div>
              <h1>Elite Therapists</h1>
              <p>
                Enjoy a selection of the industry's to professionals, qualified
                and fully insured
              </p>
            </div>
            <div>
              <h1>Price</h1>
              <p>
                Bespoke personal treatments to meet your needs with FREE, no
                obligation consultations
              </p>
            </div>
          </div>
        </div>

        {/* Row */}
        <div className={styles.carouselSection}>
          <WhatYouLoveCarousel images={WhatYouLoveCarouselImages} />
        </div>

        <div className={styles.AsSeenOnYouSection}>
          <AsSeenOnYou images={AsSeenOnYouCarouselImages} />
        </div>

        {/* 'How To Find Us' section before the map on small screens */}
        <div className={styles.visitUsSection}>
          <div className={styles.FindUs}>
            <h2>How To Find Us</h2>
            <p>
              Reforma Beauty
              <br />
              716 Portway, Bristol,
              <br />
              Bristol,
              <br />
              United Kingdom,
              <br />
              BS11 9NX
            </p>
          </div>
        </div>
        <div className={styles.mapSection} id="my-map"></div>
      </main>
    </div>
  );
}
