import "./View4.css";
import ViewWrapper from "../../components/ui/viewWrapper/ViewWrapper";
import Service from "../../components/service/Service";
import { useState } from "react";
import { findEdidedFields } from "../../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchingStart,
  getSelectedServices,
  getCompanyDetails,
  fetchError,
} from "../../redux/userSlice";
import axios from "axios";
import { initialState } from "../../utils/servicesData";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

const View4 = () => {
  const { services } = useSelector((state) => state.user);
  const [values, setValues] = useState(
    services ? services.servicesState : initialState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setIsChecked = (isChecked, name) => {
    setValues({ ...values, [name]: !isChecked });
  };

  const selectedServices = findEdidedFields(values);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (services) return navigate("/onboarding/5");
    dispatch(fetchingStart());
    try {
      const res = await axios.post(
        "https://fetest.kodeia.com/api/4",
        selectedServices
      );
      dispatch(
        getSelectedServices({
          response: res.data.data.id,
          servicesState: values,
          selectedServices,
        })
      );
      navigate("/onboarding/5");
    } catch (err) {
      dispatch(fetchError(err.message));
    }
  };

  const dummyImage = "https://via.placeholder.com/150x150";

  const restartHandler = (e) => {
    e.preventDefault();
    dispatch(getSelectedServices(null));
    dispatch(getCompanyDetails(null));
    navigate("/onboarding/3");
  };

  return (
    <ViewWrapper>
      <div className="view4 flex-column">
        <div className="view4-headings">
          <h2>What services will you be using?</h2>
          <p>Choose a set of services that you'll be using in your company.</p>
        </div>
        <div className="view4__button--container">
          <button
            onClick={restartHandler}
            className="main__button--purple flex-row"
          >
            <RestartAltOutlinedIcon
              style={{ marginRight: "0.2rem", fontSize: "2rem" }}
            />
            Start Over
          </button>
        </div>
        <form
          onSubmit={submitHandler}
          id="view4-form"
          className="view4-content flex-row"
        >
          <div className="col">
            <Service
              name={"illustrator"}
              isChecked={values.illustrator}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Illustrator"}
              description={"Design Software"}
            />
            <Service
              name={"photoshop"}
              isChecked={values.photoshop}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Photoshop"}
              description={"Editing Software"}
            />
            <Service
              name={"figma"}
              isChecked={values.figma}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Figma"}
              description={"Wireframe Software"}
            />
            <Service
              name={"taiga"}
              isChecked={values.taiga}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Taiga"}
              description={"Scrumboard"}
            />
          </div>
          <div className="col">
            <Service
              name={"adobeXD"}
              isChecked={values.adobeXD}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Adobe XD"}
              description={"Design Software"}
            />
            <Service
              name={"invision"}
              isChecked={values.invision}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Invision"}
              description={"Editing Software"}
            />
            <Service
              name={"jira"}
              isChecked={values.jira}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Jira"}
              description={"Issue Tracker"}
            />
            <Service
              name={"slack"}
              isChecked={values.slack}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Slack"}
              description={"Management App"}
            />
          </div>
          <div className="col">
            <Service
              name={"asana"}
              isChecked={values.asana}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Asana"}
              description={"Task Manager"}
            />
            <Service
              name={"teamwork"}
              isChecked={values.teamwork}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Teamwork"}
              description={"Collaborative App"}
            />
            <Service
              name={"github"}
              isChecked={values.github}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"GitHub"}
              description={"Code Repository"}
            />
            <Service
              name={"gitlab"}
              isChecked={values.gitlab}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"GitLab"}
              description={"Code Repository"}
            />
          </div>
          <div className="col">
            <Service
              name={"atlassian"}
              isChecked={values.atlassian}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Atlassian "}
              description={"Point Solutions"}
            />
            <Service
              name={"freshworks"}
              isChecked={values.freshworks}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Freshworks"}
              description={"Management Tool"}
            />
            <Service
              name={"salesforce"}
              isChecked={values.salesforce}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Salesforce"}
              description={"Financial Services"}
            />
            <Service
              name={"zoho"}
              isChecked={values.zoho}
              setIsChecked={setIsChecked}
              image={dummyImage}
              heading={"Zoho"}
              description={"Business Tools"}
            />
          </div>
        </form>
      </div>
    </ViewWrapper>
  );
};

export default View4;
