import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';

const Setting: NavigationBottomTabScreenComponent = () => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

Setting.navigationOptions = {
  title: '환경 설정',
};

export default Setting;
