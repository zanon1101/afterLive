import { StyleSheet } from "react-native";

const AddShowButtonStyle = StyleSheet.create({
	button: {
		backgroundColor: "transparent", // Circle background color, transparent for just the ring
		borderColor: "black", // Color of the ring
		borderWidth: 2, // Thickness of the ring
		width: 50, // Diameter of the circle
		height: 50, // Diameter of the circle
		borderRadius: 25, // Half of width/height to make it a perfect circle
		alignItems: "center", // Center the "+" horizontally
		justifyContent: "center", // Center the "+" vertically
	},
	buttonText: {
		color: "black", // Color of the "+"
		fontSize: 24, // Size of the "+"
		fontWeight: "bold", // Make the "+" bold
	},
});

export default AddShowButtonStyle;
