import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import AddShowButton from "./components/buttons/add-show-btn";

const App = () => {
	const [showCount, setShowCount] = useState(0);

	const incrementShowCount = () => {
		setShowCount((prevCount) => prevCount + 1);
	};

	return (
		<View style={styles.container}>
			<Text>Number of shows: {showCount}</Text>
			<Text>Press to add a show</Text>
			<StatusBar style="auto" />
			<AddShowButton showCount={showCount} onPress={incrementShowCount} />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
