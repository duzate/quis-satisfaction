import React, { useRef, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { questions } from "../utils/questions";
import QuestionItem from "../components/QuestionItem";

type QuestionProps = {
  question: string;
  options: string[];
  marked: number;
}[];

// import { Container } from './styles';

const HomeScreen = () => {
  const { height, width } = Dimensions.get("window");
  const [currentPage, setCurrentPage] = useState(1);
  const [questionSelected, setQuestionSelected] = useState(questions);
  const OnSelectOption = (index: number, x: number) => {
    const tempData = questionSelected;
    tempData.map((item, ind) => {
      if (index == ind) {
        item.marked = x;
      }
    });
  };
  const listRef = useRef();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: width / 2,
      }}
    >
      <FlatList
        ref={listRef}
        horizontal
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x / (width / 2) + 1;
          setCurrentPage(Number(x.toFixed(0)));
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={questions}
        renderItem={({ item, index }) => {
          return (
            <QuestionItem
              data={item}
              selectedOption={(x) => {
                OnSelectOption(index, x);
              }}
            />
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          if (currentPage > 1) {
            listRef.current.scrollToIndex({
              animated: true,
              index: currentPage - 2,
            });
          }
        }}
        style={{
          padding: 20,
          backgroundColor: "#262e80",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 300,
          width: 60,
          height: 60,
          position: "absolute",
          bottom: 20,
          left: 20,
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (currentPage < questions.length) {
            listRef.current.scrollToIndex({
              animated: true,
              index: currentPage,
            });
          }
        }}
        style={{
          padding: 20,
          backgroundColor: "#262e80",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 300,
          width: 60,
          height: 60,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <Text>N</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
