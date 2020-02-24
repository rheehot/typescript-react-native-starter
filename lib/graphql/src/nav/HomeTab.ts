import Home from '@screens/Home';
import Setting from '@screens/Setting';
import Write from '@screens/Write';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default createBottomTabNavigator(
  {
    Home: { screen: Home },
    Write: { screen: Write },
    Setting: { screen: Setting },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
    },
  }
);
