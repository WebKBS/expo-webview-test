import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    // <>
    //   <StatusBar style="dark" />
    //   <WebView
    //     source={{ uri: "" }}
    //     style={styles.webview}
    //   />
    // </>
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <WebView source={{ uri: "" }} style={styles.webview} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "#000",
    flex: 1,
  },

  webview: {
    flex: 1,
  },
});
