import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    position: "relative",
    backgroundColor: "blue"
  },
  bgImage: {
    position: "absolute",
    width: 200,
    height: 200,
    top: 50,
    right: -20,
    opacity: 0.4,
    transform: [{ rotate: "-15deg" }],
  },
  detailRowLabelText: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#666666",
  },
  detailRowSeparator: {
    paddingVertical: 8,
  },
  detailRowSeparatorTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  titleWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignSelf: 'flex-start',
    paddingRight: 26,
    paddingLeft: 8,



  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 16,

  },
  headerContent: {
    flex: 1,
    gap: 8,
  },
  index: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  tags: {
    width: '70%',
    gap: 8,
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "transparent",
  },
  imageWrapper: {
    position: "absolute",
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    top: -250,
  },
  image: {
    width: 300,
    height: 300,
  },
  infoContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 26,
  },
  detailRow: {
    flexDirection: "row",
    height: 28,
  },
  tabView: {
    paddingHorizontal: 16,
  },
  detailRowLabel: {
    flex: 1.5,
  },
  detailRowValue: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  powerBar: {
    backgroundColor: "green",
    height: 2,
    borderRadius: 4,
    width: "50%",
  },
  powerBarContainer: {
    flex: 1,
    borderRadius: 4,
    justifyContent: "flex-end",
    backgroundColor: "#E0E0E0",
  },
  detailRowTitle: {
    fontSize: 12,
    fontWeight: "semibold",
    color: "#666666",
  },
});
