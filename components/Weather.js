import Image from "next/image";
import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="relative z-10 flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-2xl">{weather.weather[0].main}</p>
        </div>
        <p className="text-8xl sm:text-9xl">{weather.main.temp.toFixed(0)}&#176;F</p>
      </div>

      <div className="bg-black/50 relative p-5 sm:p-8 rounded-md mb-[80%]">
        <p className="text-2xl text-center pb-6 ">Weather in {weather.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {weather.main.feels_like.toFixed(0)}&#176;F
            </p>
            <p className="sm:text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{weather.main.humidity}%</p>
            <p className="sm:text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {weather.wind.speed.toFixed(0)}MPH
            </p>
            <p className="sm:text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
