import './style_grid.css';
import PopupBox from './PopupBox';
import React, { useState } from 'react';

function Grid(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [popInfo, setPopInfo] = useState([]);

  const togglePopup = (image) => {
    setPopInfo([
      {
        name: image.name,
        photo: image.photo,
        color: image.color,
      },
    ]);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {props.loading ? (
        <h3 className="loading">Loading!! Please wait</h3>
      ) : (
        <div className="row row-container">
          {props.info.map((image) => (
            <div className="col-sm-6 col-lg-4 " key={image.id}>
              <div className="row-item">
                <div
                  className="img-row"
                  style={{ backgroundColor: image.color.name }}
                  onClick={() => togglePopup(image)}
                >
                  <img
                    src={image.photo.url}
                    className="rounded img-responsive  "
                    style={{ width: `60%` }}
                    alt="img"
                  />
                </div>

                <div>
                  <div style={{ height: `136.8px `, width: `120px` }}>
                    <h3>{image.name}</h3>
                    <span className="dot1">
                      <p>{image.attack}</p>
                    </span>
                    <span className="dot2">
                      <p>{image.defense}</p>
                    </span>

                    <span className="subject sub1">Attack</span>
                    <span className="subject sub2">Deffence</span>

                    <div>
                      <button className="button btn1">Grass</button>
                      <button className="button btn2">Posion</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {props.error ? <h3 className="loading">{props.error}</h3> : null}

      <PopupBox popInfo={popInfo} isOpen={isOpen} togglePopup={togglePopup} />
    </>
  );
}

export default Grid;
