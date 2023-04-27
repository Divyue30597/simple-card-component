import "./App.css";
import QRImage from "./assets/images/image-qr-code.png";

function App() {
  return (
    <div className="card">
      <div className="card-img">
        <picture>
          <img src={QRImage} alt="" />
        </picture>
      </div>
      <div className="card-body">
        <h1> Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
