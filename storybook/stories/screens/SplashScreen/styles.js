import { StyleSheet, Platform } from "react-native";
// import { Constants } from "expo";
const styles = StyleSheet.create({
  mainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  mainView: {
    flex: 1,
    backgroundColor: "#0067a0",

    margin: "5%"
  },
  logoSpace: { flex: 2 },
  lodaerSpace: { flex: 1 },
  loaderStyle: { alignSelf: "center", flex: 1, margin: "10%" },
  bottomLogoSpace: { flex: 1, justifyContent: "flex-end" },
  logoStyles: { alignSelf: "center" },
  logoStyles2: { alignSelf: "center", height: 40, width: 120 }
});
export default styles;
