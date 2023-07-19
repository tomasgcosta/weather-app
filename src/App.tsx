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
    <main className="flex justify-center items-center bg-gradient-to-b from-0% from-[#284291]  to-[#B68976] to-100% h-full w-full">
      {forecast ? <Forecast  data={forecast}/>:
      <Search
        searchText={searchText}
        suggestions={suggestions}
        onInputChange={onInputChange}
        onSuggestionSelect={onSuggestionSelect}
        onSubmit={onSubmit}
      />}
    </main>
  )
}
export default App
