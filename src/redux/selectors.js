const getCity = state => state.city.city;

const getIsLoading = state => state.weather.IsLoading;

const getForecastData = state => state.weather.forecastData;

const getLoadCard = state => state.weather.loadCard;

const selectors = { getCity, getIsLoading, getForecastData, getLoadCard };

export default selectors;
