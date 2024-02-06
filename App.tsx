import React from 'react';
import {Button, Linking, Platform, Text, View} from 'react-native';

function App(): JSX.Element {
  async function fun() {
    let phoneNumber = '7905201778';
    let message = 'Hellow how are you Eissa?';
    const separator = Platform.OS === 'ios' ? '&' : '?';
    const url = `sms:${phoneNumber}${separator}body=${message}`;
    await Linking.openURL(url);
  }

  return (
    <>
    {/* Hello how are */}
      <View style={{padding: 100}}>
        <Button title="Invite" onPress={() => fun()} />
      </View>
    </>
  );
}

export default App;
