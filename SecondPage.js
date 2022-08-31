import { View, Text, SafeAreaView , Button} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../components/styles";

const SecondPage = ({ navigation, route }) => {
  const [screenText, setScreenText] = useState("");

  useEffect(() => {
    if (route.params?.insert) {
      //Post updated
      setScreenText(route.params.insert);
    }
  }, [route.params?.insert]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTopStyle}>This is Second Page</Text>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go To First page"
          onPress={() => navigation.navigate("First Page")}
          color="blue"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go To third page"
          onPress={() => navigation.navigate("Third Page")}
          color="blue"
        />
      </View>
      <View style={{position: "absolute", bottom: 10}}>
          <Text style={styles.textBottomStyle}>Thai-Nichi institute of Technology</Text>
        </View>
    </SafeAreaView>
  );
};

export default SecondPage;
