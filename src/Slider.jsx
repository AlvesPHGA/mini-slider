import React from 'react';
import styled from 'styled-components';

const SectionStyle = styled.section`
   margin: 0 auto;
   width: 600px;
   overflow: hidden;
`;

const SliderStyle = styled.div`
   display: flex;
   flex-flow: row nowrap;
`;

const CardStyle = styled.div`
   flex-shrink: 0;
   width: 100%;
   display: grid;
   justify-content: space-between;
   grid-template-columns: 1fr 1fr;
   padding: 0.25rem;
   border-radius: 0.5rem;
   background: rgb(231, 233, 234);
   gap: 0.25rem;
`;

const CardStyle__img = styled.div`
   height: 400px;

   & img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
   }
`;

const CardStyle__content = styled.div`
   padding: 0.75rem 0 0.75rem 0.25rem;
   background: rgba(255, 255, 255, 0.6);
   border-radius: 0.5rem;
   & h2 {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 0.75rem;
   }
`;

const CardStyle__description = styled.div`
   margin: 0.75rem 0;
   & p {
      font-weight: 600;
      font-size: 1.25rem;
   }
`;

const CardStyle__information = styled.div`
   & h3 {
      font-size: 1.5rem;
   }
   & ul {
      list-style: none;

      & li {
         font-size: 1.25rem;
         font-weight: 500;
         margin-top: 0.25rem;

         & span {
            font-weight: 600;
         }
      }
   }
`;

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

   function previousSlider(targ) {
      setActiveSlide(activeSlide - 1);
   }

   function nextSlider(targ) {
      setActiveSlide(activeSlide + 1);
   }

   function handleClick({ target }) {
      target.id === 'previous' ? previousSlider() : nextSlider();
   }

   return (
      <SectionStyle>
         <SliderStyle>
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
                  <CardStyle key={id}>
                     <CardStyle__img key={card_images[0]}>
                        <img
                           src={card_images[0].image_url}
                           alt={`Card ${name}`}
                        />
                     </CardStyle__img>
                     <CardStyle__content>
                        <h2>{name}</h2>
                        <CardStyle__description>
                           <p>{desc}</p>
                        </CardStyle__description>
                        <CardStyle__information>
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
                        </CardStyle__information>
                     </CardStyle__content>
                  </CardStyle>
               ),
            )}
         </SliderStyle>
         <ButtonsStyle>
            <button id="previous" onClick={handleClick}>
               Anterior
            </button>
            <button id="next" onClick={handleClick}>
               Proximo
            </button>
         </ButtonsStyle>
      </SectionStyle>
   );
};

export default Slider;
