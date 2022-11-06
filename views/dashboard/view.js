import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { IconButton, Button } from "react-native-paper";
import { theme } from "../..//themes";
const DashboardView = (props) => {
  const name = props.name;
  const account = props.account;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.general}>
          <Text
            style={{
              fontSize: theme.text.body,
              fontWeight: "300",
            }}
            variant="displayLarge"
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: theme.text.title,
              fontWeight: "600",
            }}
            variant="displayLarge"
          >
            $1,597
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ color: "#2173DF" }}>^ $51</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => {
              props.deposit();
            }}
          >
            Deposit
          </Button>
          <Button style={styles.button} mode="contained" onPress={() => {}}>
            Withdraw
          </Button>
        </View>
      </View>

      <View style={styles.chart}>
        <Image
          style={{ resizeMode: "contain", height: 236, width: "100%" }}
          source={require("../../assets/graph.png")}
        />
      </View>
      <View style={styles.history}>
        <Text
          style={{
            fontSize: theme.text.body,
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          History
        </Text>
      </View>
    </View>
  );
};
export default DashboardView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    borderColor: "#DADADA",
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    width: "100%",
  },
  general: {
    width: "60%",
  },
  header: {
    flex: 2,
    paddingTop: 60,
    flexDirection: "row",
    paddingLeft: 40,
    alignContent: "center",
  },
  chart: {
    flex: 6,
  },
  history: { flex: 10, paddingLeft: 40 },
  button: {
    margin: 3,
  },
});
