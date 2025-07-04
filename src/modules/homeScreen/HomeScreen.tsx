"use client";
import Hero from "./components/Hero";
import Feature from "./components/Features/Feature";
import { featuresData } from "./components/Features/featuresData";
import ListFeatures from "./components/Features/ListFeatures";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";


export const HomeScreen = () => {
  return (
    <div>
      <Hero />
      {featuresData.map((featureData, index) => (
        <Feature 
          key={index} 
          data={featureData} 
          reverse={index === 1}
        />
      ))}
      <ListFeatures/>

      <Testimonials/>

      <Footer/>
    </div>
  );
};

export default HomeScreen;
