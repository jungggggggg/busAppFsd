import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

export default function SubwayLineIcons({ station, size }: any) {
  return (
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
      {station.map((item, index) => {
        switch (item) {
          case 0:
            return (
              <MaterialCommunityIcons
                key={index}
                name="numeric-1-circle"
                size={size}
                color="#0053c4"
              />
            );
          case 1:
            return (
              <MaterialCommunityIcons
                key={index}
                name="numeric-6-circle"
                size={size}
                color="#e85f00"
              />
            );
          case 2:
            return (
              <MaterialCommunityIcons
                key={index}
                name="numeric-7-circle"
                size={size}
                color="#b5cd1c"
              />
            );
        }
      })}
    </View>
  );
}
