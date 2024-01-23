import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { login, saveToken } from "../api";

const { width, height } = Dimensions.get("window");
const signin = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  const handleLogin = async (name: string, password: string) => {
    try {
      const response = await login(name, password);
      await saveToken("token", response.token);
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 80, left: 20 }}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text>Log in</Text>

      <View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: 2,
            borderRadius: 5,
          }}
        >
          <Text>Name</Text>
          <TextInput
            style={{ width: 200, height: 40, marginLeft: 10 }}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: 2,
            borderRadius: 5,
          }}
        >
          <Text>Password</Text>
          <TextInput
            style={{ width: 200, height: 40, marginLeft: 10 }}
            onChangeText={(value) => setPassword(value)}
          />
        </View>

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
          onPress={() => handleLogin(name, password)}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
            Log in
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
    justifyContent: "center",
    width,
    height,
  },
});

export default signin;
