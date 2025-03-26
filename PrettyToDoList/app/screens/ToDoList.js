import React, { useState } from 'react';
import { 
    FlatList, 
    ImageBackground, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View } from 'react-native';
import { IconButton } from 'react-native-paper';

const dummyData = [
    {
        id: "01",
        title: "Wash car"
    },
    {
        id: "02",
        title: "Read a book"
    },

]

const ToDoList = () => {
    // Initialize local states
    const[toDo, setToDo] = useState("");
    const[toDoList, setToDoList] = useState([]);
    const[taskChecked, setTaskChecked] = useState(false);

    // Handle List input 
    const handleListInput = () => {
        setToDoList([...toDoList, {id: Date.now().toString(), title: toDo, taskChecked: false}]);
        setToDo("");
    }

    // Handle Pencil Button
    const handlePencilPressed = () => {
        // handle pencil pressed here
    }

    //Handle Delete Button
    const handleDeletePressed = (id) => {
        // update the list to be all items except the deleted list
        const updatedToDoList = toDoList.filter((toDo)=> toDo.id !== id);
        setToDoList(updatedToDoList);
    }

    // Handle Checkmark button
    const handleTaskCheck = (id) => {
        const updatedToDoList= toDoList.map((item) => {
            if (item.id === id) {
                return {... item, taskChecked: !item.taskChecked};
            }
            return item;
        });

        setToDoList(updatedToDoList);
    }

    // Render input
    const renderListItems = ({item, index}) => {
        return (
            <View style = {styles.addedItemContainer}>
                <View style = {styles.iconContainer}>
                    <IconButton 
                        icon = "pencil" 
                        onPress = {() => handlePencilPressed()} />
                    <IconButton 
                        icon = "trash-can"
                        onPress = {() => handleDeletePressed(item.id)}
                    />
                    <IconButton 
                    icon = {item.taskChecked? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
                    onPress = {() => handleTaskCheck(item.id)}/>
                </View>
                <Text style = {styles.addedItemText}>
                    {item.title}
                </Text>
            </View>
        )
    }

    return (
    <ImageBackground 
        style = {styles.background}
        source = {require("../assets/cute-strawberries.jpg")} >
        <SafeAreaView >
            <Text 
                style = {styles.header}> 
                My To Do List
            </Text>
            <TextInput 
                style = {styles.listInputBox}
                placeholder='Write a task here...'
                placeholderTextColor={"gray"}
                value = {toDo}
                onChangeText={(inputText) => setToDo(inputText)}
            /> 
            <TouchableOpacity 
                style = {styles.addContainer}
                onPress = {() => handleListInput()} >
                <Text style = {styles.addTextContainer}> 
                Add 
                </Text>
            </TouchableOpacity>

            {/* Render to do list items */}
            <FlatList data = {toDoList} renderItem={renderListItems}/>

        </SafeAreaView>
    </ImageBackground>
  )
}

export default ToDoList

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    header: {
        fontSize: 35,
        top: 10,
        margin: "auto",
        fontWeight: "800",
        color: 'darkslateblue',
        backgroundColor: "mistyrose",
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "mistyrose",
        width: "70%",
        textAlign: "center",
    },
    listInputBox: {
        borderWidth: 2,
        borderColor: "mediumslateblue",
        borderRadius: 6,
        paddingVertical: 12,
        width: "90%",
        margin: "auto",
        backgroundColor: "mistyrose",
        marginTop: 30

    },
    addContainer: {
        backgroundColor: "mediumslateblue",
        marginTop: 8,
        borderRadius: 6,
        paddingVertical: 10,
        alignItems: "center",
        width: "90%",
        margin: "auto"
    },
    addTextContainer: {
        fontWeight: "700",
        fontSize: 16,
    },
    addedItemContainer: {
        borderWidth: 2,
        borderColor: "mediumslateblue",
        borderRadius: 6,
        width: "90%",
        margin: "auto",
        backgroundColor: "mistyrose",
        marginTop: 20,
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addedItemText: {
        paddingHorizontal: 12,
        fontWeight: "600",
        fontSize: "15",
    },
    iconContainer: {
        flexDirection: "row",
    },
  
})