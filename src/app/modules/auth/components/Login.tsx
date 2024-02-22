/// <reference types="vite-plugin-svgr/client" />
import "./login.css";
import { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { getUserByToken, login } from "../core/_requests";
import InputField from "../../../ui-components/form-input/InputField";
import { useAuth } from "../core/Auth";
import langFlag from "../../../../_metronic/assets/lang-flags/england.png";
import navbarLogo from "../../../../_metronic/assets/icons/navbar-logo.png";
import { ReactComponent as PassIcon } from "../../../../_metronic/assets/icons/pass-icon.svg";
import { ReactComponent as User } from "../../../../_metronic/assets/icons/user-icon.svg";
import { CircleAnimation } from "../../../ui-components/circle-animation/CircleAnimation";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

const languages = [
  {
    lang: "en",
    name: "English",
    flag: toAbsoluteUrl("media/flags/united-states.svg"),
  },
  {
    lang: "zh",
    name: "Mandarin",
    flag: toAbsoluteUrl("media/flags/china.svg"),
  },
  {
    lang: "es",
    name: "Spanish",
    flag: toAbsoluteUrl("media/flags/spain.svg"),
  },
  {
    lang: "ja",
    name: "Japanese",
    flag: toAbsoluteUrl("media/flags/japan.svg"),
  },
  {
    lang: "de",
    name: "German",
    flag: toAbsoluteUrl("media/flags/germany.svg"),
  },
  {
    lang: "fr",
    name: "French",
    flag: toAbsoluteUrl("media/flags/france.svg"),
  },
];

export function Login() {
  const [flagLang, setFlagLang] = useState(languages[0].flag);
  const [openLangMenu, setOpenLanMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await login(values.email, values.password);
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.api_token);
        setCurrentUser(user);
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus("The login details are incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <div style={{ height: "100%" }} className="login-page">
      <div className="login-nav-container">
        <div className="nav-left-side">
          <div className="nav-img-logo">
            <img src={navbarLogo} alt="" />
          </div>
        </div>

        <div className="lang-container">
          <p
            onClick={() => setOpenLanMenu(!openLangMenu)}
            className="lang-text"
          >
            <span>
              <img src={flagLang} alt="" />
            </span>
            <span> Language</span>
          </p>
          <div
            className="form-lang-container menu-sub menu-sub-dropdown w-175px"
            style={{ height: `${openLangMenu ? "85px" : "0px"}` }}
          >
            {languages.map((l) => (
              <div
                className="menu-item px-3"
                key={l.lang}
                onClick={() => {
                  setFlagLang(l.flag);
                  setOpenLanMenu(!openLangMenu);
                }}
              >
                <a href="#" className="menu-link d-flex px-5">
                  <span className="symbol symbol-20px me-4">
                    <img className="rounded-1" src={l.flag} alt="metronic" />
                  </span>
                  {l.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="login-parent d-flex flex-column flex-lg-row flex-column-fluid">
        {/* Header of the sign in page */}
        <div className="login-header-icon">
          <CircleAnimation />
        </div>
        {/* end of header of the sign in page */}

        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-lg-1 login-form-parent">
          <form
            className="form w-100"
            onSubmit={formik.handleSubmit}
            noValidate
            id="kt_login_signin_form"
          >
            {/* begin::Heading */}
            <div className="login-form-text-container text-center mb-11">
              <h1 className="login-form-header-text">Welcome!</h1>
              <p>
                Connect, collaborate, support and thrive with your fellow
                Alumni.
              </p>
            </div>
            {/* begin::Heading */}

            {/* begin::Separator */}
            {/* <div className="separator separator-content my-14">
            <span className="w-125px text-gray-500 fw-semibold fs-7">
              Or with email
            </span>
          </div> */}
            {/* end::Separator */}

            {/* begin::Form group */}
            <div className="fv-row mb-15 position-relative">
              <InputField
                type="email"
                formik={formik}
                label="Username or Email"
                Icon={User}
              />
            </div>

            {/* end::Form group */}

            {/* begin::Form group */}
            <div className="fv-row mb-15 position-relative">
              <InputField
                type="password"
                formik={formik}
                label="Password"
                Icon={PassIcon}
              />
            </div>
            {/* end::Form group */}

            {/* Forgot Password on larg screens */}
            <div className="forgot-pw-container">
              <div className="remember-container">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember this device</label>
              </div>
              <Link to="/auth/forgot-password" className="forgot-text">
                Forgot Password ?
              </Link>
            </div>
            {/* Forgot Password on larg screens */}

            {/* begin::Action */}
            <div className="login-btns-container d-flex mb-10">
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn rounded-pill fw-bold btn-submit"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className="indicator-label">Login</span>}
                {loading && (
                  <span
                    className="indicator-progress"
                    style={{ display: "block" }}
                  >
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                )}
              </button>
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn rounded-pill fw-bold btn-submit"
              >
                <Link to="/auth/registration" className="">
                  Register
                </Link>
              </button>
            </div>
          </form>
        </div>
        {/* Header of the sign in page */}
        {/* end::Action */}
      </div>
      <div className="text-center fw-semibold fs-6 login-footer">
        {/* begin::Link */}
        <div className="footer-links-container">
          <Link to="/auth">Terms of use</Link>
          <Link to="/auth">Privacy Policy</Link>
          <Link to="/auth">Contact Us</Link>
          <Link to="/auth">About</Link>
          <Link to="/auth">Blog</Link>
          <Link to="/auth">Events</Link>
        </div>
        <p>&copy; 2024 ABNCW</p>
        {/* end::Link */}
      </div>
    </div>
  );
}
