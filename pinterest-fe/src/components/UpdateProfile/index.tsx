import React, { useEffect, useState } from "react";
import { ProfileInterface as Profile } from "components/Profile";
import { getProfile } from "components/Profile/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from "redux-saga/reducers";
import Header from "components/Header";
import { UPDATE_PROFILE_CLEAR } from "./reducers";
import { createToastSuccess } from "screens/Home/actions";
import { updateProfile } from "./actions";
import "./styles.scss";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedImg, setSelectedImg] = useState<File | undefined>(undefined);
  const [displayName, setDisplayName] = useState<string | undefined>(undefined);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: UPDATE_PROFILE_CLEAR
      });
    };
  }, []);

  const updateProfileResult = useSelector(
    (state: State) => state.updateProfileResult
  );

  useEffect(() => {
    if (updateProfileResult) {
      if (updateProfileResult.success) {
        dispatch(createToastSuccess({ title: "Update profile succeed!" }));
      } else if (updateProfileResult.error) {
        dispatch(createToastSuccess({ title: "Update profile failed!" }));
      }
      navigate("/profile");
    }
  }, [updateProfileResult]);

  const getProfileResult = useSelector(
    (state: State) => state.getProfileResult
  );
  const profile = getProfileResult?.response as unknown as Profile;

  const handleUpdate = () => {
    const payload = {
      selectedImg,
      displayName
    };
    dispatch(updateProfile(payload));
  };

  return (
    <div className="update-profile">
      <Header inSetting handleUpdate={handleUpdate} />
      {profile && (
        <div className="update">
          <img
            src={
              selectedImg ? URL.createObjectURL(selectedImg) : profile.avatarUrl
            }
            className="avatar"
            alt={profile.username}
          ></img>
          <div className="change-btn">
            <div className="change-btn-text">Thay đổi</div>
            <input
              id="upload-pin"
              type="file"
              accept="image/*"
              className="img-change-btn"
              onChange={(e) => {
                if (e.target.files) setSelectedImg(e.target.files[0]);
              }}
            ></input>
          </div>
          <div className="text-place">Tên người dùng</div>
          <input
            className="change-name"
            type="text"
            placeholder={profile.displayName}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
