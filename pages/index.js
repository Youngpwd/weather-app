import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import bgImg from "../public/background/lukasz-lada-LtWFFVi1RXQ-unsplash.jpg";
import Weather from "@/components/Weather";
import Loading from "@/components/Loading";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&lang=en&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!city) {
      setLoading(false);
      return;
    }
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

      {/*overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[1]" />

      {/*BG img*/}
      <Image
        src={bgImg}
        alt="background image"
        className="object-cover"
        as="image"
        fill
        priority
      />

      {/*Search Weather*/}
      <div className="relative flex justify-center item-center max-w-[500px] w-full pt-4 z-10 m-auto">
        <form
          onSubmit={fetchWeather}
          className="w-full flex justify-between text-white mx-8 p-3 bg-transparent border border-gray-400 rounded-2xl"
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="p-2 w-10/12 sm:w-full sm:text-2xl  bg-transparent border-none focus:outline-none placeholder:text-white text-white mx-2"
              placeholder="Enter City Name..."
              required
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/*Loading*/}
      {loading && <Loading />}

      {/*Weather Card*/}
      {weather.main && <Weather weather={weather} />}
    </div>
  );
}
