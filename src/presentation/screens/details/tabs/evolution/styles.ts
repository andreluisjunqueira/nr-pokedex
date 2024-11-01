import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    content: {
        width: "90%",
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    evolutionRow: {
        flexDirection: "row",
        gap: 16,
        marginTop: 16,
        height: 100,
        marginBottom: 16,
    },
    evolutionItem: {
        flex: 1,
        // backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
    },
    evolutionArrow: {
        alignSelf: "center",
    },
    imageBackground: {
        position: "absolute",
        width: 90,
        height: 90,
        backgroundColor: "#F5F5F5",
        borderRadius: 100,
    },
    image: {
        width: 100,
        height: 100,
    },
});
