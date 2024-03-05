import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./submit-btn-styles";

const SubmitButton = ({ onPress, title }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default SubmitButton;
