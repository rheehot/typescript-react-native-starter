import AppContainer from '@nav/AppContainer';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const uriPrefix = 'app://';

const App = () => {
  useEffect(() => {
    const hide = setTimeout(() => {
      SplashScreen.hide();
    }, 1);
    return () => clearTimeout(hide);
  }, []);
  
  return <AppContainer {...{ uriPrefix }} />;
};

export default App;
