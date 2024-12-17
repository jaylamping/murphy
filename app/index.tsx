import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useEffect } from 'react';
import { PostCard } from '@/components/PostCard';
import { useFetchFrontPage } from '@/api/fetchFrontPage';

export default function Home() {
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

  const { data, isLoading, isError } = useFetchFrontPage();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Murphy</Text>
      <ScrollView>
        <PostCard />
      </ScrollView>
    </View>
  );
}
