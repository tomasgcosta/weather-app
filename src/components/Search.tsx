import { optionType } from '../types'
import { ChangeEvent } from 'react'

type Props = {
  searchText: string
  suggestions: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSuggestionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  searchText,
  suggestions,
  onInputChange,
  onSuggestionSelect,
  onSubmit,
}: Props): JSX.Element => {
  //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  return (
    <main className="z-50 flex justify-center items-end to-100% h-[100vh] w-full">
      <section className=" text-zinc-700">
        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={searchText}
            onChange={onInputChange}
            className="px-2 rounded-l-md border-2 text-gray-100 border-[#BFD7EA]/10 bg-[#BFD7EA] bg-opacity-30 "
          />
          <ul className="absolute top-9 bg-white bg-opacity-10 w-[75%] rounded-b-md drop-shadow-sm">
            {suggestions.map((suggestion: optionType, index: number) => (
              <li key={suggestion.name + '-' + index}>
                <button
                  onClick={() => onSuggestionSelect(suggestion)}
                  className="text-left text-sm w-full hover:bg-[#EC6E4C] bg-slate-600 bg-opacity-60 text-gray-200 hover:text-slate-600 px-2 py-1 cursor-pointer"
                >
                  {suggestion.name}, {suggestion.country}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="flex items-center justify-center rounded-r-md border-2 border-[#EC6E4C] bg-[#EC6E4C] hover:bg-[#c45a3d] drop-shadow-xl hover:border-[#c45a3d]  text-gray-200 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
           Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
