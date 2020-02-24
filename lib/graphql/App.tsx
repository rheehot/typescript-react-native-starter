import { ApolloProvider } from '@apollo/react-hooks';
import client from '@components/client';
import AppContainer from '@nav/AppContainer';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    const hide = setTimeout(() => {
      SplashScreen.hide();
    }, 1);
    return () => clearTimeout(hide);
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    </>
  );
};


export default App;
