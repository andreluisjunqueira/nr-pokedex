import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";

export const useSearchBar = ({ onCancel }: { onCancel?: () => void }) => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
        onChangeText: (event: any) => setSearch(event.nativeEvent.text),
        onCancelButtonPress: () => onCancel?.(),
        onClose: () => onCancel?.(),
      },
    });
  });

  return { search };
};
