/*
 * @Description:
 * @Version: 1.0.0
 * @Date: 2022-05-25 15:15:53
 * @LastEditors: Tait
 * @LastEditTime: 2023-02-17 16:34:15
 */

import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import WebviewDemo from './pages/webview';

const App = () => {
  const [showCaptcha, setCaptcha] = useState(false);
  const onSuccess = (data: any) => {
    setCaptcha(false);
    console.log('success:' + JSON.stringify(data));
  };
  const onFail = (data: any) => {
    console.log('fail:' + JSON.stringify(data));
  };
  const onError = (data: any) => {
    console.log('error:' + JSON.stringify(data));
  };
  const onClose = () => {
    setCaptcha(false);
  };

  return (
    <View style={styles.sectionContainer}>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => setCaptcha(true)}
      />
      <WebviewDemo
        show={showCaptcha}
        onSuccess={onSuccess}
        onFail={onFail}
        onError={onError}
        onClose={onClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
