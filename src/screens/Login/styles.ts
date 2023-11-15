import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  containerTopo: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: "#EC1C24",
    paddingBottom: 10
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  middleSection: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  setaImg: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  textlogo: {
    marginLeft: 10,
    fontSize: 26,
    color: "#FFFFFF",
  },
  locationImage: {
    width: 40,
    height: 40,
    marginLeft: 30,
  },
  menu: {
    width: 40,
    height: 40,
    flexDirection: "row",
  },
  textoInicial: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,

  },
  texto2: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 16
  },
  textInput: {
    height: 40,
    width: 'auto',
    fontSize: 18,
    paddingLeft: 35,
    paddingRight: 35,
  },
  underline: {
    height: 0.2,
    borderBottomWidth: 0.2,
    backgroundColor: '#000',
    marginLeft: 30,
    marginRight: 30,

  },
  middleSquareContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  middleSquare: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    borderRadius: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  middleRight: {
    width: 100,
    height: 100,
    backgroundColor: "#FF0800",
    marginHorizontal: 10,
    borderRadius: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  imgEntrar: {
    marginTop: 20,
    width: 30,
    height: 30,
  },
  textSquare: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  textSquare2: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C0C0C0',
    marginTop: 10
  },
  containerBotton: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    borderRadius: 10,
    paddingBottom: 40,
    position: "relative",
  },
  imgClick: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textClick: {
    fontSize: 16,
    color: "#B31B1B",
  },
  teste: {
    height: 5,
    width: "20%",
    backgroundColor: "#BEBFC5",
    borderRadius: 5,
    position: "absolute",
    top: 0,
    marginTop: 8,

  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 16, // 
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#FF0800',
    marginVertical: 0,
  },
  circle2: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: 'white',
    marginVertical: 0,
    marginLeft: -20,
  },
  textoFinal: {
    marginTop: -10,
    marginLeft: 30,
    fontSize: 18,
    color: '#FF0800',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130
  },
  loginButton: {
    backgroundColor: '#FF0800',
    paddingVertical: 10,
    paddingHorizontal: 140,
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
