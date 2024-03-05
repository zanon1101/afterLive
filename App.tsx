import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AddEventButton from "./components/buttons/add-event-btn/add-event-btn";
import AddEventForm from "./components/forms/add-event-form";

const App = () => {
	const [showForm, setShowForm] = useState(false);

	const handlePress = () => {
		setShowForm((prevForm) => !prevForm);
	};

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<Text>Press to add an event</Text>
				<StatusBar style="auto" />
				{showForm ? <AddEventForm /> : <AddEventButton onPress={handlePress} />}
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
