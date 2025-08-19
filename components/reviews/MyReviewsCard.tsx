import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Rating } from "../rating/Rating";

type Props = {
  title: string;
  image?: ImageSourcePropType;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
};

export const MyReviewsCard = ({ title, image, rating }: Props) => {
  return (
    <View className="w-full">
      <View>
        <Image source={image}  className="w-full h-[200px] rounded-xl"
        resizeMode="cover" />
      </View>
      <View>
        {/* <Text className="text-start">{title}</Text> */}
        <Rating rating={rating}/>
      </View>
    </View>
  );
};
