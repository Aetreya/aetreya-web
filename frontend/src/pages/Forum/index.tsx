import Post from './Post';

export default function Forum() {
  return (
    <div>
      <h1>Ini Forum</h1>
      <h2>All Post</h2>
      <Post index={1} picture="<h1>ini gambar1</h1>" />
      <Post index={2} picture="Ini gambar2" />
    </div>
  );
}
