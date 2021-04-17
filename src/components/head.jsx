import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faShoppingBag } from '@fortawesome/free-solid-svg-icons'
const Head = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ backgroundColor: "#FF5C00"  }} light expand="md">
                <NavbarBrand href="/" style={{ verticalAlign: "text-top" , color: "white" }}> <FontAwesomeIcon icon={faShoppingBag} size="3x" />&nbsp;  </NavbarBrand>
                <span style={{ fontSize: "22pt",  color: "white" }}>Shoppae</span>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ color: "white" }}>
                    <Nav navbar>
                        
                        {/* <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem> */}
                        {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <div className="div-search-bar mx-auto">
                    <input className="search-bar"  type="email" name="" id="" placeholder="ค้นหา"/>
                    {/* <button className="">xx</button> */}
                    </div>
                    
                    <span
                    style={{ cursor: "pointer" }}
                    onClick={() => window.location = 'http://localhost:3001/'}
                    >
                        สำหรับแอดมิน
                    </span>
                    &nbsp;
                    การแจ้งเตือน
                    &nbsp;
                    สมัครใหม่
                    &nbsp; 
                    เข้าสู่ระบบ
                    &nbsp; &nbsp; &nbsp;
                    <NavbarText><FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ color: "white" }}/></NavbarText>
                    &nbsp;
                </Collapse>
            </Navbar>
            
        </div>
    );
}

export default Head;
