import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="img"
            height={350}
            width={1200}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Welcome to our Page...</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Welcome on board! Happy to see you at [online store] You're finally here, [recipient's name] Great to see you joining [online store] You're now part of the [online store] family!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
