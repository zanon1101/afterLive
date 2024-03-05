import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AddEventButton from "./components/buttons/add-event-btn/add-event-btn";
import AddEventForm from "./components/forms/add-event-form";

const App = () => {
	const [showForm, setShowForm] = useState(false);

	const handlePress = () => {
		setShowForm(true);
	};

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<Text>Add an event</Text>
				{showForm ? <AddEventForm /> : <AddEventButton onPress={handlePress} />}
				<StatusBar style="auto" />
			</View>
		</SafeAreaProvider>
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