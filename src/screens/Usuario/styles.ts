import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  containerTopo: {
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    backgroundColor: "#EC1C24",
    paddingBottom:10,
    alignItems:"baseline",
    marginTop: 30
  },
  containerTopo2: {
    flexDirection: 'column',
    height: 90,
    backgroundColor: "#EC1C24",
    paddingBottom:10,
    alignItems:"flex-start",
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
    
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  textTop:{
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
    

  },
  textTop2:{
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
    
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  textlogo: {
    marginLeft: 10,
    fontSize: 26,
    color: "#FFFFFF",
  },
  rightImage: {
    width: 20,
    height: 20,
    marginLeft: 30,
  },
  menu:{
    width: 40,
    height: 40,
    flexDirection: "row",
  },
  buttonCentro: {
    width: 325,
    height: 100,
    backgroundColor: "#fff",
    alignSelf: 'center', 
    marginTop: -30,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center',
    
  },
  buttonText: {
    textAlign: 'center',
    color: '#000', 
    fontSize: 10, 
    marginTop: 0, 
    alignItems: 'center', 
    
  },
  imgCentro:{
    width: 80,
    height: 80,
    marginRight: 10,
  },
  ButtonSaldo:{
    flexDirection: 'row',
    height: 50,
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center', 
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    borderRadius: 10, 
    
  },
  textSaldo:{

    textAlign: 'left',
    fontSize: 18,
    color: '#000',
  },
  middleSquareContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20, 
  },
  middleSquare: {
    width: 105,
    height: 100,
    backgroundColor: "#FFFFFF", 
    marginHorizontal: 10,
    borderRadius: 6,
    justifyContent: 'flex-start', 
    alignItems: 'center',   
  },
  middleRight: {
    width: 105,
    height: 100,
    backgroundColor: "#FF0800", 
    marginHorizontal: 10,
    borderRadius: 6, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    
  },
  imgEntrar:{
    marginTop: 20,
    width: 30,
    height: 30,
  },
  imgPix:{
    marginTop: 20,
    width: 50,
    height: 30,
  },
  textSquare:{
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  textSquare2:{
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C0C0C0',
    marginTop:10
  },
  textCartao:{

    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop:5,
    marginLeft: 10
  },
  textCardOnline:{
    fontSize: 20,
    color: '#CC3333',
  },
    ButtonCardOnline:{
    flexDirection: 'row',
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
    backgroundColor: "#FFFFFF",
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 2, 
    borderColor: "#CC3333",
  },
  containerBotton:{
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
  teste:{
    height: 5,
    width: "20%",
    backgroundColor: "#BEBFC5", 
    borderRadius: 5,
    position: "absolute", 
    top: 0,
    marginTop:8,
    
  }
});

export default styles;
