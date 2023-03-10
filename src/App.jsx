import React from 'react';
import { MainStyled } from './components/Main.style';
import Slider from './Slider';

function App() {
   const [datas, setDatas] = React.useState([]);
   React.useEffect(() => {
      fetch(
         'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=6&offset=0',
      )
         .then((res) => res.json())
         .then((json) => setDatas(json.data));
   }, []);

   console.log(datas[0]);

   return (
      <>
         <MainStyled>
            <Slider datas={datas} />
         </MainStyled>
      </>
   );
}

export default App;
