import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";

function App() {
  const [telaAtual, setTelaAtual] = useState("login");

  return (
    <View style={styles.container}>
      {telaAtual === "login" && <Login navegar={setTelaAtual} />}
      {telaAtual === "cadastro" && <Cadastro navegar={setTelaAtual} />}
      {telaAtual === "esqueceu" && <EsqueceuSenha navegar={setTelaAtual} />}
    </View>
  );
}

export default   function Login({ navegar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Logar" buttonStyle={styles.button} />
      <Button
        title="Cadastre-se"
        buttonStyle={[styles.button, styles.secondaryButton]}
        onPress={() => navegar("cadastro")}
      />
      <TouchableOpacity onPress={() => navegar("esqueceu")}>
        <Text style={styles.link}>esqueceu a senha</Text>
      </TouchableOpacity>
    </View>
  );
}

function Cadastro({ navegar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Cadastrar" buttonStyle={styles.button} />
      <Button
        title="Voltar"
        buttonStyle={[styles.button, styles.secondaryButton]}
        onPress={() => navegar("login")}
      />
    </View>
  );
}

 function EsqueceuSenha({ navegar }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Esqueceu a senha</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Enviar" buttonStyle={styles.button} />
      <Button
        title="Voltar"
        buttonStyle={[styles.button, styles.secondaryButton]}
        onPress={() => navegar("login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor:"#27C08A",
    borderRadius: 25,
    marginVertical: 5,
  },
  secondaryButton: {
    backgroundColor: "#27C08A",
  },
  link: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 14,
    marginTop: 10,
  },
});
