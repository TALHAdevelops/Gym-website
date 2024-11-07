import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
