import { useState, useEffect, ChangeEvent } from 'react'

import { optionType, forecastType } from './../types/index'

const BASE_URL = 'http://api.openweathermap.org'

const useForecast = () => {
  const [city, setCity] = useState<optionType | null>(null)
  const [searchText, setSearchText] = useState<string>('')
  const [suggestions, setSuggestions] = useState<[]>([])
  const [forecast, setForecast] = useState<forecastType | null>(null)

  const getSearchOptions = async (term: string) => {
    fetch(
      `${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((e) => console.log({ e }))
  }

  const onSubmit = () => {
    if (!city) return

    getForecast(city)
  }

  const getForecast = (data: optionType) => {
    fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        }

        setForecast(forecastData)
      })
      .catch((e) => console.log({ e }))
  }

  const onSuggestionSelect = (option: optionType) => {
    setCity(option)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setSearchText(e.target.value)

    if (value !== '') {
      getSearchOptions(value)
    }
  }

  useEffect(() => {
    if (city) {
      setSearchText(city.name)
      setSuggestions([])
    }
  }, [city])

  return {
    forecast,
    suggestions,
    searchText,
    onSuggestionSelect,
    onSubmit,
    onInputChange,
  }
}

export default useForecast