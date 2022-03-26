import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
      <div className="container ">
        <h1 className="text-center my-5">Frequently Asked Question </h1>
        <div className="ans-container">
          <div className=" ans">
            <h3 className="text-center my-3">How Does ReactJs Work?</h3>
            <p>
              The main objective of ReactJS is to develop User Interfaces (UI)
              that improves the speed of the apps. It uses virtual DOM
              (JavaScript object), which improves the performance of the app.
              The JavaScript virtual DOM is faster than the regular DOM. We can
              use ReactJS on the client and server-side as well as with other
              frameworks. It uses component and data patterns that improve
              readability and helps to maintain larger apps.
            </p>
          </div>
          <div className="ans">
            <h3 className="text-center">tittle</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus doloremque nisi accusamus animi praesentium reiciendis
              tenetur totam explicabo magni cupiditate. Eveniet, ea. Id incidunt
              ipsum, sequi cum voluptas exercitationem ad.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Answer;