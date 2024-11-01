// src/pages/shuttle-page.tsx
import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

interface ShuttlePageProps {
  onBack: () => void;
}

const HwarangdaePage: React.FC<ShuttlePageProps> = ({ onBack }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 20 }}>셔틀버스 페이지</Text>
      <TouchableOpacity
        onPress={onBack}
        style={{
          backgroundColor: "#1b255c",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>뒤로 가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HwarangdaePage;