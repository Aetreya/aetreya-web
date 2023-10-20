import { FormEvent } from 'react';
import { useCookies } from 'react-cookie';
import { PostData } from '../../../types/postData';
import { createPost } from '../../../services/post.services';

export default function CreatePost() {
  const [cookie] = useCookies(['token']);
  const { token } = cookie;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: PostData = {
      title: e.currentTarget.post_title.value,
      body: e.currentTarget.post_body.value,
    };

    createPost(token, data)
      .then(() => {
        alert('Berhasil membuat post');
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container">
      <div>Buat postingan baru</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post_title">
          Judul
          <input id="post_title" name="post_title" type="text" required />
        </label>
        <label htmlFor="post_body">
          Isi
          <textarea id="post_body" name="post_body" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
