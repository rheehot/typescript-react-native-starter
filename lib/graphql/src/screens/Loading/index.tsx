import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationSwitchScreenComponent } from 'react-navigation';

const Loading: NavigationSwitchScreenComponent = ({ navigation }) => {
  React.useEffect(() => {
    navigation.navigate('Login');
  }, [navigation]);
  
  return (
    <>
      <ActivityIndicator size='large' hidesWhenStopped />
    </>
  );
};

export default Loading;
