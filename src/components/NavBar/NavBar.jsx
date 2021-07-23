import React, { Component } from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
   render() {
      return (
         <aside className={s.sidebar}>
            <nav className={s.nav}>
               <ul>
                  <li>
                     <NavLink
                        to="/profile"
                        className={s.item}
                        activeClassName={s.active}
                     >
                        Profile
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/dialogs" exact
                        className={s.item}
                        activeClassName={s.active}
                     >
                        Messages
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/users"
                        className={s.item}
                        activeClassName={s.active}
                     >
                        Users
                     </NavLink>
                  </li>
						<li>
                     <NavLink
                        to="/news"
                        className={s.item}
                        activeClassName={s.active}
                     >
                        News
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/music"
                        className={s.item}
                        activeClassName={s.active}
                     >
                        Music
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/setting"
                        className={s.item}
                        activeClassName={s.active}
                     >
                        Setting
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </aside>
      );
   }
}
