import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ButtonPanel.css";
import loadingGif from "../../imgs/loading.gif";
/* className={`buttonPanel ${currentLevel > 1 ? show : hide}`} */
const ButtonPanel = () => {
  const { isFetching } = useSelector((state) => state.user);
  const { isDarkMode } = useSelector((state) => state.app);
  const location = useLocation();
  const currentLevel = +location.pathname.slice(-1);
  let style;
  if (currentLevel > 1 && currentLevel < 5) {
    style = "buttonPanel-show";
  } else {
    style = "buttonPanel-hide";
  }
  const navigate = useNavigate();
  const preHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  /* const nextHandler = (e) => {
    e.preventDefault();
    navigate(`${location.pathname.slice(0, -1)}${currentLevel + 1}`);
  }; */
  return (
    <div dark={isDarkMode.toString()} className={`buttonPanel ${style}`}>
      <button onClick={preHandler}>Previous</button>
      <button form={`view${currentLevel}-form`} type="submit">
        {isFetching ? (
          <img className="loading-gif" src={loadingGif} alt="loading" />
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};

export default ButtonPanel;
