import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function GoalItem({ goalList, onRemoveGoal }) {


    return (
        <View style={styles.goalList}>
            <FlatList
                data={goalList}
                renderItem={(itemData) => (
                    <View style={styles.goalItem}>
                        <Pressable style={styles.pressable} android_ripple={{ color: "#5e0acc" }} onPress={() => onRemoveGoal(itemData.item.id)}>
                            <Text style={styles.goalText}>{itemData.item.text}</Text>
                            <AntDesign name="delete" size={20} color="#5e0acc" />
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    goalList: {
        flex: 5,
        backgroundColor: "#311b6b",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 20,
        padding: 16,
    },
    goalItem: {
        marginVertical: 10,
        backgroundColor: "#fff",
        fontWeight: "bold",
        borderRadius: 6,
    },
    pressable: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    goalText: {
        color: "#120438",

    },
});
