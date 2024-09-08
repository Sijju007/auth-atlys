import { posts } from '../../../constants/dummy-posts-data';
import Post from './Post';

type PostsProps = {
  onPostClick: Function;
};

const Posts: React.FC<PostsProps> = ({ onPostClick = () => {} }) => {
  return (
    <>
      {posts.map(
        ({ id, emoji, user, created_at, post, totalComments, isEdited }) => (
          <Post
            key={id}
            emoji={emoji}
            username={user.name}
            userProfileImage={user.profile_img}
            createdAt={created_at}
            post={post}
            totalComments={totalComments}
            isEdited={isEdited}
            onClick={() => onPostClick()}
          />
        )
      )}
    </>
  );
};

export default Posts;
