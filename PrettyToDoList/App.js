import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './app/screens/ToDoList';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  return(
    
      <ToDoList/>
    
  );
}


