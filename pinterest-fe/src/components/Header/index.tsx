import React, { createRef, RefObject, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import { ReactComponent as Back } from "assets/svg/back.svg";
import { ReactComponent as Edit } from "assets/svg/edit.svg";
import "./styles.scss";

interface HeaderProps {
  inSearch?: boolean;
  inBoard?: boolean;
  inPin?: boolean;
  inSetting?: boolean;
  text?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSetting?: React.Dispatch<React.SetStateAction<boolean>>;
  setSave?: React.Dispatch<React.SetStateAction<boolean>>;
  setText?: React.Dispatch<React.SetStateAction<string>>;
  handleUpdate?: () => void;
  handleSearch?: () => void;
}

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const ref: RefObject<HTMLInputElement> = createRef();
  const [selectedImg, setSelectedImg] = useState<File | undefined>(undefined);

  useEffect(() => {
    if (selectedImg)
      navigate(`/board/${boardId}/update`, { state: { img: selectedImg } });
  }, [selectedImg]);

  if (props.inBoard || props.inPin || props.inSetting) {
    return (
      <div className="headerCom">
        <div className={props.inSetting ? `back1` : `back`}>
          <Back
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        {/* <Share className="icon" /> */}
        {props.inSetting && <div className="title">Chỉnh sửa hồ sơ</div>}
        {!props.inPin && !props.inSetting && (
          <>
            <div style={{ position: "relative" }}>
              <Add
                className="icon"
                // onClick={() => {
                //   props.setIsOpen && props.setIsOpen(true);
                // }}
              />
              <input
                id="upload-pin"
                type="file"
                accept="image/*"
                className="img-picker"
                value={props.text}
                onChange={(e) => {
                  if (e.target.files) setSelectedImg(e.target.files[0]);
                }}
              ></input>
            </div>
            <Edit
              className="icon"
              onClick={() => navigate(`/board/${boardId}/edit`)}
            />
          </>
        )}
        {props.inPin && (
          <div
            className="save"
            onClick={() => props.setSave && props.setSave(true)}
          >
            Lưu
          </div>
        )}
        {props.inSetting && (
          <div className="save" onClick={props?.handleUpdate}>
            Xong
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="headerCom">
      <div
        className="search"
        onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
      >
        <Search />
        <input
          type="text"
          className="text"
          placeholder="Tìm kiếm"
          ref={ref}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.handleSearch && props.handleSearch();
            }
          }}
          onChange={(e) => {
            if (props.setText) {
              props.setText(e.target.value);
              // props.handleSearch && props.handleSearch();
            }
          }}
        />
      </div>
      {!props.inSearch && (
        <>
          <Add
            className="icon"
            onClick={() => {
              props.setIsOpen && props.setIsOpen(true);
            }}
          />
          <Setting
            className="icon"
            onClick={() => {
              props.setOpenSetting && props.setOpenSetting(true);
            }}
          />
        </>
      )}
    </div>
  );
};

export default Header;
