import { View, Text, StyleSheet } from "react-native";

export default function busStopsText() {
  return (
    <View style={{ flexDirection: "row" }}>
    <Text
      style={[
        styles.mdText,
        {
          color: "black",
          fontWeight: "500" // isStop에 따른 fontWeight 설정
        },
      ]}
    >
      태릉입구역
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  mdText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
});