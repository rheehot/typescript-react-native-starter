import AppContainer from '@nav/AppContainer';
import * as React from 'react';

const uriPrefix = 'app://';

const App = () => {
  return <AppContainer {...{ uriPrefix }} />;
};

export default App;
