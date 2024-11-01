
import { Text, View, StyleSheet } from 'react-native';
import SubwayLineIcons from './subway-line-icon';

export default function IsStopText() {

  const checkColor = "gray"
  const checkColor2 = "black"

  return (
    <>
    <View style={{ flexDirection: "column", paddingLeft: 5, top: -5 }}>

        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Text style={[styles.xsText, { color: "gray", top: 1 }]}>
            도착예정시간
          </Text>
        </View>

  </View>
  </>
  );
}

const styles = StyleSheet.create({
  mdText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  box: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 88,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: -0.5,
    padding: 1,
  },
  notStopText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.5,
    padding: 1,
  },
  smallText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  xsText: {
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  TextColor: {
    color: "gray",
  },
});