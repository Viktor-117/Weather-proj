const getCity = state => state.city.city;

const getIsLoading = state => state.city.IsLoading;

const getForecastData = state => state.city.forecastData;

const selectors = { getCity, getIsLoading, getForecastData };

export default selectors;
