import React from "react";
import { Alert, TouchableOpacity, Text } from "react-native";
import AddShowButtonStyle from "./AddShowButtonStyle";

const AddShowButton = ({ showCount, onPress }) => {
	return (
		<TouchableOpacity
			style={AddShowButtonStyle.button}
			onPress={() => {
				onPress();
				Alert.alert(`Show added!: Total shows: ${showCount + 1}`);
			}}
		>
			<Text style={AddShowButtonStyle.buttonText}>+</Text>
		</TouchableOpacity>
	);
};

export default AddShowButton;
