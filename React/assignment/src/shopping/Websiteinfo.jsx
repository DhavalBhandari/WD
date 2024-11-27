import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Websiteinfo = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const Infodiv = styled.header`
    display: flex;
    font-size: 10px;
    justify-content: center;
    gap:320px;
    border: 1px solid grey;
    padding: 5px 0;
  `;
  const Rmv = styled.select`
    border: none;
  `;
  const Spnclr = styled.span`
    color: blue;
  `;
  const Logo = styled.div`
    background-image: url("./logo.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 50px;
    width: 150px;
  
  `;
  const Search = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content:center;
    border: 1px solid;
    padding-right:10px
  `;
  const Navby = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:168px;
    border:1px solid grey;
    padding:10px 0
  `;
  const Cmn= styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap:25px
    
  `
  const Lgnicn = styled.div`
    font-size:13px;
  `
  const Category=styled.div`
    border:1px solid;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    gap:140px;
  `

  return (
    <>
      <Infodiv>
        <div>About US | My Account | Wishlist | Order Tracking</div>
        <div>
          Get great devices up to 50% off <Spnclr>View details</Spnclr>
        </div>
        <div>
          Need help?<Spnclr>Call Us:+1800 900</Spnclr> |{" "}
          <Rmv>
            <option>English</option>
            <option>Hindi</option>
            <option>Gujrati</option>
          </Rmv>{" "}
          |{" "}
          <Rmv>
            <option>USD</option>
            <option>INR</option>
            <option>NPR</option>
          </Rmv>
        </div>
      </Infodiv>
      <Navby>
        <Logo></Logo>
        <Search>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              height: "30px",
              width: "100px",
            }}
          >
            All Category
          </div>
          <input
            type="text"
            name=""
            id=""
            size={30}
            placeholder="search"
            style={{ border: "none" }}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginLeft:"-20px"}} />
        </Search>
        <Cmn>
          <select style={{fontSize:"13px"}}>
            <option >Your Location</option>
          </select>
          <Lgnicn>
            <FontAwesomeIcon icon={faRecycle} />  Compare
          </Lgnicn>
          <Lgnicn>
            <FontAwesomeIcon icon={faHeart} />   Wishlist
          </Lgnicn>
          <Lgnicn>
            <FontAwesomeIcon icon={faCartShopping} />  Cart
          </Lgnicn>
          <Lgnicn>
            <FontAwesomeIcon icon={faPerson} />  Account
          </Lgnicn>
        </Cmn>
      </Navby>
      <Category>
      <div>
      <ul style={{display:"flex",textDecoration:"none",justifyContent:"center",alignItems:"center",fontSize:"12px",margin:"0px",gap:"30px"}}>
      <li style={{listStyle:"none"}}><FormControl>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          style={{height:"35px",width:"190px",padding:"20px",fontSize:"11px",margin:"-20px 0 0 -40px",color:"white",outline:"none"
          }}
          className="btn btn-success"
        >
          <MenuItem value="">
            <em>Browse All Category</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl></li>
      <li style={{listStyle:"none",margin:"0px"}}><FontAwesomeIcon icon={faFire} style={{color: "#74C0FC",}} />{"  "}Hot Deals</li>
      <li style={{listStyle:"none",margin:"0px"}}><select style={{border:"none"}}><option>Home</option></select></li>
      <li style={{listStyle:"none",margin:"0px"}}>About</li>
      <li style={{listStyle:"none",margin:"0px"}}><select style={{border:"none"}}><option>Shop</option></select></li>
      <li style={{listStyle:"none",margin:"0px"}}><select style={{border:"none"}}><option>Vendors</option></select></li>
      <li style={{listStyle:"none",margin:"0px"}}><select style={{border:"none"}}><option>Mega menu</option></select></li>
      <li style={{listStyle:"none",margin:"0px"}}><select style={{border:"none"}}><option>Blog</option></select></li>
      <li style={{listStyle:"none",margin:"0px"}}><select style={{border:"none"}}><option>Pages</option></select></li>
      <li style={{listStyle:"none",margin:"0px"}}>Contact</li>
      
      </ul>
      </div>
      <div style={{display:"flex",gap:"7px"}}>
         <FontAwesomeIcon icon={faHeadphones} style={{fontSize:"20px",paddingTop:"13px"}} /> 
         <div >
          <Spnclr style={{fontSize:"20px"}}>1900-888</Spnclr>
          <p style={{fontSize:"9px"}}>24/7 Support Center</p>
         </div>
      </div>
      </Category>
     
    </>
  );
};

export default Websiteinfo;
