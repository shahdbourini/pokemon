
import './style_footer.css';

function Footer(props) {
  return (
    <>
      

      <div className="row mr-auto part2 " style={{ top: props.top }}>
        <div className="col-6">
          <div className="p2_div">
            <p>Make with ❤️ for the PokéSpartans team Platzi Master</p>
          </div>
        </div>
        <div className="col-6 ">
          <p className="row2_div">Ours Team</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
