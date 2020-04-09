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
import {styles} from "../styles";


var imgfundo = require("../res/img/fundo_estrelas_branco.png");

export default class RecuperaSenha extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps='handled'>
        <ImageBackground
          source={imgfundo}
          style={{ width: "100%", height: "100%" }}
        >
          <KeyboardAvoidingView
            style={styles.imageBackground}
            behavior="padding"
          >
            <View style={styles.block}>
              <Text style={styles.title}>Recuperação de senha</Text>
              <Text style={styles.txt}>Para recuperação de senha de usuario digite seu email abaixo</Text>
              <TextInput
                style={styles.textImputs}
                placeholder=" Digite seu Email"
                placeholderTextColor="#808080"
                keyboardType='email-address'
              />
              <View style={styles.blockButtons}>
                <TouchableOpacity style={styles.buttons2} onPress={()=>{}} >
                  <Text style={styles.txtButton}>Enviar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
    );
  }
}
