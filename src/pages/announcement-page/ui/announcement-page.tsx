// src/pages/announcement-page.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowDownIcon } from "../../../shared/ui/arrow-down-icon";
import Bar from "../../../shared/ui/bar-between-stops";
import { BusIcon } from "../../../shared/ui/bus-icon";
import IsStopText from "../../../shared/ui/bus-IsStop-text";
import { ReloadingButton } from "../../../shared/ui/bus-page-button";
import BusStopsText from "../../../shared/ui/bus-stops-text";
import { MainRouteButton } from "../../../shared/ui/main-route-button";
import SubwayLineIcons from "../../../shared/ui/subway-line-icon";

interface AnnouncementPageProps {
  onBack: () => void;
}

const AnnouncementPage: React.FC<AnnouncementPageProps> = ({ onBack }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>학사공지 페이지</Text>
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

      <ArrowDownIcon />
      <Bar />
      <BusIcon busPosition={100} busId={1234} />
      <IsStopText />
      <ReloadingButton />
      <BusStopsText />
      <MainRouteButton title="학사공지"/>
      <SubwayLineIcons station={[1,0,2]} size={15} />
    </View>
  );
};

export default AnnouncementPage;