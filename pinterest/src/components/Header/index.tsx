import React, { createRef, RefObject, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { ReactComponent as Setting } from "assets/svg/setting.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import { ReactComponent as Back } from "assets/svg/back.svg";
import { ReactComponent as Edit } from "assets/svg/edit.svg";
import { ReactComponent as Share } from "assets/svg/share.svg";
import "./styles.scss";

interface HeaderProps {
  inSearch?: boolean;
  inBoard?: boolean;
  inPin?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
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

  if (props.inBoard || props.inPin) {
    return (
      <div className="headerCom">
        <div className="back">
          <Back
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <Share className="icon" />
        {!props.inPin && (
          <>
            <div style={{position: "relative"}}>
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
        {props.inPin && <div className="save">Lưu</div>}
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
        <input type="text" className="text" placeholder="Tìm kiếm" ref={ref} />
      </div>
      {!props.inSearch && (
        <>
          <Add
            className="icon"
            onClick={() => {
              props.setIsOpen && props.setIsOpen(true);
            }}
          />
          <Setting className="icon" />
        </>
      )}
    </div>
  );
};

export default Header;
