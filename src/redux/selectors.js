const getCity = state => state.city.city;

const getCityName = state => state.city.cityName;

const getIsLoading = state => state.city.getIsLoading;

const selectors = { getCity, getIsLoading, getCityName };

export default selectors;
