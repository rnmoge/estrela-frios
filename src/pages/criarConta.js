import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import api from "../services/api";
import { onSignIn } from "../auth";
import { styles } from "../styles";
import { connect } from "react-redux";
var imgfundo = require("../res/img/fundo_estrelas_branco.png");
import { showMessage, hideMessage } from "react-native-flash-message";

class CriarConta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      confSenha: "",
      codConf:0,
    };
  }
 

  proximo = () => {
    if (
      this.state.email !== "" &&
      this.state.senha !== "" &&
      this.state.confSenha !== ""
    ) {
      if (this.state.senha === this.state.confSenha) {
        this.props.navigation.navigate("CadDadosCliente", this.state);
      } else {
        showMessage({
          message: "Erro ao cadastrar",
          description : "Senhas não conferem " , 
          type: "warning",
          icon: "auto",
          duration:5000,

        });
      }
    } else {
      showMessage({
        message: "Erro ao cadastrar",
        description: "Preencha todos os campos",
        type: "warning",
        icon: "auto",
        duration:5000,

      });
    }
  };

  
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={imgfundo}
          style={{ width: "100%", height: "100%" }}
        >
          <KeyboardAvoidingView
            style={styles.imageBackground}
            behavior="padding"
          >
            <View style={styles.block}>
              <Text style={styles.title}>Criar Conta</Text>
              <Text style={styles.txt}>
                Para criar uma conta digite um email e senha validos
              </Text>
              <TextInput
                style={styles.textImputs}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
                defaultValue={this.state.email}
                placeholder=" Digite seu Email"
                placeholderTextColor="#808080"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.textImputs}
                onChangeText={text => {
                  this.setState({ senha: text });
                }}
                defaultValue={this.state.senha}
                placeholder=" Digite sua Senha"
                placeholderTextColor="#808080"
                secureTextEntry={true}
              />
              <TextInput
                style={styles.textImputs}
                onChangeText={text => {
                  this.setState({ confSenha: text });
                }}
                defaultValue={this.state.confSenha}
                placeholder=" Confirme sua Senha"
                placeholderTextColor="#808080"
                secureTextEntry={true}
              />
              <View style={styles.blockButtons}>
                <TouchableOpacity
                  style={styles.buttons2}
                  onPress={() => {
                    this.proximo();
                  }}
                >
                  <Text style={styles.txtButton}>Criar Conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  data: state.criarContaReducer
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: product => dispatch({ type: "ADD_TO_CART", payload: product })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CriarConta);
