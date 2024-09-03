/* eslint-disable jsx-a11y/accessible-emoji */
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View>
          <Text>Hello App one Users</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
