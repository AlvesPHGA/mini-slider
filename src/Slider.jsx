import React from 'react';
import styled from 'styled-components';
import { SectionStyle } from './style/Slider.styled';

const ButtonsStyle = styled.div`
   display: flex;
   gap: 1rem;
   justify-content: center;

   & button {
      width: fit-content;
      height: fit-content;
      padding: 10px 20px;
      cursor: pointer;
   }
`;

const Slider = ({ datas }) => {
   const [activeSlide, setActiveSlide] = React.useState(0);
   const [positionItemSlider, setPositionItemSlider] = React.useState(0);

   const refSlider = React.useRef();

   React.useEffect(() => {
      const { width } = refSlider.current.getBoundingClientRect();

      setPositionItemSlider(-(width * activeSlide));
   }, [activeSlide]);

   function previousSlider() {
      // setActiveSlide(activeSlide - 1);
      // if (activeSlide === 0) setActiveSlide(datas.length - 1);
      activeSlide === 0
         ? setActiveSlide(datas.length - 1)
         : setActiveSlide(activeSlide - 1);
   }

   function nextSlider() {
      // if (activeSlide < datas.length - 1) setActiveSlide(activeSlide + 1);
      // if (activeSlide === datas.length - 1) setActiveSlide(0);
      // else setActiveSlide(activeSlide + 1);
      activeSlide === datas.length - 1
         ? setActiveSlide(0)
         : setActiveSlide(activeSlide + 1);
   }

   return (
      <SectionStyle>
         <div
            ref={refSlider}
            className="Slider"
            style={{ transform: `translateX(${positionItemSlider}px)` }}
         >
            {datas.map(
               ({
                  id,
                  card_images,
                  name,
                  desc,
                  level,
                  type,
                  attribute,
                  atk,
                  def,
               }) => (
                  <div className="Slider__card" key={id}>
                     <div className="Slider__img" key={card_images[0]}>
                        <img
                           className="imgCard"
                           src={card_images[0].image_url}
                           alt={`Card ${name}`}
                        />
                     </div>
                     <div className="Slider__content">
                        <h2>{name}</h2>
                        <div className="Slider__description">
                           <p>{desc}</p>
                        </div>
                        <div className="Slider__information">
                           <h3>Information</h3>
                           <ul>
                              <li>
                                 <span>Level: </span>
                                 {level}
                              </li>
                              <li>
                                 <span>Type: </span> {type}
                              </li>
                              <li>
                                 <span>Attribute: </span> {attribute}
                              </li>
                              <li>
                                 <span>Atk: </span> {atk}
                              </li>
                              <li>
                                 <span>Def: </span> {def}
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               ),
            )}
         </div>
         <ButtonsStyle>
            <button onClick={previousSlider}>Anterior</button>
            <button onClick={nextSlider}>Proximo</button>
         </ButtonsStyle>
      </SectionStyle>
   );
};

export default Slider;
