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
    paddingBottom:10
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
  menu:{
    width: 40,
    height: 40,
    flexDirection: "row",
  },
  imgCentro:{
    width: 'auto',
    height: 400,
    
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
  imgEntrar:{
    marginTop: 20,
    width: 30,
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
