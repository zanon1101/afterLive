import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./add-event-button-styles";

const AddEventButton = ({ onPress }) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => {
				onPress();
			}}
		>
			<Text style={styles.buttonText}>+</Text>
		</TouchableOpacity>
	);
};

export default AddEventButton;
