// Página principal

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native";

export const Home = () => {
  const [texto, setTexto] = useState("")
  // lista de strings
  const [list, setList] = useState<string[]>([])  

  const adicionarLista = () => {
    if (texto.length === 0){
        alert('[ERRO] campo de texto não pode  vazio ')
        return
    }
    setList([...list, texto])    
    setTexto('')
    
  }

//   console.log(`Tamnaho do texto: ${texto.length}`)
  return (
    <View style={styles.container}>
      <Text>Olá Mundo! 🗺️</Text>
      <TextInput style={styles.styleInput}
        onChangeText={setTexto}
        value={texto}
        placeholder="Digite um texto"    
      />

      <FlatList 
        data={list}
        renderItem={({item}) => {
            return(
                <View>
                    <Text>{item}</Text>
                </View>
            )
        }}
      />
      <TouchableOpacity onPress={adicionarLista} style={styles.styleButton}>
        <Text style={styles.styleTextButton}>Adicionar +</Text>
      </TouchableOpacity>
    </View>
  );
};
// Estilos, chave e valor (Json)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  styleInput: {
    height: 52,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  styleButton: {
    height: 50,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "darkgreen",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  styleTextButton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
