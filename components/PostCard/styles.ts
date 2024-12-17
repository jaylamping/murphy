import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContent: {
    flex: 1,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  subreddit: {
    fontSize: 13,
    paddingBottom: 4,
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
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '97%',
    alignSelf: 'center',
  },
});
