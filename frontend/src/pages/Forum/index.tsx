import Post from './Post';

export default function Forum() {
  return (
    <div>
      <h1>Ini Forum</h1>
      <h2>All Post</h2>
      <Post index={1} picture="ini gambar1" />
      <Post index={2} picture="Ini gambar2" />
    </div>
  );
}
