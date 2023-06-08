import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "components/LogoHeader/index";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./actions";
import { State } from "redux-saga/reducers";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  repass: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  displayName: yup.string().required()
});

export interface RegisterForm {
  username: string;
  password: string;
  repass: string;
  displayName: string;
  avatarUrl: string;
}

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerResult = useSelector((state: State) => state.registerResult);

  useEffect(() => {
    if (registerResult && registerResult.success) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    }
  }, [registerResult]);

  const handleSubmit = (values: RegisterForm) => {
    dispatch(register(values));
  };
  return (
    <div className="register">
      <Header />
      <Formik
        validationSchema={schema}
        initialValues={{
          username: "",
          password: "",
          repass: "",
          displayName: "",
          avatarUrl:
            "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <input
              name="displayName"
              type="text"
              onChange={handleChange("displayName")}
              onBlur={handleBlur("displayName")}
              value={values.displayName}
              placeholder="Họ tên"
              className={`input ${errors.displayName && "error"}`}
            />
            {errors.displayName && (
              <div className="feedback">Hãy nhập họ tên của bạn.</div>
            )}
            <input
              name="username"
              type="username"
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              placeholder="Tên đăng nhập"
              className={`input ${errors.username && "error"}`}
            />
            {errors.username && (
              <div className="feedback">Hãy nhập tên đăng nhập của bạn.</div>
            )}
            <input
              type="password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              name="password"
              placeholder="Mật khẩu"
              className={`input ${errors.password && "error"}`}
            />
            {errors.password && (
              <div className="feedback">Hãy điền mật khẩu của bạn</div>
            )}
            <input
              type="password"
              onChange={handleChange("repass")}
              onBlur={handleBlur("repass")}
              value={values.repass}
              name="repass"
              placeholder="Xác nhận mật khẩu"
              className={`input ${errors.repass && "error"}`}
            />
            {errors.repass && (
              <div className="feedback">Mật khẩu không trùng khớp</div>
            )}
            <button
              type="submit"
              className={`button ${isValid && "valid"}`}
              disabled={!isValid}
            >
              Đăng ký
            </button>
          </form>
        )}
      </Formik>
      <div className="register">
        <div>
          Đã có Tài khoản?{" "}
          <Link className="link" to="/login">
            Đăng nhập
          </Link>
        </div>
      </div>
      <div className="policy">
        Bằng cách tiếp tục, bạn đồng ý với{" "}
        <a
          className="link"
          href="https://policy.pinterest.com/vi/terms-of-service"
        >
          Điều khoản dịch vụ
        </a>{" "}
        của Pinterest và xác nhận rằng bạn đã đọc{" "}
        <div>
          <a
            className="link"
            href="/https://policy.pinterest.com/vi/privacy-policy"
          >
            Chính sách Quyền riêng tư
          </a>{" "}
          của chúng tôi
        </div>
      </div>
    </div>
  );
};

export default Register;
