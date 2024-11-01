
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardTag: {
        alignSelf: "flex-start",
        minWidth: "50%",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 16,
        paddingVertical: 2,
        paddingHorizontal: 8,

    },
    cardTagsContainer: {
        gap: 8,
    },
    cardTagText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#fff",
    },
});
