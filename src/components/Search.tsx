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
    <main className="flex justify-center items-center bg-gradient-to-b from-0% from-[#284291]  to-[#B68976] to-100% h-[100vh] w-full">
      <section className="w-full md:max-w-screen-sm p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] text-zinc-700">
          <img src={require('../logo.png')} className='max-w-[50%] max-h-[50%]'/>
        <h1 className="text-4xl font-thin">
          <span className="font-bold bg-gradient-to-r from-[#FEA807] to-[#FCDF2B] bg-clip-text text-transparent">
            sol ou chuva
          </span>
        </h1>
        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={searchText}
            onChange={onInputChange}
            className="px-2 py-1 rounded-l-md border-2 text-gray-300 border-slate-600 bg-slate-600"
          />
          <ul className="absolute top-9 bg-white w-[75%] rounded-b-md drop-shadow-sm">
            {suggestions.map((suggestion: optionType, index: number) => (
              <li key={suggestion.name + '-' + index}>
                <button
                  onClick={() => onSuggestionSelect(suggestion)}
                  className="text-left text-sm w-full hover:bg-[#fea807d2] bg-slate-600 text-gray-300 hover:text-slate-600 px-2 py-1 cursor-pointer"
                >
                  {suggestion.name}, {suggestion.country}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="rounded-r-md border-2 border-[#FEA807] bg-[#FEA807] hover:bg-[#29C0F5] drop-shadow-xl hover:border-[#29C0F5]  text-slate-600 px-2 py-1 cursor-pointer"
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
