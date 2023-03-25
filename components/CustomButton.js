import PropTypes from "prop-types";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const CustomButton = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
  width,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: width,
          backgroundColor:
            disabled != null && disabled === "true" ? "#e0e0e0" : "#303656",
        },
        styles.button,
        buttonStyle,
      ]}
      onPress={() => {
        if (disabled == null || disabled === "false") {
          onPress();
        }
      }}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  width: PropTypes.string,
  disabled: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    height: 60,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});
