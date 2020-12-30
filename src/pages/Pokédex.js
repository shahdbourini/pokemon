import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Search from '../components/search/Search';
import CheckBox from '../components/checkbox/CheckBox';
import Grid from '../components/grid_imgs/Grid';
import Footer from '../components/footer/Footer';

function Pokédex() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [popInfo, setPopInfo] = useState([]);
  const [input, setInput] = useState('');


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

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    for (let i = 1; i <= 9; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((result) => {
          axios
            .get(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`)
            .then((res) => {
              axios
                .get(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
                .then((r) => {
                  setLoading(false);
                  setError('');
                  setInfo((info) => [
                    ...info,
                    {
                      id: i,
                      name: result.data.name,
                      photo: res.config,
                      hp: result.data['stats'][5]['base_stat'],
                      attack: result.data['stats'][4]['base_stat'],
                      defense: result.data['stats'][3]['base_stat'],
                      color: r.data.color,
                    },
                  ]);
                });
            });
        })
        .catch((error) => {
          setLoading(false);
          setInfo({});
          setError('Something went wrong');
        });
    }

    return () => {
      setInfo([]);
    };
  }, []);

  const result = !input
    ? info
    : info.filter((item) =>
        item.name.toLowerCase().includes(input.toLocaleLowerCase())
      );

  return (
    <>
      <div className="container">
        <Search result={result} handleOnChange={handleOnChange} input={input} />
        <CheckBox />
        <Grid
          top="834px"
          result={result}
          loading={loading}
          error={error}
          popInfo={popInfo}
          isOpen={isOpen}
          togglePopup={togglePopup}
        />
        <Footer top="200px" />
      </div>
    </>
  );
}

export default Pokédex;
