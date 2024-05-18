import React from 'react'
import classes from './Header.module.css'
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
              <>
              <section className={classes.fixed}>
              <section>
                <div className={classes.header__container}>
            <div className={classes.logo__container}>
                <div>
                <a href='#'>
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
                </a>
                </div> 
                <div className={classes.delivery}>
                <span>
                <CiLocationOn size={20}/>
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className={classes.search}>
              <select name="#" id="#">
                <option value="">All</option>
              </select>
              <input type="text"  name='' placeholder='Search Amazon' />
              <FaSearch size={25}/>
            </div>
            <div className={classes.order__container}>
              <a href="#" className={classes.language}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="US-flag" />
                  <select name="#" id="#">
                    <option value="">EN</option>
                  </select>
                  </a>
              <a href="#">
                  <p>Hello, Sign in</p>
                  <span>Account & Lists</span>
              </a>
              <a href="#">
                <p>Returns</p>
                <span>& Orders</span>
              </a>
              <a href="#" className={classes.cart}>
              <CiShoppingCart size={35}/>
                <span>0</span>
              </a>
            </div>
            </div>
            </section>
            </section>
            <LowerHeader/>
        </>
  )
}

export default Header

