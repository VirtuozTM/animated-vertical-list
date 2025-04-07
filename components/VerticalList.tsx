import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Item } from "../services/mockData";
import { Image } from "expo-image";
import {
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import Animated, { interpolate } from "react-native-reanimated";

type VerticalListProps = {
  data: Item[];
};

type AnimatedCardProps = {
  item: Item;
  index: number;
  scrollY: SharedValue<number>;
};

const { height } = Dimensions.get("screen");

const _spacing = 8;
const _itemSize = height * 0.75;
const _itemFullSize = _itemSize + _spacing * 2;

const AnimatedCard = ({ item, index, scrollY }: AnimatedCardProps) => {
  const styleZ = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [index - 1, index, index + 1],
        [0.3, 1, 0.3]
      ),
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [index - 1, index, index + 1],
            [0.92, 1, 0.92]
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          height: _itemSize,
          padding: _spacing * 2,
          gap: _spacing,
        },
        styleZ,
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={[StyleSheet.absoluteFillObject, { borderRadius: 8 }]}
        blurRadius={50}
      />
      <Image source={{ uri: item.image }} style={{ flex: 1 }} />
      <View style={{ gap: _spacing }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff" }}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={{ color: "#ddd" }}>
          {item.description}
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", gap: _spacing, alignItems: "center" }}
      >
        <Image
          source={{ uri: item.author.avatar }}
          style={{ width: 24, aspectRatio: 1, borderRadius: 24 }}
        />
        <Text style={{ fontSize: 12, color: "#ddd" }}>{item.author.name}</Text>
      </View>
    </Animated.View>
  );
};

const VerticalList = ({ data }: VerticalListProps) => {
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y / _itemFullSize;
  });

  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item, index }) => (
        <AnimatedCard item={item} index={index} scrollY={scrollY} />
      )}
      contentContainerStyle={{
        paddingHorizontal: _spacing * 3,
        paddingVertical: (height - _itemFullSize) / 2, // permet de centrer la liste verticalement
        gap: _spacing * 2,
      }}
      snapToInterval={_itemFullSize} // permet de faire un scroll vertical
      decelerationRate="fast" // permet de faire un scroll rapide
      onScroll={onScroll}
      scrollEventThrottle={16} // 1000 / 60 = 16ms
    />
  );
};

export default VerticalList;

const styles = StyleSheet.create({});
