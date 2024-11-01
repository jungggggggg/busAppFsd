import { Animated, TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRef } from "react";

export const ReloadingButton = ({ disabled, ...rest}) => {

  const rotation = useRef(new Animated.Value(0)).current;

  const handleReloadPress = () => {
    // 회전 애니메이션 실행
    Animated.timing(rotation, {
      toValue: 1,
      duration: 500, // 0.5초 동안 회전
      useNativeDriver: true,
    }).start(() => {
      // 애니메이션 완료 후 다시 초기 상태로 설정
      rotation.setValue(0);
    });
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });


  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <TouchableOpacity
      style={{ position: "absolute", right: 20, top: 25, zIndex: 10 }}
      {...rest}
    >
      <Animated.View
        style={[
          {
            backgroundColor: "#1b255c",
            borderRadius: 100,
            paddingHorizontal: 10,
            paddingVertical: 10,
          },
          animatedStyle,
        ]}
      >
        <Ionicons name="reload" size={20} color="white" />
      </Animated.View>
    </TouchableOpacity>
)
}