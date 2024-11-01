import React, { useContext, useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../../../app/global-provider";
import HwarangdaePage from "./hwarangdae-page";
import ByeollaePage from "./byeollae-page";
import { useIsFocused } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

interface ShuttlePageProps {
  onBack: () => void;
}

export const BusPage: React.FC<ShuttlePageProps> = ({ onBack }) => {
  const { isVacation, isAfternoon } = useContext(GlobalContext);
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused(); // 현재 탭이 포커스 되었는지 확인하는 hook

  useEffect(() => {
    const checkModalStatus = async () => {
      const hasShownModal = await AsyncStorage.getItem("hasShownModalMyTabs");
      if (hasShownModal === null && isFocused) {
        // 페이지가 완전히 포커스된 후 모달을 보여줌
        setModalVisible(true);
        await AsyncStorage.setItem("hasShownModalMyTabs", "true");
      }
    };

    checkModalStatus();
  }, [isFocused]); // 페이지가 포커스될 때마다 확인

  const naming = () => {
    if (!isVacation && !isAfternoon) {
      // 월~목요일 오전
      return "화랑대역 ↔ 삼육대학교";
    } else if (!isVacation && isAfternoon) {
      // 월~목요일 오후
      return "삼육대학교 ↔ 석계역";
    } else {
      return "삼육대학교 ↔ 화랑대역";
    }
  };

  return (
    <View style={{ flex: 1 }}>

      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,}}>
      <TouchableOpacity
        onPress={onBack}
        style={{
          padding: 5,
          marginHorizontal: 10,
        }}
      >
        <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{fontSize: 18, fontWeight: '500', padding: 10}}>스쿨버스 (베타)</Text>
      </View>

      <Tab.Navigator
        style={{ flex: 1 }}
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: "#1b255c", height: 3 },
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            shadowColor: "#000", // 그림자 색상 (iOS)
            shadowOffset: { width: 0, height: 2 }, // 그림자 오프셋 (iOS)
            shadowOpacity: 0.25, // 그림자 불투명도 (iOS)
            shadowRadius: 3.84, // 그림자 반경 (iOS)
            elevation: 5, // 그림자 높이 (Android)
            borderTopColor: '#dbdbdb',
            borderTopWidth: 1,
          },
        }}
      >
        <Tab.Screen name={naming()} component={HwarangdaePage} />
        <Tab.Screen name="삼육대학교 ↔ 별내역" component={ByeollaePage} />
      </Tab.Navigator>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              공지의 오른쪽 아이콘을 누르면 자세히 볼 수 있어요
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경을 검게 만듦
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
