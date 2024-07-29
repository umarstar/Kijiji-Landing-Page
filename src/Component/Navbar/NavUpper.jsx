import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavUpper.scss";
import Mod from '../Mod/Mod';
import { MagnifyingGlass } from "@phosphor-icons/react";
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { CaretDown ,CaretRight ,Tag ,Car ,HouseLine ,Briefcase,PawPrint,Island,Users} from '@phosphor-icons/react';

function NavUpper() {
  const [selected, setselected] = useState('All categories')
  const selectOption = [
    "All categories",
    'Buy & Sell',
    'Cars & Vehicles',
    'Real Estate',
    "Jobs",
    'Services',
    'Pets',
    'Community',
    'Vacation Rentals'
  ]
  const [modalShow, setModalShow] = React.useState(false);
  const [name, setname] = useState("");
  const submit = (e) => {
    e.preventDefault()
  }
  return (
    <>

      <section className="nav-upper">
        <div className="container-fluid">
          <div className="nav-imgForm">
            <svg viewBox="0 0 55.67 91.5" className='logo' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" height="32" width="32"><path d="M32.24 55.74l21.61-25.57a1.64 1.64 0 00-1.25-2.72H36.34a1.64 1.64 0 00-1.28.61l-17.86 22a.48.48 0 01-.85-.3V2.47A1.64 1.64 0 0014.71.83L1.64 2.75C.63 2.92 0 3.48 0 4.39v84.42a1.64 1.64 0 001.64 1.64h13.08a1.64 1.64 0 001.64-1.64V63.17a.51.51 0 01.93-.29l18.79 26.87a1.64 1.64 0 001.35.7h16a1.64 1.64 0 001.31-2.64L32.23 56.17a.37.37 0 01.01-.43z" fill="#373373"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='logo1' data-name="Layer 1" viewBox="0 0 229.47 120.3" aria-hidden="true" focusable="false" height="64" width="64"><path fill="#373373" d="M65.67 46.38v46.26a1.64 1.64 0 001.64 1.64h13.08A1.64 1.64 0 0082 92.64V44.56a1.64 1.64 0 00-1.87-1.63l-13.04 1.82a1.64 1.64 0 00-1.42 1.63zm68.19 0v46.26a1.64 1.64 0 001.64 1.64h13.07a1.64 1.64 0 001.64-1.64V44.56a1.64 1.64 0 00-1.87-1.63l-13.07 1.82a1.64 1.64 0 00-1.41 1.63zm68.14 0v46.26a1.64 1.64 0 001.64 1.64h13.07a1.64 1.64 0 001.64-1.64V44.56a1.64 1.64 0 00-1.87-1.63l-13.07 1.82a1.64 1.64 0 00-1.41 1.63z"></path><circle cx="73.85" cy="21.66" r="10.17" fill="#f8aa17"></circle><circle cx="107.95" cy="10.17" r="10.17" fill="#f1454f"></circle><circle cx="142.04" cy="21.66" r="10.17" fill="#1477D4"></circle><circle cx="176.13" cy="10.17" r="10.17" fill="#37a864"></circle><circle cx="210.23" cy="21.66" r="10.17" fill="#9b44ad"></circle><path fill="#373373" d="M32.24 59.57L53.85 34a1.64 1.64 0 00-1.25-2.72H36.34a1.64 1.64 0 00-1.28.61l-17.86 22a.48.48 0 01-.85-.3V6.3a1.64 1.64 0 00-1.64-1.64L1.64 6.58C.63 6.75 0 7.31 0 8.22v84.42a1.64 1.64 0 001.64 1.64h13.08a1.64 1.64 0 001.64-1.64V67a.51.51 0 01.93-.29l18.79 26.87a1.64 1.64 0 001.35.7h16a1.64 1.64 0 001.31-2.64L32.23 60a.37.37 0 01.01-.43zm82.01-28.12l-13.07 1.82a1.64 1.64 0 00-1.42 1.63v58.29a47.94 47.94 0 01-.26 5.08 12 12 0 01-1.13 4.08 6.56 6.56 0 01-2.43 2.65 8 8 0 01-4.2 1 19 19 0 01-2-.13l-.84-.12c-1.55-.32-2 .53-2.11 1 0 .22-.12.79-.12.79-.42 3-1.08 7.45-1.39 10a1.82 1.82 0 001.63 2.09c.51.09 1.06.17 1.72.26a40.58 40.58 0 004.56.32c4.71 0 8.59-.76 11.53-2.25a18.51 18.51 0 007-6 22.74 22.74 0 003.5-8.84 59.86 59.86 0 00.91-10.64V33.07a1.64 1.64 0 00-1.88-1.62zm68.59 1.34l-13.07-1.4A1.64 1.64 0 00168 33v60.19a47.94 47.94 0 01-.26 5.08 12 12 0 01-1.13 4.08 6.56 6.56 0 01-2.44 2.69 8 8 0 01-4.2 1 19 19 0 01-2-.13l-.84-.12c-1.55-.32-2 .53-2.11 1 0 .22-.12.79-.12.79-.42 3-1.08 7.45-1.39 10a1.82 1.82 0 001.63 2.09c.51.09 1.06.17 1.72.26a40.58 40.58 0 004.56.32c4.71 0 8.59-.76 11.53-2.25a18.51 18.51 0 007-6 22.74 22.74 0 003.5-8.84 59.86 59.86 0 00.91-10.64V34.43a1.64 1.64 0 00-1.52-1.64zm42.33 10.9H224v3h-.71v-3h-1.18V43h3.07zm4.3 2.96h-.72v-2.3l-.1.32-.82 2h-.6l-.82-2-.1-.32v2.3h-.71V43h.82l1 2.34.08.21.08-.21 1-2.34h.82z"></path></svg>
            <form className="form" onSubmit={submit}>
              <div className="input-otr">
                <label for="" className='input-lebal'>What are you looking for?</label>
                <input type="text" className='input' name="" value={name} onChange={(e) => { setname(e.target.value) }} />
                <MagnifyingGlass size={22} />
              </div>
              <ThemeSelect
                Selected={selected}
                setSelected={setselected}
                options={selectOption}
              />
              <button className='search'>Search</button>
            </form>
          </div>
          <div className="signRegis">
            <Link className='nav-linkBtn1'><p className="link-del">FR</p></Link>
            <Link className='nav-linkBtn'><p className="link-del reg">Register</p></Link>
            <p className='or'>or</p>
            <Link className='nav-linkBtn'><p className="link-del">Sign In</p></Link>
            <div className="post-btn">
              <Link className="post-btn-inr" >Post ad</Link>
            </div>

          </div>
        </div>
      </section>

      <section className='lower-form'>
        <div className="container-fluid">
        <form className="form" onSubmit={submit}>
        <div className="input-otr">
          <label for="" className='input-lebal'>What are you looking for?</label>
          <input type="text" className='input' name="" value={name} onChange={(e) => { setname(e.target.value) }} />
          <MagnifyingGlass size={22} />
        </div>
        <ThemeSelect
          Selected={selected}
          setSelected={setselected}
          options={selectOption}
        />
        <button className='search'>Search</button>
      </form>
        </div>
      </section>

      <div className='NavMainMenu_main '>
                    <div className='container-fluid'>
                        <div className='wrapper'>
                        <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/">
                                        <div className="heading-sb-icon">
                                        <Tag size={32} />
                                        </div>
                                        <span>
                                        Buy & Sell
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/shop">
                                    <div className="heading-sb-icon">
                                    <Car size={32} />
                                        </div>
                                        <span>
                                        Cars & Vehicles
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <p className='menu_linkk heading-sb'>
                                    <div className="heading-sb-icon" onClick={() => setModalShow(true)}>
                                    <HouseLine size={32} />
                                        </div>
                                        <span>
                                        Real Estate
                                        </span>
                                        {/* <CaretDown size={20} className='down' /> */}
                                    </p>
                                    <Mod
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                                    <div className='menu_dropdown_otr'>
                                        <div className='menu_dropdown_inr'>
                                            <ul className='menu_dropdown_ul'>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/cart">
                                                        <span>
                                                            Cart
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/empty_cart">
                                                        <span>
                                                            Cart Empty
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/wishlist">
                                                        <span>
                                                            Wishlist
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/empty_wishlist">
                                                        <span>
                                                            Wishlist Empty
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/checkout">
                                                        <span>
                                                            Checkout
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <p className='menu_dropdown_Linkk heading-sb'>
                                                        <span>
                                                            Other Pages
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </p>
                                                    <div className='menu_otherdropdown_otr'>
                                                        <div className='menu_otherdropdown_inr'>
                                                            <ul className='menu_otherdropdown_ul'>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/faq">
                                                                        <span>
                                                                            Faq
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/comming_soon">
                                                                        <span>
                                                                            Comming Soon
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/login">
                                                                        <span>
                                                                            Login
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/signup">
                                                                        <span>
                                                                            Sign up
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/404">
                                                                        <span>
                                                                            404
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/blog">
                                    <div className="heading-sb-icon">
                                    <Briefcase size={32} />
                                        </div>
                                        <span>
                                            Jobs
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/blog">
                                    <div className="heading-sb-icon">
                                        <Tag size={32} />
                                        </div>
                                        <span>
                                        Services
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/contact">
                                    <div className="heading-sb-icon">
                                    <PawPrint size={32} />
                                        </div>
                                        <span>
                                        Pets
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/blog">
                                    <div className="heading-sb-icon">
                                    <Users size={32} />
                                        </div>
                                        <span>
                                        Community
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/contact">
                                    <div className="heading-sb-icon">
                                    <Island size={32} />
                                        </div>
                                        <span>
                                        Vacation Rentals
                                        </span>
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="trend">
                            <Link className="trend-link">
                            <p className="trend-link">
                            Trending
                            </p>
                            <p className="low" >

                            Motorcycles
                            </p>
                            </Link>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default NavUpper
