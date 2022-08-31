import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../components/styles";

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTopStyle}>This is Third Page</Text>
      <View style={{marginBottom: 10}}>
        <Button
          title="Go to first page"
          onPress={() => navigation.navigate("First Page")}
          color="blue"
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button
          title="Go to second page"
          onPress={() => navigation.navigate("Second Page")}
          color="blue"
        />
      </View>
      <View style={{ position: "absolute", bottom: 10 }}>
        <Text style={styles.textBottomStyle}>
          Thai-Nichi institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
