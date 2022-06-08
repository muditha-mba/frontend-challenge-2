import "./View2.css";
import ViewWrapper from "../../components/ui/viewWrapper/ViewWrapper";
import login from "../../imgs/login.jpg";
import Input from "../../components/ui/input/Input";
import { useState } from "react";
import axios from "axios";
import { fetchingStart, loginSuccess, fetchError } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const View2 = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (currentUser) return navigate("/onboarding/3");
    dispatch(fetchingStart());
    try {
      const res = await axios.post("https://fetest.kodeia.com/api/2", values);
      dispatch(loginSuccess(res.data.data.id));
      console.log(res);
      navigate("/onboarding/3");
    } catch (err) {
      dispatch(fetchError(err.message));
    }
  };

  return (
    <ViewWrapper>
      <div className="view2">
        <div className="view2-content">
          <div className="text-container">
            <h2>Please Log In</h2>
            <p>You should be logged in to reach the next level</p>
          </div>
          <div className="img-container">
            <img src={login} alt="login" />
          </div>
          <form
            onSubmit={submitHandler}
            id="view2-form"
            className="input-container"
          >
            <Input
              placeholder={"Email"}
              type={"email"}
              name={"email"}
              onChange={onChange}
              errorMessage={"Please provide a valid Email."}
              required={currentUser ? false : true}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <Input
              placeholder={"Password"}
              type={"password"}
              name={"password"}
              onChange={onChange}
              errorMessage={"Password should be between 8 to 20 characters"}
              required={currentUser ? false : true}
              pattern="\w{8,20}"
            />
          </form>
        </div>
      </div>
    </ViewWrapper>
  );
};

export default View2;
