export default function Post(props: { index: number; picture: string }) {
  const { index, picture } = props;
  return (
    <>
      <p>ini post {index}</p>
      <p>ini isi post {index}</p>
      <p>{picture}</p>
    </>
  );
}
