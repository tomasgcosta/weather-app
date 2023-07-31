import Forecast from './components/Forecast'
import Search from './components/Search'


import useForecast from './hooks/useForecast'
const App = (): JSX.Element => {
  const {
    onInputChange,
    onSubmit,
    onSuggestionSelect,
    searchText,
    forecast,
    suggestions,
  } = useForecast()

  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-0% from-[#284291]  to-[#B68976] to-100% h-screen w-screen">
         <Search
        searchText={searchText}
        suggestions={suggestions}
        onInputChange={onInputChange}
        onSuggestionSelect={onSuggestionSelect}
        onSubmit={onSubmit}
      />
      {forecast ? <Forecast  data={forecast}/> : <h1 className='h-[50%]'>Please type in the location</h1>
      }
    </main>
  )
}
export default App
