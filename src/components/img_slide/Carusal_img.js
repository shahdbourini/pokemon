import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Info from '../pokemon_info/Info';
import './style_slide.css';

function Carusal_img() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((result) => {
        axios.get(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
          .then((res) => {
            setInfo((info) => [
              ...info,
              {
                id: i,
                name: result.data.name,
                photo: res.config,
                hp: result.data['stats'][5]['base_stat'],
                attack: result.data['stats'][4]['base_stat'],
                defense: result.data['stats'][3]['base_stat'],
              },
            ]);
          });
      });
    }

    console.log(info);
  }, [info]);

  return (
    <>

        {info.map((image) => (
          <div>
            <img src={image.photo.url} className="img-slide" alt="img" />
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9">
                <div className="details">
                  <h1>{image.name}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                  </p>
                </div>
                <Info />
              </div>
            </div>
          </div>
        ))};
 
    </>
  );
}
export default Carusal_img;
