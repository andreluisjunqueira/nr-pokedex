import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  toastContainer: {
    margin: 8,
    padding: 16,
    borderRadius: 16,
  },
  message: {
    fontWeight: '600',
    textAlign: 'left',
    color: '#FFFFFF',
  },
  progressContainer: {
    marginTop: 8,
    borderRadius: 4,
  },
  progressBar: {
    height: 2,
    backgroundColor: '#FFFFFF',
    opacity: 0.3,
    borderRadius: 4,
  },
  toastWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  topPosition: {
    top: 45,
  },
  bottomPosition: {
    bottom: 0,
  },
});

