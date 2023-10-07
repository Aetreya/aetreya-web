import { Link } from 'react-router-dom';
import './home.css';
import useAuth from '../../hooks/useAuth';
import FlasherMessage from '../../components/FlasherMessage';

export default function Home() {
  const authorized = useAuth();

  return (
    <>
      <div className="container">
        <h1>Selamat datang di Aetreya</h1>
        <section>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ipsa
            nihil ipsum nostrum blanditiis explicabo! Iure excepturi eius
            perspiciatis atque sit nostrum perferendis nisi fugit eligendi ex
            aliquid, velit nihil?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Consequatur praesentium, harum facilis amet culpa
            voluptates omnis consectetur quidem dignissimos odio rerum ea in
            nostrum porro itaque quibusdam vero qui maxime.
          </p>
        </section>
        <section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            corrupti, voluptatum commodi, odit nemo velit dolore voluptatibus
            non sed asperiores quo reiciendis repellat veritatis modi fugiat
            aperiam atque, omnis nisi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum cum sunt aut, deserunt velit accusamus, sint
            deleniti tenetur perferendis impedit qui voluptate dolores ratione
            atque beatae hic repellendus quam explicabo.
          </p>
        </section>
        {authorized ? (
          <section className="notice">
            <p>Anda dapat mulai berdiskusi</p>
            <Link to="/forum" className="text-link">
              Forum
            </Link>
          </section>
        ) : (
          <section className="notice">
            <p>Silakan buat akun untuk mulai membuat postingan</p>
            <Link to="/auth/register" className="text-link">
              Daftar
            </Link>
          </section>
        )}
      </div>
      <FlasherMessage />
    </>
  );
}
