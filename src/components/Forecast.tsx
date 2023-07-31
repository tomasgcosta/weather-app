import Degree from "./Degree";
import Sunrise from "./Icons/Sunrise";
import Sunset from "./Icons/Sunset";
import Card from "./Card";

import {
  getHumidityValue,
  getWindDirection,
  getSunTime,
  getPop,
} from "./../helpers";

import { forecastType } from "../types";
/* import SearchBar from "./SearchBar"; */

type Props = {
  data: forecastType;
};

const Forecast = ({ data }: Props) => {
  const today = data.list[0];

  return (
    <div className="text-gray-200 w-full md:max-w-[500px] py-1 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto overscroll-auto">
      <div className="mx-auto w-[300px] ">
        <section className="text-center">
          <h2 className="text-2xl font-semibold ">
            {data.name}
          </h2>
          <h1 className="text-4xl font-medium ">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-sm ">
            {Math.ceil(today.main.temp_max)}
            <span className="opacity-50">
              {"/"}
              <Degree temp={Math.floor(today.main.temp_min)} />
            </span>
          </p>
          <p className="text-sm mt-1 ">
            {today.weather[0].description.charAt(0).toUpperCase() +
              today.weather[0].description.slice(1)}
          </p>

          {/* INSERT SEARCH COMPONENT HERE */}
            {/* <SearchBar /> */}

        </section>

        <section className="flex overflow-x-scroll gap-5 mt-4 pb-2 mb-5 bg-[#BFD7EA]/30 bg-opacity-20 rounded-[10px] scroll-smooth">
          {data.list.map((item, i) => (
            <div
              key={i}
              className="inline-block text-center w-[60px] flex-shrink-0"
            >
              <p className="text-sm">
                {i === 0 ? "Now" : new Date(item.dt * 1000).getHours() + ":00"}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div> 
          ))}
        </section>

        <section className="flex flex-wrap  justify-between text-gray-200">
          <div className="w-[140px] text-xs font-medium flex flex-col items-center bg-[#BFD7EA]/30  rounded-[10px] drop-shadow-lg py-4 mb-5">
            <Sunrise /> <span className="mt-2 text-gray-300">Sunrise</span>
            <span className="mt-1 font-medium">{getSunTime(data.sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-medium flex flex-col items-center bg-[#BFD7EA]/30   rounded-[10px] drop-shadow-lg py-4 mb-5">
            <Sunset /> <span className="mt-2 text-gray-300">Sunset</span>
            <span className="mt-1 font-medium">{getSunTime(data.sunset)}</span>
          </div>

          <Card
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(Math.round(today.wind.deg))}, gusts
            ${today.wind.gust.toFixed(1)} km/h`}
          />
          <Card
            icon="feels"
            title="Feels like"
            info={<Degree temp={Math.round(today.main.feels_like)} />}
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? "colder"
                : "warmer"
            }`}
          />
          <Card
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Card
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
        </section>
      </div>
    </div>
  );
};

export default Forecast;
