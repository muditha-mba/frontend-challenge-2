import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./ProfileDropdown.css";

const profileIconStyle = {
  width: "1.9rem",
  height: "1.9rem",
  marginRight: "0.8rem",
};

const ProfileDropdown = () => {
  return (
    <div className="profile-dropdown">
      <div className="name">Erik Kovalsky</div>
      <div className="item">
        <PersonOutlineIcon style={profileIconStyle} />
        <span>Profile</span>
      </div>
      <div className="item">
        <EditOutlinedIcon style={profileIconStyle} />
        <span>Edit Profile</span>
      </div>
      <div className="item">
        <ViewInArIcon style={profileIconStyle} />
        <span>Projects</span>
      </div>
      <div className="item">
        <SettingsOutlinedIcon style={profileIconStyle} />
        <span>Settings</span>
      </div>
      <hr />
      <div className="item">
        <LogoutOutlinedIcon style={profileIconStyle} />
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default ProfileDropdown;
