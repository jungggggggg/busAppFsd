import { Text, TouchableOpacity } from "react-native"

export const MainRouteButton = ({ title, ...rest}) => {

  return (
  <TouchableOpacity
        style={{
          backgroundColor: "#1b255c",
          padding: 30,
          paddingHorizontal: 50,
          borderRadius: 15,
          margin: 10,
        }}
        {...rest}
      >
        <Text style={{ fontSize: 20, color: "white" }}>
          {title}
          </Text>
      </TouchableOpacity>
      )
}