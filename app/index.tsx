import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const index = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/settlo-logo.png")}
            style={{ width: 200, height: 200, borderRadius: 20 }}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Settlo
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "#F6D139",
              paddingVertical: 5,
              borderRadius: 10,
              marginBottom: 20,
              paddingHorizontal: 30,
              alignItems: "center",
            }}
            onPress={() => router.push("/signin")}
          >
            <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", padding: 20 }}>Need help?</Text>
        <Text style={{ color: "white", padding: 20 }}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393939",
    alignItems: "center",
    justifyContent: "center",
    width,
    height,
  },
});

export default index;
