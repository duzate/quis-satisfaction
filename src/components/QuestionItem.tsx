import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
// import { Container } from './styles';

type QuestionData = {
  data: { question: string; options: string[]; marked: number };
  selectedOption: (x: number) => void;
};

const QuestionItem = ({ data, selectedOption }: QuestionData) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      style={{
        width: width / 2,
        justifyContent: "center",
        backgroundColor: "#fff",
        height: "85%",
      }}
    >
      <Text
        style={{
          textAlign: "justify",
          fontSize: 20,
          fontWeight: "600",
          color: "#262e75",
          marginLeft: 10,
          marginTop: 15,
          marginRight: 10,
        }}
      >
        {data.question}
      </Text>
      <FlatList
        data={data.options}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                paddingLeft: 10,
                marginTop: 10,
                width: "90%",
                height: 50,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: data.marked == index + 1 ? "#262e75" : "#fff",
              }}
              onPress={() => {
                selectedOption(index + 1);
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 15,
                  borderWidth: 2,
                  borderColor: "#262e75",
                  backgroundColor:
                    data.marked == index + 1 ? "#262e75" : "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#262e75",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default QuestionItem;
