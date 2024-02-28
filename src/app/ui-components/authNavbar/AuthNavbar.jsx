import React, { useState } from 'react'
import navbarLogo from "../../../../src/_metronic/assets/icons/navbar-logo.png";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import './auth-navbar.css'



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

const AuthNavbar = () => {
    const [flagLang, setFlagLang] = useState(languages[0].flag);
    const [openLangMenu, setOpenLanMenu] = useState(false);
  return (
    <nav className="login-nav-container">
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
      </nav>
  )
}

export default AuthNavbar