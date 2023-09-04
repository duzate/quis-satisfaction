import { StatusBar, View, Dimensions } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  NavigationBar.setVisibilityAsync("hidden");
  const { height, width } = Dimensions.get("window");
  return (
    <View style={{ backgroundColor: "#262e75", flexDirection: "row", flex: 1 }}>
      <StatusBar hidden />
      <View style={{ width: width / 2 }}></View>
      <HomeScreen />
    </View>
  );
}
