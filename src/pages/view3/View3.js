import "./View3.css";
import ViewWrapper from "../../components/ui/viewWrapper/ViewWrapper";
import Input from "../../components/ui/input/Input";
import { useEffect, useState } from "react";
import Textarea from "../../components/ui/textarea/Textarea";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  fetchingStart,
  fetchError,
  getCompanyDetails,
} from "../../redux/userSlice";

const View3 = () => {
  const { companyDetails } = useSelector((state) => state.user);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [values, setValues] = useState({
    companyName: companyDetails?.companyName || "",
    companyInfo: companyDetails?.companyInfo || "",
    companyRegDate: companyDetails?.companyRegDate || "",
  });

  const allValues = { companyLogo: selectedFile, ...values };
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // Using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    setFileError(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fileError, setFileError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (companyDetails) return navigate("/onboarding/4");
    if (!selectedFile) {
      setFileError(true);
      return;
    }
    dispatch(fetchingStart());
    try {
      const res = await axios.post(
        "https://fetest.kodeia.com/api/3",
        allValues
      );
      dispatch(
        getCompanyDetails({
          response: res.data.data.id,
          companyLogo: preview,
          ...values,
        })
      );
      navigate("/onboarding/4");
    } catch (err) {
      dispatch(fetchError(err.message));
    }
  };
  return (
    <ViewWrapper>
      <div className="view3">
        <div className="view3-content">
          <div className="text-container">
            <h2>Company Details</h2>
            <p>
              Add useful details about your company. You can edit this later.
            </p>
          </div>
          <form
            onSubmit={submitHandler}
            id="view3-form"
            className="view3__input--container"
          >
            <div className="image-upload">
              <label htmlFor="file-input">
                {selectedFile ? (
                  <img
                    className="upload-image"
                    src={preview}
                    alt="upload-Img"
                  />
                ) : (
                  <BackupOutlinedIcon className="upload-icon" />
                )}
              </label>
              <input
                id="file-input"
                type="file"
                name="logo"
                onChange={onSelectFile}
                accept="image/png, image/jpeg, image/gif"
              />
            </div>
            <div className="logo-texts flex-column">
              <p error={fileError.toString()}>Upload your company logo</p>
              <span>File Size cannot exceed 2MB</span>
            </div>
            <Input
              placeholder={"Company Name"}
              type={"text"}
              name={"companyName"}
              onChange={onChange}
              errorMessage={"Name is required"}
              required={companyDetails ? false : true}
              value={values.companyName}
            />
            <Textarea
              placeholder={"Company description..."}
              type={"text"}
              name={"companyInfo"}
              onChange={onChange}
              errorMessage={"Description should be betwen 10 to 50 characters"}
              required={companyDetails ? false : true}
              pattern="\w{10,50}"
              value={values.companyInfo}
            />
            <input
              className="view3-datePicker"
              placeholder={"Company registration date"}
              type={"date"}
              name={"companyRegDate"}
              onChange={onChange}
              required={companyDetails ? false : true}
              value={values.companyRegDate}
            />
          </form>
        </div>
      </div>
    </ViewWrapper>
  );
};

export default View3;
