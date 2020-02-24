import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '@components/querys';
import * as React from 'react';
import { ActivityIndicator, Text, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationBottomTabScreenComponent } from 'react-navigation-tabs';

const Home: NavigationBottomTabScreenComponent = () => {
  
  const { loading, error, data, refetch } = useQuery(GET_BOOKS, {
    variables: {
        limit: 5
    }
});

  if (loading) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator /></View>
  if (error) return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={() => refetch()}>
        <Text>오류</Text>
      </TouchableWithoutFeedback>
    </View>
  )

  return (
    <View>
      <Text>{data.books.map((book: { title: string }) => book.title)}</Text>
    </View>
  );
};

Home.navigationOptions = {
  title: '홈',
};

export default Home;
