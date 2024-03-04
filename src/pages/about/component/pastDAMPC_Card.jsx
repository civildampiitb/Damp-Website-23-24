import img from "../../../assets/image-2.png";
import style from "../component/../about.module.css";

export const PastCoordinator = ({ name, year, img }) => {
  return (
    <div className="person" style={{ "--color": "#020029" }}>
      <div className="container-team">
        <div className="conianer-inner">
          <div className="circle"></div>
          <img src={img} />
        </div>
      </div>
      <div className="divider"></div>
      <h4 className="text-black font-medium mt-2">{name}</h4>
      <p className="font-medium">{year}</p>
      <div className="social-icons mt-2">
        <a
          href="https://www.linkedin.com/in/ishit-garg-a4120b201/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" style={{ color: "black" }}></i>
        </a>
        <a
          href="https://www.instagram.com/ishit_16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" style={{ color: "white" }}></i>
        </a>
      </div>
    </div>
  );
};
