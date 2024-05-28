import React, { useContext } from 'react'
import classes from './Header.module.css'
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../Utility/firebase';


const Header = () => {

  const[{basket, user},dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
              <>
              <section className={classes.fixed}>
              <section>
                <div className={classes.header__container}>
            <div className={classes.logo__container}>
                <div>
                <Link to='/'>
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
                </Link>
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
              <FaSearch size={39}/>
            </div>
            <div className={classes.order__container}>
              <Link to="/Payment" className={classes.language}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="US-flag" />
                  <select name="#" id="#">
                    <option value="">EN</option>
                  </select>
                  </Link>
                  <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
              <Link to="/Orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
              <CiShoppingCart size={35}/>
                <span>{totalItem}</span>
              </Link>
            </div>
            </div>
            </section>
            
            <LowerHeader/>

            </section>
        </>
  )
}

export default Header

