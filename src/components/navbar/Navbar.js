import "./Navbar.css";
import logoLight from "../../imgs/logos/logo/logo.svg";
import logoDark from "../../imgs/logos/logo/logo-dark.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import ProgressBar from "../ui/progressBar/ProgressBar";
import { Link, useLocation } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import StepsDropdown from "./StepsDropdown";
import { setAppMode } from "../../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const currentLevel = +location.pathname.slice(-1);
  const [profileOpen, setProfileOpen] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.app);
  const modeStyles = {
    height: "2.6rem",
    width: "2.6rem",
    color: "#ffb62e",
  };

  const stepsData = [
    { step: 1, text: "Select Strategy" },
    { step: 2, text: "Login" },
    { step: 3, text: "Company Details" },
    { step: 4, text: "Select Services" },
    { step: 5, text: "Finalizing" },
  ];

  const currentLevelText = stepsData.filter((el) => el.step === currentLevel)[0]
    ?.text;
  return (
    <div className="nav" dark={isDarkMode.toString()}>
      <div className="nav-content">
        <div className="nav-left">
          <Link to={"/"}>
            <div className="nav-logo">
              <img src={isDarkMode ? logoDark : logoLight} alt="logo" />
            </div>
          </Link>
          <div className="nav-dropdown nav__dropdown--type flex-row">
            <div className="nav__dropdown--text">
              <p>{`Step ${currentLevel}:`}</p>
              <span>{currentLevelText}</span>
            </div>
            <div
              onClick={() => {
                setStepsOpen(!stepsOpen);
              }}
              className="nav__dropdown--button nav__dropdown--type flex-row"
            >
              <ArrowForwardIosIcon
                style={{ height: "1.3rem", width: "1.3rem" }}
              />
            </div>
            {stepsOpen && <StepsDropdown currentLevel={currentLevel} />}
          </div>
        </div>
        <div className="nav-right">
          <div
            onClick={() => {
              dispatch(setAppMode(!isDarkMode));
            }}
            data-mode={isDarkMode.toString()}
            className="nav-mode flex-row"
          >
            {!isDarkMode && <LightModeIcon style={modeStyles} />}
            {isDarkMode && <DarkModeIcon style={modeStyles} />}
          </div>
          <div className="nav-profile flex-row">
            <div className="nav__profile--avatar">
              <img src="https://via.placeholder.com/150x150" alt="avatar" />
            </div>
            <div
              onClick={() => {
                setProfileOpen(!profileOpen);
              }}
              className="nav__dropdown--button nav__dropdown--profile flex-row"
            >
              <ArrowForwardIosIcon
                style={{ height: "1.3rem", width: "1.3rem" }}
              />
            </div>
            {profileOpen && <ProfileDropdown />}
          </div>
        </div>
      </div>

      <ProgressBar steps={5} currentLevel={currentLevel} />
    </div>
  );
};

export default Navbar;
