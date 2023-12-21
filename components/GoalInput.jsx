import { Button, StyleSheet, TextInput, View, Modal,Image } from "react-native";
import { useState } from "react";

export default function GoalInput({ onAddGoal, visible, onCancel }) {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const goalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal("");
        onCancel();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
            <Image source={require("../assets/images/goal.png")} style={styles.image} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="#f31282" onPress={()=>onCancel()} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" color="#5e0acc" onPress={goalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 200,
        resizeMode: "contain",
    },
    input: {
        borderColor: "#311b6b",
        backgroundColor: "#fff",
        borderWidth: 2,
        paddingVertical: 2,
        borderWidth: 2,
        borderColor: "#311b6b",
        paddingHorizontal: 10,
        width: "80%",
        borderRadius: 6,
        color: "#120438",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 16,
    },
    button: {
        width: 90,
        borderRadius: 10,
    }
});
