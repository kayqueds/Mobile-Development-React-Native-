// Componente de Login

import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Input } from "../components/input";

export const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  return (
    <View style={styles.container}>
    <Input 
    label='Email 🥸'
    setValue={setEmail}
    value={email}
    />      
    <Input 
    label='Senha 🔐'
    setValue={setSenha}
    value={senha}
    />      
    </View>
  );
};

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
