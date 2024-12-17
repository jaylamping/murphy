import { View, Text } from 'react-native';
import { Post } from '@/types/Post';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { PostCardActions } from './PostCardActions';

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
                uri: post.thumbnail.replace(/&amp;/g, '&'),
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.center}
            />
          )}
        </View>
        <PostCardActions post={post} />
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default PostCard;
