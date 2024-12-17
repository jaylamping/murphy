import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 85,
    height: 85,
    borderRadius: 6,
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  subreddit: {
    fontSize: 12,
    color: 'gray',
  },
  title: {
    fontSize: 16,
    flexShrink: 1,
    flex: 1,
    maxWidth: '100%',
    paddingRight: 12,
  },
  selftext: {
    fontSize: 12,
    flexWrap: 'wrap',
  },
});
