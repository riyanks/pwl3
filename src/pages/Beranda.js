import React from 'react';
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom';
import homepagebanner from '../images/bannner1.svg';
import '../styles/HomeStyles.css';

const Beranda = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${homepagebanner})`}}>
          <div className="headerContainer">
          <h1>
            MASAKAN <br />
            <span >ITALIA</span> <br />
            HALAL
          </h1>
            <p>Best Food In Bandar Lampung</p>
            <NavLink to={"/contact"}>
              <button>ORDER NOW</button>
            </NavLink>
          </div>
        </div>
    </Layout>
  )
}

export default Beranda;