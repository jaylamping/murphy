import { View, Text } from 'react-native';
import { Post } from '@/types/Post';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.textContent}>
            <View style={styles.header}>
              <Text style={styles.subreddit}>
                {post.subreddit_name_prefixed}
              </Text>
            </View>
            <Text style={styles.title} numberOfLines={3} ellipsizeMode='tail'>
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
        <View style={styles.actions}>
          <Text>{post.num_comments} comments</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default PostCard;
