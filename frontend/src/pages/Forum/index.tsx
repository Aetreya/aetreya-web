import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPost } from '../../services/post.services';
import { ApiResponse } from '../../types/apiResponse';
import { PostData } from '../../types/postData';
import Post from './Post';

export default function Forum() {
  const [posts, setPosts] = useState<null | PostData[]>(null);

  useEffect(() => {
    getAllPost().then((res: ApiResponse<PostData[]>) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Forum Komunitas Aetreya</h1>
      <Link to="/forum/posts/create">Buat post baru</Link>
      <h2>Semua Post</h2>
      <Post data={posts} />
    </div>
  );
}
