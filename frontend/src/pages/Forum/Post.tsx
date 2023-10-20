import { PostData } from '../../types/postData';

export default function Post(props: { data: PostData[] | null }) {
  const { data } = props;

  return (
    <div>
      {data &&
        data.map((value) => (
          <div key={value.id}>
            <h2>{value.title}</h2>
            <p>{value.body}</p>
            <p>{value.username}</p>
          </div>
        ))}
    </div>
  );
}
