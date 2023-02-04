import React from 'react';
import styled from 'styled-components';

const SectionStyle = styled.section`
   margin: 0 auto;
   width: 684px;
   overflow: hidden;
`;

const SliderStyle = styled.div`
   display: flex;
   /* gap: 16px; */
   flex-flow: row nowrap;
`;

const SliderStyle__item = styled.div`
   display: flex;
   gap: 20px;
   width: fit-content;
   flex-shrink: 0;
   padding: 30px;
`;

const CardStyle = styled.div`
   width: 300px;
   background: rgba(0, 0, 0, 0.08);
   border-radius: 8px;
   border: 1px solid rgba(0, 0, 0, 0.3);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const CardStyle__img = styled.div`
   width: 100%;
   height: 400px;

   & img {
      height: 100%;
      width: 100%;
      border-radius: 8px;
   }
`;

const CardStyle__content = styled.div`
   padding: 12px 8px;
   height: 100%;

   & h2 {
      text-align: center;
   }

   & p {
      font-weight: 700;
      text-align: center;
      margin-block: 8px;
   }
`;

const CardStyle__description = styled.div`
   & h3 {
      text-align: center;
      margin-bottom: 4px;
   }

   & p {
      text-align: center;
      font-weight: 400;
      margin-block: 0;
   }
`;

const Slider = ({ datas }) => {
   const doubleOne = datas.filter((item, index) => index < 2);
   const doubleTwo = datas.filter((item, index) => index > 1 && index < 4);
   const doubleThree = datas.filter((item, index) => index > 3);

   return (
      <SectionStyle>
         <SliderStyle>
            <SliderStyle__item>
               {doubleOne.map(({ id, name, card_images, type, desc }) => (
                  <CardStyle key={id}>
                     <CardStyle__img key={card_images[0]}>
                        <img src={card_images[0].image_url} alt="" />
                     </CardStyle__img>
                     <CardStyle__content>
                        <h2>{name}</h2>
                        <p>{type}</p>
                        <CardStyle__description>
                           <h3>Description</h3>
                           <p>{desc}</p>
                        </CardStyle__description>
                     </CardStyle__content>
                  </CardStyle>
               ))}
            </SliderStyle__item>

            <SliderStyle__item>
               {doubleTwo.map(({ id, name, card_images, type, desc }) => (
                  <CardStyle key={id}>
                     <CardStyle__img key={card_images[0]}>
                        <img src={card_images[0].image_url} alt="" />
                     </CardStyle__img>
                     <CardStyle__content>
                        <h2>{name}</h2>
                        <p>{type}</p>
                        <CardStyle__description>
                           <h3>Description</h3>
                           <p>{desc}</p>
                        </CardStyle__description>
                     </CardStyle__content>
                  </CardStyle>
               ))}
            </SliderStyle__item>

            <SliderStyle__item>
               {doubleThree.map(({ id, name, card_images, type, desc }) => (
                  <CardStyle key={id}>
                     <CardStyle__img key={card_images[0]}>
                        <img src={card_images[0].image_url} alt="" />
                     </CardStyle__img>
                     <CardStyle__content>
                        <h2>{name}</h2>
                        <p>{type}</p>
                        <CardStyle__description>
                           <h3>Description</h3>
                           <p>{desc}</p>
                        </CardStyle__description>
                     </CardStyle__content>
                  </CardStyle>
               ))}
            </SliderStyle__item>
         </SliderStyle>
         <div>
            <button>Anterior</button>
            <button>Proximo</button>
         </div>
      </SectionStyle>
   );
};

export default Slider;
