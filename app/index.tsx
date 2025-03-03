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
      <WebView source={{ uri: "" }} style={styles.webview}

               javaScriptEnabled
               domStorageEnabled
               sharedCookiesEnabled
               thirdPartyCookiesEnabled
               incognito={false} // false로 설정하여 세션 유지
               userAgent="Mozilla/5.0 (Linux; Android 10; Mobile; rv:90.0) Gecko/90.0 Firefox/90.0"
               setSupportMultipleWindows
               onNavigationStateChange={(navState) => {
                 console.log("Current URL:", navState.url);
               }}
      />
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
