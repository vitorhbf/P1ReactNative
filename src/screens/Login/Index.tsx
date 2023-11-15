import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import logo from "../../img/santanderLog.png";
import location from "../../img/location.png";
import seta from "../../img/seta.png";



export const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTopo}>
                {/* Seção da Esquerda */}
                <TouchableOpacity style={styles.leftSection}>
                    <Image style={styles.setaImg} source={seta} />
                </TouchableOpacity>

                {/* Seção do Meio */}
                <View style={styles.middleSection}>
                    <Image style={styles.image} source={logo} />
                    <Text style={styles.textlogo}>Santander</Text>
                </View>

                {/* Seção da Direita */}
                <TouchableOpacity style={styles.rightSection}>
                    <Image style={styles.locationImage} source={location} />
                </TouchableOpacity>
            </View>
            {/* container */}
            <View>
                <Text style={styles.textoInicial}>Acessar sua conta</Text>
                <Text style={styles.texto2}>CPF</Text>
                <TextInput style={styles.textInput} ></TextInput>
                <View style={styles.underline} />
                <View  >
                    <Text style={styles.texto2}>Lembrar meu CPF</Text>
                    <View style={styles.container2}>
                        <View style={styles.circle} />
                        <View style={styles.circle2} />
                    </View>
                    <Text style={styles.texto2}>Senha</Text>
                    <TextInput style={styles.textInput} ></TextInput>
                    <View style={styles.underline} />
                    <Text style={styles.texto2}>Habilitar acesso com digital</Text>
                    <View style={styles.container2}>
                        <View style={styles.circle} />
                        <View style={styles.circle2} />
                    </View>
                    <Text style={styles.textoFinal}>Esqueci Minha senha</Text>
                </View>

            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

 
