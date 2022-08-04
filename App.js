import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [input, setInput] = useState('');
  const [outputList, setOutput] = useState([]);

  function inputHandler(input) {
    setInput(input)
  }

  function outputHandler() {
    setOutput(currentList => [...currentList, input]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputText} 
        placeholder='Type something here...'
        onChangeText={inputHandler}
        />
        <Button title='CLICK ME!!' onPress={outputHandler} />
      </View>
      <View style={styles.outputContainer}>
        {outputList.map((text) => <Text key={text}>{text}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#000000',
    width: '80%',
    marginRight: 10,
    padding: 10
  },
  outputContainer: {
    flex: 6
  }
});
