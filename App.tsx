import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
  const getAllScheduledNotifications = useCallback(async () => {
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync();
    for (let notification of notifications) {
      const trigger = notification.trigger;
      // ❗❗❗ PROBLEM ❗❗❗
      // no access to schedule information
      // no type property exists on `trigger`
      // trigger. ???
    } // end for
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
