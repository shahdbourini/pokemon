import './style_grid.css';
import Popup from './Popup';

function PopupBox(props) {
  return (
    <>
      {props.isOpen && (
        <Popup
          content={
            <>
              <div className="popup-item">
                <div
                  className=" popup-row"
                  style={{
                    backgroundImage: `linear-gradient(to left ,${props.popInfo[0].color.name}, rgb(0,0,0,0.3))`,
                  }}
                >
                  <div className="row">
                    <div className="col-6">
                      <h3>{props.popInfo[0].name}</h3>
                    </div>

                    <div className=" col-6 popup-title">
                      <span>Generation 1</span>
                      <span
                        className="dot1"
                        style={{
                          background: `yellow`,
                          border: `none`,
                          // lineHeight: `44px`,
                          position: `relative`,
                          left: `1%`,
                          color: 'black',
                        }}
                      >
                        <span style={{ lineHeight: `35px`, fontSize: `1vw` }}>
                          30
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="first-block">
                    <span>Abilities</span>
                    <br />
                    <span>Overgrow - Chlorophyll</span>
                  </div>

                  <div className=" row second-block">
                    <div className="col-6 sp1" style={{ marginTop: `4%` }}>
                      <span>Healthy Points</span>
                      <span>1000,000</span>
                      <div
                        className="rate"
                        style={{ background: `#e0cfcf`, width: `100%` }}
                      >
                        <span style={{ backgroundColor: `green` }}></span>
                      </div>
                    </div>

                    <div className="col-6 sp1 " style={{ marginTop: `4%` }}>
                      <span>Healthy Points</span>
                      <span>1000,000</span>
                      <div
                        className="rate"
                        style={{ background: `#e0cfcf`, width: `100%` }}
                      >
                        <span></span>
                      </div>
                    </div>
                  </div>

                  <div className="third-block">
                    <span className="dot1">
                      {' '}
                      <p>30</p>
                    </span>
                    <span className="subject sub2">Deffence</span>
                  </div>

                  <div className="third-block ">
                    <span className="dot1">
                      {' '}
                      <p>30</p>
                    </span>
                    <span className="subject sub2">Deffence</span>
                  </div>

                  <div className="third-block ">
                    <span className="dot1">
                      {' '}
                      <p>30</p>
                    </span>
                    <span className="subject sub2">Deffence</span>
                  </div>

                  <div className="third-block ">
                    <span className="dot1">
                      {' '}
                      <p>30</p>
                    </span>
                    <span className="subject sub2">Deffence</span>
                  </div>
                </div>

                <div
                  style={{
                    width: `40%px`,
                    backgroundImage: `linear-gradient(${props.popInfo[0].color.name}, rgb(0,0,0,0.3))`,
                    height: `100%`,
                  }}
                >
                  <img
                    src={props.popInfo[0].photo.url}
                    className="rounded img-responsive left-img "
                    alt="img"
                  />
                  <div className="popup-buttons">
                    <button className="buttons btn1">Grass</button>
                    <button className="buttons btn2">Posion</button>
                  </div>
                </div>
              </div>
            </>
          }
          handleClose={props.togglePopup}
        />
      )}
    </>
  );
}

export default PopupBox;
