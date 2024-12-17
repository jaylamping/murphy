import { View, Text } from 'react-native';
import { styles } from './styles';
import { Post } from '@/types/Post';
import { Ionicons } from '@expo/vector-icons';

const PostCardActions = ({ post }: { post: Post }) => {
  return (
    <View style={styles.actions}>
      <View style={styles.doots}>
        <Ionicons name='arrow-up' size={20} color='black' />
        <Text>{post.score}</Text>
        <Ionicons name='arrow-down' size={20} color='black' />
      </View>
      <Text style={styles.comments}>{post.num_comments} comments</Text>
      <Text style={styles.share}>{''}</Text>
    </View>
  );
};

export default PostCardActions;
