import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>The App of the future</Text>
        <View style={styles.card}>
          <Text style={styles.name}>Pedro Dias</Text>
          <Text style={styles.info}>From Sintra, Portugal. I study Computer Science at FCUL.</Text>
          <Text style={styles.info}>My favourite place in my home town is Palácio da Pena in Sintra.</Text>
        </View>
        <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: "green" }]} />
        <View style={[styles.square, styles.middle,{ backgroundColor: "gold" }]} />
        <View style={[styles.square, { backgroundColor: "red" }]} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
  backgroundColor: "#6a696e4d",
  borderRadius: 100,
  padding: 35,
  marginTop: 10,
},
name: {
  fontWeight: "bold",
  fontSize: 18,
  marginBottom: 6,
},
info: {
  fontSize: 14,
  marginBottom: 4,
},
row: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignSelf: "stretch",
  gap: 8,
  marginTop: 20,
},
square: {
  width: 60,
  height: 60,
},
middle: {
  flex: 1,
},
});