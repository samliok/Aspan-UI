import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";

import React, { useState, forwardRef } from "react";
import { theme } from "../..//themes";
const DetailsView = (props) => {
  const account = props.account;
  const name = props.name;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.info}>
          <Text
            style={{
              fontSize: theme.text.title,
              fontWeight: "600",
              textAlign: "center",
            }}
            variant="displayLarge"
          >
            {name}
          </Text>
          <View
            style={{ width: "80%", alignSelf: "center", paddingVertical: 10 }}
          ></View>
          <Image
            style={{ resizeMode: "contain", height: 236, width: "100%" }}
            source={require("../../assets/bank.png")}
          />
          <View style={styles.stat}>
            <Text
              style={{
                fontSize: 36,
                fontWeight: "900",
                textAlign: "center",
              }}
              variant="displayLarge"
            >
              {account.apy}%
            </Text>
            <Text
              style={{
                fontSize: theme.text.paragraph,
                textAlign: "center",
              }}
              variant="displayLarge"
            >
              {account.description}
            </Text>
          </View>
          <View style={styles.group}>
            <View style={styles.groupHeader}>
              <View style={styles.item}>
                <Text
                  style={{
                    fontSize: theme.text.body,
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  Account Description
                </Text>
              </View>
              <View style={styles.item}>
                <Text
                  style={{
                    fontSize: theme.text.paragraph,
                  }}
                  variant="displayLarge"
                >
                  {account.long_description}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ ...styles.group, paddingTop: 0 }}>
            <View style={styles.groupHeader}>
              <View style={styles.item}>
                <Text
                  style={{
                    fontSize: theme.text.body,
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  Risks
                </Text>
              </View>
              <View style={styles.item}>
                <Text
                  style={{
                    fontSize: theme.text.paragraph,
                  }}
                  variant="displayLarge"
                >
                  {account.risks}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            onPress={() => {
              props.deposit();
            }}
          >
            {" "}
            Open Account
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
export default DetailsView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  stat: {
    paddingTop: 20,
    paddingBottom: 10,
    width: "80%",
    alignSelf: "center",
  },
  group: {
    padding: 20,
  },
  groupHeader: {
    paddingBottom: 15,
  },
  groupBody: {
    padding: 10,
  },
  footer: {
    flex: 2,
    width: "100%",
  },
  item: {
    padding: 5,
  },
  info: {
    flex: 10,
    width: "100%",
    paddingVertical: 70,
  },
});
