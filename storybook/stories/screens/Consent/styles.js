import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: { flex: 1, backgroundColor: "#0067ae" },
  TopSpace: { flex: 4, alignItems: "center", justifyContent: "center" },
  TopTextSpace: { flex: 4 },
  TopTextStyle: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    color: "#ffffff"
  },
  Seperator: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    opacity: 0.8,
    margin: "5%",
    flex: 1
  },
  ConsentTextSpace: { flex: 0.5, marginLeft: "5%" },
  ConsentText: { color: "#fff", fontSize: 20, fontWeight: "500" },
  TermsSpace: { flex: 5, flexDirection: "column", marginBottom: "15%" },
  TermsItem: { flex: 1, flexDirection: "row", margin: "5%" },
  ItemTextSpace: { flex: 8 },
  ItemCheckBoxSpace: { flex: 1 },
  ItemText: { color: "#fff", fontSize: 20, fontWeight: "300" },
  ItemCheckBox: {},
  MainLogoStyles: { alignSelf: "center" },
  SubmitButtonSpace: { flex: 0.9 }
});
export default styles;
