import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
