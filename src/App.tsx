import Forecast from "./components/Forecast";
import Search from "./components/Search";
import { useState } from "react";

import useForecast from "./hooks/useForecast";
const App = (): JSX.Element => {
  const [header, setHeader] = useState(true);

  const {
    onInputChange,
    onSubmit,
    onSuggestionSelect,
    searchText,
    forecast,
    suggestions,
  } = useForecast();

  const hideHeader = () => {
    setHeader(false);
  };

  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-0% from-[#284291]  to-[#B68976] to-100% h-screen w-screen">
      {header && (
        <div className="absolute flex flex-col justify-center items-center">
          <img
            src={require("./logo.png")}
            className="max-h-[30%] max-w-[30%]" alt='logo'
          />
          <h1 className="text-4xl font-thin">
            <span className="font-bold bg-gradient-to-r from-[#EC6E4C] to-[#FCDF2B] bg-clip-text text-transparent">
              sol ou chuva
            </span>
          </h1>
        </div>
      )}
      <Search
        searchText={searchText}
        suggestions={suggestions}
        onInputChange={onInputChange}
        onSuggestionSelect={onSuggestionSelect}
        onSubmit={() => {
          hideHeader();
          onSubmit();
        }}
      />
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <h1 className="h-[50%] mt-2 text-gray-200">
          Please type in the location
        </h1>
      )}
    </main>
  );
};
export default App;
