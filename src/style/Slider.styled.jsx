import styled from 'styled-components';

export const SectionStyle = styled.section`
   margin: 0 auto;
   width: 600px;
   overflow: hidden;

   & .Slider {
      display: flex;
      flex-flow: row nowrap;
      transition: transform 0.8s ease;

      & .Slider__card {
         flex-shrink: 0;
         width: 100%;
         display: grid;
         justify-content: space-between;
         grid-template-columns: 1fr 1fr;
         padding: 0.25rem;
         border-radius: 0.5rem;
         background: rgb(231, 233, 234);
         gap: 0.25rem;

         & .Slider__img {
            height: 400px;

            & img {
               width: 100%;
               height: 100%;
               border-radius: 0.5rem;
            }
         }

         & .Slider__content {
            padding: 0.75rem 0 0.75rem 0.25rem;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 0.5rem;
            & h2 {
               font-weight: 700;
               font-size: 2rem;
               margin-bottom: 0.75rem;
            }

            & .Slider__description {
               margin: 0.75rem 0;
               & p {
                  font-weight: 600;
                  font-size: 1.25rem;
               }
            }

            & .Slider__information {
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
            }
         }
      }
   }
`;

export const SliderStyle = styled.div``;
