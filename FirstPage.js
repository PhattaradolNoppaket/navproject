import { View, Text, Button, SafeAreaView } from "react-native";

import { styles } from "../components/styles";

const FirstPage = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textTopStyle}>This is the First Page</Text>
        <View style={{ marginTop: 10 }}>
          <Button
            title="Go To second page"
            onPress={() => navigation.navigate("Second Page")}
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
        <View style={{ position: "absolute", bottom: 10 }}>
          <Text style={styles.textBottomStyle}>
            Thai-Nichi institute of Technology
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default FirstPage;
