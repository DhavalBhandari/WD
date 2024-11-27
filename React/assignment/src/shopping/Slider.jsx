import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../shopping/shopping.css"

const Slider = () => {
  var items = [
    {
      name: "Don't miss amazing grocery deals",
      description: "Sign up for the daily newsletter",
      img: "./slider.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "./slider.jpg",
    },
  ];
  const common = {
    border: "1px solid black",
    height: "120px",
    width: "105px",
    textAlign:"center",
    paddingTop:"65px",
    fontSize:"10px",
    borderRadius:"2px"
  };
  const main = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "33px",
    margin: "10px 0",

  };

  const Cmnspan = styled.span`
    margin-left: 15px;
  `;
  const Spnclr = styled.span`
    color: blue;
  `;

  return (
    <>
      <div>
        <Carousel
          autoPlay={true}
          interval={3000}
          timeout={1000}
          indicators={true}
          indicatorIconButtonProps={{
            style: {
              padding: "10px",
              color: "grey",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "lightgreen",
            },
          }}
          indicatorContainerProps={{
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: "40px",
              width: "100%",
              zIndex: 1,
            },
          }}
        >
          {items.map((item, i) => (
            <div
              style={{
                padding: "20px",
              }}
            >
              <Paper
                key={i}
                style={{
                  height: "400px",
                  border: "1px solid",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  margin: "0 50px 0 50px ",
                }}
              >
                {" "}
                {/* Adjust the height here */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "300px 45px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPlaneDeparture}
                    style={{ margin: "0 -35px 0 0", zIndex: "1" }}
                  />
                  <input
                    type="text"
                    placeholder="Your email address"
                    style={{
                      borderRadius: "50px",
                      outline: "none",
                      border: "1px solid",
                      padding: "10px 50px",
                    }}
                  />
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "50px",
                      marginLeft: "-60px",
                      padding: "11px 30px",
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </Paper>
            </div>
          ))}
        </Carousel>
      </div>
      <div style={{ display: "flex", gap: "645px" }}>
        <div>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "bolder",
              marginLeft: "70px",
            }}
          >
            Featured Categories
          </span>
          <Cmnspan>cake & milk</Cmnspan>
          <Cmnspan>coffe & Teas</Cmnspan>
          <Cmnspan>
            <Spnclr>Pet food</Spnclr>
          </Cmnspan>
          <Cmnspan>Vegatables</Cmnspan>
        </div>
        <div style={{ display: "flex", gap: "3px" }}>
          <div
            style={{
              height: "30px",
              width: "30px",
              background: "lightgrey",
              borderRadius: "25px",
              textAlign: "center",
            }}
          >
            <ArrowBackIcon />
          </div>
          <div
            style={{
              height: "30px",
              width: "30px",
              background: "lightgrey",
              borderRadius: "25px",
              textAlign: "center",
            }}
          >
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
      <div style={main}>
        <div style={common} class="pink">Red Apple<p>26 items</p></div>
        <div style={common} class="pink">Snack<p>26 items</p></div>
        <div style={common} class="pink">Vegatables<p>26 items</p></div>
        <div style={common} class="blue">Strawberry<p>26 items</p></div>
        <div style={common} class="pink">Custed Apple<p>26 items</p></div>
        <div style={common} class="cream">Coffe & Tea<p>26 items</p></div>
        <div style={common} class="blue">Headphones<p>26 items</p></div>
        <div style={common} class="grey">cakes & Milk<p>26 items</p></div>
        <div style={common} class="cream">Oganic Kiwi<p>26 items</p></div>
      </div>
    </>
  );
};

export default Slider;
