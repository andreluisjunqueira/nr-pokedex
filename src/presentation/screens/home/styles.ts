
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  cardContainer: {
    flex: 1,
    maxWidth: '50%',
    height: 120,
    borderRadius: 16,
    padding: 16,

  },
  cardTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardTag: {
    alignSelf: "flex-start",
    minWidth: "70%",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 16,
    padding: 2,

  },
  cardTagsContainer: {
    gap: 8,
  },
  cardTagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  cardImageContainer: {
    position: "relative",
    backgroundColor: "green",
  },
  cardImageContent: {
    position: "absolute",
    backgroundColor: "transparent",
    right: -2,
    bottom: 0,

  },
  cardImage: {
    width: 90,
    height: 90,
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255, 0, 0, 0.5)',
  },
  errorSubText: {
    fontSize: 14,
    color: 'rgba(255, 0, 0, 0.5)',
  },
  errorImage: {
    width: 250,
    height: 250,
    opacity: 0.7,
    marginTop: 16,
  },
});
