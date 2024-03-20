import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require("./assets/light-bg.png")}
      style={styles.container}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 26,
        }}
      >
        {/* Upper portion of the screen */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            gap: 16,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 12,
                color: "#fff",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              nulla, sint est vero ea facere voluptates autem! Tempora ex
              aperiam nostrum enim excepturi blanditiis sint.
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 12,
                color: "#fff",
                marginTop: 8,
              }}
            >
              - Ada Lovelace
            </Text>
          </View>
          <Image source={require("./assets/refresh.png")} />
        </View>

        {/* Lower portion of the screen */}
        <View
          style={{
            marginBottom: 32,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("./assets/sun.png")} />
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 15,
                color: "#fff",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              GOOD MORNIGN
            </Text>
          </View>

          <View
            style={{
              marginTop: 8,
            }}
          >
            <Text>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 100,
                  color: "#fff",
                }}
              >
                6:00
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                BST
              </Text>
            </Text>
          </View>

          <View
            style={{
              marginTop: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 15,
                color: "#fff",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: "row",
              height: 40,
              width: 115,
              backgroundColor: "#fff",
              borderRadius: 30,
              marginTop: 50,
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Bold",
                fontSize: 12,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              MORE
            </Text>
            <Image source={require("./assets/arrow-down.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
