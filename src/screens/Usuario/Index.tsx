import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import logo from "../../img/santanderLog.png";
import menu from "../../img/menuHamburger.png";
import chat from "../../img/chat.png";
import dedo from "../../img/dedo.png";
import sino from "../../img/sino.png";
import pessoa from "../../img/pessoa.png";
import dinheiro from "../../img/dinheiro.png";
import setaBaixo from "../../img/setaBaixo.png";
import nota from "../../img/nota.png";
import pix from "../../img/pix.png";
import code from "../../img/code.png";
import card from "../../img/cartao.png";



export const User = () => {
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
          <Image style={styles.rightImage} source={chat} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.rightSection}>
          <Image style={styles.rightImage} source={sino} />
        </TouchableOpacity>


      </View>
      <View style={styles.containerTopo2}>
        <Text style={styles.textTop} >Olá Vitor</Text>
        <Text style={styles.textTop2} >Ag 0725 Cc 01032589-5</Text>
      </View>

      {/* container */}
      <View >
        <TouchableOpacity style={styles.buttonCentro} >
          <Image style={styles.imgCentro} source={pessoa} />
          <Text style={styles.buttonText} >Pra saber quais investimentos combinam com você</Text>
        </TouchableOpacity>
      </View>

      {/* Button Saldo Disponível */}
      <TouchableOpacity style={styles.ButtonSaldo}>
        <Image style={styles.image} source={dinheiro} />
        <Text style={styles.textSaldo} >Saldo Dispoonível</Text>
        <Image style={styles.image} source={setaBaixo} />
      </TouchableOpacity>

      <View style={styles.middleSquareContainer}>
        <TouchableOpacity style={styles.middleSquare}>
          <Image style={styles.imgPix} source={pix} />
          <Text style={styles.textSquare2} >Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleSquare}>
          <Image style={styles.imgEntrar} source={code} />
          <Text style={styles.textSquare2} >Pagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleSquare}>
          <Image style={styles.imgEntrar} source={nota} />
          <Text style={styles.textSquare2} >Transferir</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textCartao}>Cartões</Text>
      </View>

      <TouchableOpacity style={styles.ButtonSaldo}>
        <Image style={styles.image} source={card} />
        <Text style={styles.textSaldo} >Meus Cartões</Text>
        <Image style={styles.image} source={setaBaixo} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonCardOnline}>
        <Text style={styles.textCardOnline} >Cartão Online</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerBotton}>
        <View style={styles.teste}>
        </View>
        <Image style={styles.imgClick} source={dedo} />
        <Text style={styles.textClick} >Pagar ou Cobrar</Text>
      </TouchableOpacity>

    </View>
  );
};

