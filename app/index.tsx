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

  /* API Hooks */
  const { data, isLoading, isError } = useFetchFrontPage();

  /* Effects */
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Murphy</Text>
      <ScrollView>
        {data?.data.children.map((post) => (
          <PostCard post={post.data} key={post.data.id} />
        ))}
      </ScrollView>
    </View>
  );
}
