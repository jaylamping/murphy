import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  AppState,
  RefreshControl,
  Platform,
  AppStateStatus,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { PostCard } from '@/components/PostCard';
import { useFetchFrontPage } from '@/api/fetchFrontPage';
import FastImage from 'react-native-fast-image';
import { focusManager } from '@tanstack/react-query';

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
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  /* State */
  const [refreshing, setRefreshing] = useState(false);

  /* Refs */
  const appState = useRef(AppState.currentState);
  const loadMoreRef = useRef(null);

  /* API Hooks */
  const {
    data,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchFrontPage();

  /* Effects */

  // Refetch on App State Change
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  // Preload Thumbnails
  useEffect(() => {
    if (data) {
      const urls = data.pages
        .flatMap((page) => page.data.children)
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

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000;
    if (isCloseToBottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  /* Render */
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onScroll={handleScroll}
        scrollEventThrottle={0}
      >
        {isLoading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          data?.pages
            .flatMap((page) => page.data.children)
            .map((post) => <PostCard post={post.data} key={post.data.id} />)
        )}
        {isFetchingNextPage && (
          <Text style={styles.loading}>Loading more...</Text>
        )}
      </ScrollView>
    </View>
  );
}
