import React from "react";
import { Image, ImageSourcePropType, Pressable, View } from "react-native";
import { Rating } from "../rating/Rating";

type Props = {
  title: string;
  image?: ImageSourcePropType;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  onPress?: () => void;
};

export const MyReviewsCard = ({ title, image, rating, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} className="w-full">
      <View>
        <Image source={image}  className="w-full h-[200px] rounded-xl"
        resizeMode="cover" />
      </View>
      <View>
        {/* <Text className="text-start">{title}</Text> */}
        <Rating rating={rating}/>
      </View>
    </Pressable>
  );
};
