import { View, Text } from 'react-native';
import { Post } from '@/types/Post';
import FastImage from 'react-native-fast-image';
const PostCard = ({ post }: { post: Post }) => {
  return (
    <View>
      <Text>{post.subreddit_name_prefixed}</Text>
      <FastImage
        style={{ width: 100, height: 100 }}
        source={{
          uri: post.thumbnail,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
      />
      <Text>{post.title}</Text>
      <Text>{post.author}</Text>
    </View>
  );
};

export default PostCard;
