import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import bgImg from "../public/background/lukasz-lada-LtWFFVi1RXQ-unsplash.jpg";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("baltimore");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
        setLoading(false);
        setCity("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="relative block w-full h-screen">
      <Head>
        <title>Weather - App</title>
        <meta name="description" content="Generated by next app" />
      </Head>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[1]" />
      <Image
        src={bgImg}
        alt="background image"
        className="object-cover"
        as="image"
        fill
        priority
      />
    </div>
  );
}
