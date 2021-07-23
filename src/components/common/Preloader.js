import React from 'react';
import s from './Preloader.module.css';

const Preloader = () => {
   return (
      <div>
         <div class={s.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default Preloader;