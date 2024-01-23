import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { getToken } from "../api";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const home = () => {
  const router = useRouter();
  React.useEffect(() => {
    console.log("home");
    getToken("token").then((token) => {
      if (!token) {
        router.push("/signin");
      }
      console.log("token", token);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 80, left: 20 }}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{ color: "white", fontSize: 40, marginTop: 60 }}>
        My Cards
      </Text>
      <TouchableOpacity
        style={{ position: "absolute", top: 80, right: 20 }}
        onPress={() => null}
      >
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              backgroundColor: "#F6D139",
              paddingVertical: 5,
              borderRadius: 10,
              marginBottom: 20,
              paddingHorizontal: 30,
              marginLeft: 10,
              alignItems: "center",
              width: 50,
              height: 50,
            }}
          ></View>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
            4242 4242 4242 4242
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
          width: 300,
        }}
      >
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
        >
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: "600" }}>
            Add Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#fff",
            paddingVertical: 5,
            borderRadius: 10,
            marginBottom: 20,
            paddingHorizontal: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 15, fontWeight: "600" }}>
            Change Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393939",
    alignItems: "center",
    width,
    height,
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    marginTop: 40,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default home;
