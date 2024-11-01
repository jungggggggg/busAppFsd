import { Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const BusIcon = ({ busPosition, busId }) => {
  return (
    <>
      {busPosition !== undefined && (
        <View
          style={{
            position: "absolute",
            top: busPosition + 80,
            left: 20,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 50,
            zIndex: 2,
          }}
        >
          <Text
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              padding: 3,
              // fontSize: 15,
              position: "absolute",
            }}
          >
            {/* {BusId !== undefined ? BusId : ""} */}
            {String(busId)}
          </Text>
          <View style={{ zIndex: 3, position: "absolute", left: 65 }}>
            <FontAwesome5
              name="bus"
              size={25}
              color="red"
              style={{ backgroundColor: "white" }}
            />
          </View>
        </View>
      )}
    </>
  );
};
