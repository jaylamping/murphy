import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Murphy</Text>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </ScrollView>
    </View>
  );
}
