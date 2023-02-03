import React from 'react';
import styled from 'styled-components';

const SectionStyle = styled.section`
   border: 1px solid red;
   margin: 0 auto;
   /* width: 400px; */
`;

const SliderStyle = styled.div`
   display: flex;
   flex-flow: row nowrap;
   gap: 16px;
   overflow: hidden;
`;

const CardStyle = styled.div`
   width: 420px;
   background-color: rgba(0, 0, 0, 0.01);
   border-radius: 8px;
   border: 1px solid rgba(0, 0, 0, 0.7);
   flex-shrink: 0;
`;

const CardStyle__img = styled.div`
   width: 100%;
   height: 600px;

   & img {
      height: 100%;
      width: 100%;
      border-radius: 8px 8px 0 0;
   }
`;

const CardStyle__content = styled.div`
   padding: 12px 8px;

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

const Slider = ({
   datas,
   // id,
   // atk,
   // card_images,
   // def,
   // frameType,
   // level,
   // name,
   // race,
   // type,
}) => {
   const doubleOne = [datas[0], datas[1]];
   const doubleTwo = [datas[2], datas[3]];
   const doubleThree = [datas[4], datas[5]];

   console.log(doubleOne);

   return (
      <SectionStyle>
         <SliderStyle>
            {doubleThree.map(({ id, name, card_images, type, desc }) => (
               <CardStyle key={id}>
                  <CardStyle__img key={card_images[0]}>
                     <img src={card_images[0].image_url} alt={`Card ${name}`} />
                  </CardStyle__img>
                  <CardStyle__content>
                     <h2>{name}</h2>
                     <p>{type}</p>
                     <CardStyle__description>
                        <h3>Descrição</h3>
                        <p>{desc}</p>
                     </CardStyle__description>
                  </CardStyle__content>
               </CardStyle>
            ))}
         </SliderStyle>
         <div>
            <button>Anterior</button>
            <button>Proximo</button>
         </div>
      </SectionStyle>
   );
};

export default Slider;
