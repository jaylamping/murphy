import { PostCard } from '@/components/PostCard';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Inbox() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>hi</Text>
      </ScrollView>
    </View>
  );
}
