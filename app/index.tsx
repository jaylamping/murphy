import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  AppState,
  RefreshControl,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { PostCard } from '@/components/PostCard';
import { useFetchFrontPage } from '@/api/fetchFrontPage';
import FastImage from 'react-native-fast-image';

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
    loading: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  /* State */
  const [refreshing, setRefreshing] = useState(false);

  /* Refs */
  const appState = useRef(AppState.currentState);

  /* API Hooks */
  const { data, isLoading, refetch } = useFetchFrontPage();

  /* Refetch on App State Change */
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // App has come to the foreground
        refetch();
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [refetch]);

  /* Preload Thumbnails */
  useEffect(() => {
    if (data) {
      const urls = data.data.children
        .map((post) => post.data.thumbnail)
        .filter((url) => url && url.startsWith('http'));

      FastImage.preload(urls.map((uri) => ({ uri })));
    }
  }, [data]);

  /* Helper Functions */
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  /* Render */
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          data?.data.children.map((post) => (
            <PostCard post={post.data} key={post.data.id} />
          ))
        )}
      </ScrollView>
    </View>
  );
}
