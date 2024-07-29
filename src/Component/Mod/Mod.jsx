import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './Mod.scss'

function Mod(props) {

  return (
    <>
      


<Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title >
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                                                    <Link className='menu_dropdown_Linkk heading-sb'>
                                                        <span>
                                                            Other Pages
                                                        </span>
                                                    </Link>
                                                    
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
      </Modal.Body>
      
    </Modal>
    </>
  )
}

export default Mod
