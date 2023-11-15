import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../TelaInicial/styles";
import logo from "../../img/santanderLog.png";
import location from "../../img/location.png";
import menu from "../../img/menuHamburger.png";
import dimdim from "../../img/dim.png";
import entrar from "../../img/entrar.png";
import lock from "../../img/cadeado.png";
import chat from "../../img/chat.png";
import dedo from "../../img/dedo.png";

export const TelaInicial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTopo}>
        {/* Seção da Esquerda */}
        <TouchableOpacity style={styles.leftSection}>
          <Image style={styles.menu} source={menu} />
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
      <View >
        <Image style={styles.imgCentro} source={dimdim} />
      </View>

      <View style={styles.middleSquareContainer}>
        <TouchableOpacity style={styles.middleSquare}>
          <Image style={styles.imgEntrar} source={chat} />
          <Text style={styles.textSquare2} >Ajuda</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.middleSquare}>
          <Image style={styles.imgEntrar} source={lock} />
          <Text style={styles.textSquare2} >ID Santander</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middleRight}>
          <Image style={styles.imgEntrar} source={entrar} />
          <Text style={styles.textSquare} >Acessar sua conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.containerBotton}>
        <View style={styles.teste}>
        </View>
        <Image style={styles.imgClick} source={dedo} />
        <Text style={styles.textClick} >Pagar ou Cobrar</Text>
      </TouchableOpacity>

    </View>
  );
};

 
