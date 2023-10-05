import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
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
          corrupti, voluptatum commodi, odit nemo velit dolore voluptatibus non
          sed asperiores quo reiciendis repellat veritatis modi fugiat aperiam
          atque, omnis nisi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eum cum sunt aut, deserunt velit accusamus, sint deleniti
          tenetur perferendis impedit qui voluptate dolores ratione atque beatae
          hic repellendus quam explicabo.
        </p>
      </section>
      <section className="notice-signup">
        <p>Silakan buat akun untuk mulai membuat postingan</p>
        <Link to="/signup" className="text-link">
          Daftar
        </Link>
      </section>
    </div>
  );
}

export default Home;
