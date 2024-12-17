import { View, Text } from 'react-native';
import { Post } from '@/types/Post';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  );
};

export default PostCard;
