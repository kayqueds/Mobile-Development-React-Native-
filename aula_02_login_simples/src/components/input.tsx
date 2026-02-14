import { View, Text, TextInput, StyleSheet } from "react-native";
// usando o Typescript
interface IProps {
    label: string,
    setValue: (value: string) => void,
    value: string
}


export const Input = ({label, setValue, value}: IProps) => {
    return (
    <View>
      <Text  style={styles.texto}>{label}</Text>
      <TextInput
        onChangeText={setValue}
        value={value}
        style={styles.styleInput}
      />
    </View>
  );
}
  
// Estilos formato JSON
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontFamily: "Verdana, sans-serif",
    marginBottom: 10,
  },
  styleInput: {
    height: 52,
    width: 200,
    borderWidth: 1,
    borderRadius: 8,
  },
});
