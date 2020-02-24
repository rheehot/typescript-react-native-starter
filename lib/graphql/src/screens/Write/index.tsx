import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';

const Write: NavigationBottomTabScreenComponent = () => {
  return (
    <View>
      <Text>Write</Text>
    </View>
  );
};

Write.navigationOptions = {
  title: '작성',
};

export default Write;
