import Post from './Post';

export default function Forum() {
  return (
    <div className="container">
      <h1>Forum Komunitas Aetreya</h1>
      <h2>All Post</h2>
      <Post index={1} picture="<h1>ini gambar1</h1>" />
      <Post index={2} picture="Ini gambar2" />
    </div>
  );
}
