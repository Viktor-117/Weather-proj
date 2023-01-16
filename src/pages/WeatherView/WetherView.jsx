import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';

export default function WeatherView() {
  const cityTitle = useSelector(selectors.getCityName);

  return <h1>Hi</h1>;
}
