import React from 'react';
import { Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class NotifyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notify!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./image/icon-user-default.png')}
          resizeMode='contain'
          style={{width: 20, height: 20}}
        />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./image/icon-picture.png')}
          resizeMode='contain'
          style={{width: 20, height: 20}}
        />
      )
    }
  },
  Notify: {
    screen: NotifyScreen,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./image/icon-picture.png')}
          resizeMode='contain'
          style={{width: 20, height: 20}}
        />
      )
    }
  }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 15
    }
  }
});

export default createAppContainer(TabNavigator);