import React, { useState } from "react";
import { TextInput, Button, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";

import styles from "./event-form-styles";
import SubmitButton from "../buttons/submit-btn/submit-btn";

type AndroidMode = "date" | "time" | "datetime";
const pickerMode: AndroidMode = "date";

const AddEventForm = () => {
	const [artist, setArtist] = useState("");
	const [venue, setVenue] = useState("");
	const [city, setCity] = useState("");

	const [eventDate, setDate] = useState(new Date());
	const [show, setShow] = useState(false);

	const handleSubmit = () => {
		Alert.alert("Concert submitted!");
		clearForm();
	};

	const clearForm = () => {
		setArtist("");
		setVenue("");
		setCity("");
	};

	const showDatepicker = () => {
		setShow(true);
	};

	const onChange = (selectedDate) => {
		const currentDate = selectedDate;
		setShow(false);
		setDate(currentDate);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Tell us everything!</Text>
			<TextInput style={styles.input} onChangeText={setArtist} value={artist} placeholder="Sleep Token" />
			<TextInput style={styles.input} onChangeText={setCity} value={city} placeholder="Melbourne, Australia" />
			<TextInput style={styles.input} onChangeText={setVenue} value={venue} placeholder="Northcote Theatre" />
			<Button onPress={showDatepicker} title="Which Date?" />
			{show && <DateTimePicker value={eventDate} mode={pickerMode} onChange={onChange} display="default" />}
			<SubmitButton onPress={handleSubmit} title="Submit!" />
		</SafeAreaView>
	);
};

export default AddEventForm;