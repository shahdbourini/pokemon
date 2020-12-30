import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Info from '../pokemon_info/Info';
import './style_slide.css';

function Slide(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/${props.type}`).then((type) => {
      type.data.pokemon.slice(0, 15).map((pokemon) => {
        const pokiId = pokemon.pokemon.url.split('/')[6]
        return axios.get(pokemon.pokemon.url).then((result) => {
          axios
            .get(
              `https://pokeres.bastionbot.org/images/pokemon/${pokiId}.png`
            )
            .then((res) => {
              setInfo((info) => [
                ...info,
                {
                  id: pokiId,
                  name: result.data.name,
                  photo: res.config,
                  hp: result.data['stats'][5]['base_stat'],
                  attack: result.data['stats'][4]['base_stat'],
                  defense: result.data['stats'][3]['base_stat'],
                },
              ]);
            });
          // });
        });
      });
    });
   
    return () => {
      setInfo([]);
    };
  }, [props.type]);

  return (
    <>
      <div
        className="leng-title"
        style={{ top: props.top, marginBottom: props.bottom }}
      >
        <h2>{props.title}</h2>
        <hr className="divider" />
      </div>

      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        style={{ width: `30px` }}
      >
        {info.map((image, key) => (
          <div key={image.id}>
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
        ))}
      </Carousel>
    </>
  );
}

export default Slide;
