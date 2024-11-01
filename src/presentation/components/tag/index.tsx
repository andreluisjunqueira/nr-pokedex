import { Text, View } from "react-native";
import { styles } from "./styles";

type TagProps = {
  tag: string;
  color?: string;
  textColor?: string;
};

export const Tag = ({
  tag,
  color = "rgba(255, 255, 255, 0.5)",
  textColor = "white",
}: TagProps) => {
  return (
    <View style={[styles.cardTag, { backgroundColor: color }]}>
      <Text style={[styles.cardTagText, { color: textColor }]}>{tag}</Text>
    </View>
  );
};
