// src/pages/main-page.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface MainPageProps {
  onPressAnnouncement: () => void;
  onPressShuttle: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onPressAnnouncement, onPressShuttle }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={onPressShuttle}
        style={{
          backgroundColor: "#1b255c",
          padding: 30,
          paddingHorizontal: 50,
          borderRadius: 15,
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>셔틀버스</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressAnnouncement}
        style={{
          backgroundColor: "#1b255c",
          paddingHorizontal: 50,
          padding: 30,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>학사공지</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;