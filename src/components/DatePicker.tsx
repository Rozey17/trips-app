import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Button } from "react-native-paper";
import { s } from "react-native-wind";
import { FontAwesome5 } from "@expo/vector-icons";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <Pressable
      onPress={showDatepicker}
      style={s`py-3 px-4 border border-gray-300 flex-row items-center bg-white`}
    >
      <FontAwesome5 name="calendar-alt" size={24} color="black" />
      <Text
        style={{ fontFamily: "catamaran-medium", marginLeft: 10, fontSize: 17 }}
      >
        {" "}
        {date.toLocaleDateString()}
      </Text>
    </Pressable>
  );
};

export default DatePicker;
