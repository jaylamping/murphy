import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doots: {
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  comments: {
    flex: 1,
    textAlign: 'center',
  },
  share: {
    flex: 1,
    textAlign: 'right',
  },
});
