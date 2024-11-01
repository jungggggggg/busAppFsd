import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import SubwayLineIcons from "../../../shared/ui/subwayLineIcon";
import { titleType } from "../../../entities/bus/types";


export default function BusStopContainer({ title, isStop, isLast, station, busId }: titleType) {

  const checkColor = isStop ? "black" : "gray";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Feather
            name="arrow-down-circle"
            size={18}
            color={"gray"}
            style={{ backgroundColor: "white" }}
          />
          {!isLast && (
            <View
              style={{
                width: 5,
                backgroundColor: "green",
                height: 80,
              }}
            />
          )}
        </View>
        <View style={{ flexDirection: "column", paddingLeft: 5, top: -5 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.mdText,
                {
                  color: checkColor,
                  fontWeight: isStop ? "bold" : "500", // isStop에 따른 fontWeight 설정
                },
              ]}
            >
              {title}
            </Text>
          </View>
          <Text style={[styles.xsText, { color: checkColor }]}>
            {isStop ? (
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Text style={[styles.xsText, { color: "gray", top: 1 }]}>
                  도착예정시간
                </Text>
                {station && <SubwayLineIcons station={station} size={15} />}
              </View>
            ) : (
              "미정차"
            )}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  mdText: {
    fontSize: 15,
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