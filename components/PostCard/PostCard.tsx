import { View, Text } from 'react-native';
import { Post } from '@/types/Post';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
const PostCard = ({ post }: { post: Post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subreddit}>{post.subreddit_name_prefixed}</Text>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
          {post.title}
        </Text>
      </View>
      {post.thumbnail && (
        <FastImage
          style={styles.thumbnail}
          source={{
            uri: post.thumbnail,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
          }}
        />
      )}
    </View>
  );
};

export default PostCard;
