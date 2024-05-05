import React, { useEffect } from "react";
import Head from "next/head";

const Index = () => {
  useEffect(() => {
    const tabBtns = document.querySelectorAll(".nav ul li");
    const tabs = document.querySelectorAll(".tab");

    const handleTabClick = (panelIndex) => {
      tabs.forEach((tab, index) => {
        if (index === panelIndex) {
          tab.style.display = "block";
        } else {
          tab.style.display = "none";
        }
      });
      tabBtns.forEach((btn, index) => {
        if (index === panelIndex) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    };

    tabBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => handleTabClick(index));
    });

    handleTabClick(0);
  }, []);

  const bioText = () => {
    const bio = document.querySelector(".bio");
    const bioMore = document.querySelector("#see-more-bio");
    const bioLength = bio.innerText.length;
    bio.oldText = bio.innerText;
    bio.innerText = bio.innerText.substring(0, 100) + "...";
    bio.innerHTML += `<span onclick='addLength()' id='see-more-bio'>See More</span>`;
  };

  const addLength = () => {
    const bio = document.querySelector(".bio");
    bio.innerText = bio.oldText;
    bio.innerHTML +=
      "&nbsp;" + `<span onclick='bioText()' id='see-less-bio'>See Less</span>`;
    document.getElementById("see-less-bio").addEventListener("click", () => {
      document.getElementById("see-less-bio").style.display = "none";
    });
  };

  useEffect(() => {
    if (document.querySelector(".alert-message").innerText > 9) {
      document.querySelector(".alert-message").style.fontSize = ".7rem";
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Profile</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
      </Head>

      <div className="profile-header">
        <div className="profile-img">
          <img
            src="https://img.wattpad.com/14e654b7ca5e6fc90d2147c3350d3b7a36184fc1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f67515f76426335702d722d3639513d2d3232352e313565666138356233396434646362363938353538383235373230312e6a7067?s=fit&w=720&h=720"
            width="200"
            alt="Profile Image"
          />
        </div>
        <div className="profile-nav-info">
          <h3 className="user-name">Juan San Agustín</h3>
          <div className="address">
            <p id="state" className="state">
              Tlahuelipan,
            </p>
            <span id="country" className="country">MX.</span>
          </div>
        </div>
        <div className="profile-option">
          <div className="notification">
            <i className="fa fa-bell"></i>
            <span className="alert-message">3</span>
          </div>
        </div>
      </div>

      <div className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            <p className="mobile-no">
              <i className="fa fa-phone"></i> +7731309012
            </p>
            <p className="user-mail">
              <i className="fa fa-envelope"></i>{" "}
              sa501234@uaeh.edu.mx
            </p>
            <div className="user-bio">
              <h3>Biografía</h3>
              <p className="bio">
                ¡Hola! yo soy Juan actualmente estudio en la ESTL en el programa educativo Lic. en Administración soy emprendedor espero les gusten mis productos
              </p>
            </div>
            <div className="profile-btn">
              <button className="chatbtn" id="chatBtn">
                <i className="fa fa-comment"></i> Seguir
              </button>
              <button className="createbtn" id="Create-post">
                <i className="fa fa-plus"></i> Chat
              </button>
            </div>
            <div className="user-rating">
              <h3 className="rating">4.5 </h3>
              <div className="rate">
                <div className="star-outer">
                  <div className="star-inner">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <span className="no-of-user-rate">
                  <span>123</span>&nbsp;&nbsp;Opiniones
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="nav">
            <ul>
              <li className="user-post active">Publicaciones</li>
              <li className="user-review">Opiniones</li>
              <li className="user-setting"> Configuración</li>
            </ul>
          </div>
          <div className="profile-body">
            <div className="profile-posts tab">
              <h1>Tu publicación</h1>
              <p>Aquí podrás subir tus productos.</p>
            </div>
            <div className="profile-reviews tab">
              <h1>Opiniones de usuarios</h1>
              <p>Todas las opiniones de los productos en venta</p>
            </div>
            <div className="profile-settings tab">
              <div className="account-setting">
                <h1>Configuraciones</h1>
                <p>Más datos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="./script.js"></script>
    </div>
  );
};

export default Index;
