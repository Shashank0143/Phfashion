// import { LuShirt } from "react-icons/lu";
// import { TbTruckDelivery } from "react-icons/tb";
// import { TbDiscount2 } from "react-icons/tb";
// import { CiBadgeDollar } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import newsLetterImg from "../../assets/images/newsletter.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Banners from "../banners/index";
// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../../utils/api";


const footMenu = [
  {
    id: 1,
    title: "GET IN TOUCH",
    menu: [
      {
        id: 1,
        link: "Email: ",
        path: "/",
      },
      {
        id: 2,
        link: "What's App : +91 85278 93507",
        path: "/",
      },

      {
        id: 3,
        link: "(Mon-Sat: Timing 10am - 7pm)",
        path: "/",
      },
      {
        id: 4,
        link: "CONTACT US",
        path: "/contact",
      },
      {
        id: 5,
        link: "RETURN/EXCHANGE REQUEST",
        path: "/policy/Terms",
      },
    ],
  },
  {
    id: 2,
    title: "POLICY",
    menu: [
      {
        id: 1,
        link: "RETURN POLICY",
        path: "/policy/return",
      },
      {
        id: 2,
        link: "SHIPPING POLICY",
        path: "/policy/shipping",
      },
      {
        id: 3,
        link: "SITEMAP",
        path: "/policy/Terms",
      },
      {
        id: 4,
        link: "PRIVACY POLICY",
        path: "/policy/privacy",
      },
      {
        id: 5,
        link: "TERMS & CONDITIONS",
        path: "/terms/conditions",
      },
    ],
  },
  {
    id: 3,
    title: "COMPANY",
    menu: [
      {
        id: 1,
        link: "ABOUT US",
        path: "/about_us",
      },
      {
        id: 2,
        link: "CONTACT US",
        path: "/contact",
      },
      {
        id: 3,
        link: "SERVICE CENTERS",
        path: "/",
      },
      {
        id: 4,
        link: "CAREERS",
        path: "/",
      },
    ],
  },
];

const footSocial = [
  {
    id: 1,
    icon: <FacebookIcon className="facebook_icon" fontSize="large" />,
    path: "/",
  },
  {
    id: 2,
    icon: <TwitterIcon className="twitter_icon" fontSize="large" />,
    path: "/",
  },
  {
    id: 3,
    icon: <InstagramIcon className="insta_icon" fontSize="large" />,
    path: "/",
  },
  {
    id: 4,
    icon: <LinkedInIcon className="likedin_icon" fontSize="large" />,
    path: "/",
  },
];

const Footer = () => {
  // const [bannerList, setBannerList] = useState([]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const currYear = new Date().getFullYear();

  return (
    <>
      
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                60% discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on
                <br /> promotions and coupons.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button className="btn-blue">Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          {/* Desktop Footer Column Layout */}
          <div className="wrapper_footer">
            {footMenu.map((item, index) => (
              <div className="footer_column" key={item.id}>
                <h4>{item.title}</h4>
                <ul>
                  {item.menu.map((menuItem) => (
                    <li key={menuItem.id}>
                      <Link className="footer_column" to={menuItem.path}>{menuItem.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer_column">
              <h4>Follow Us</h4>
              <div className="foot_social">
                {footSocial.map((item) => (
                  <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer Dropdown Layout */}
          <div className="dropdown_footer_menu">
            {footMenu.map((item, index) => (
              <div key={item.id}>
                <div className="dropdown_button" onClick={() => toggleDropdown(index)}>
                  <h4>{item.title}</h4>
                  {activeDropdown === index ? (
                    <ExpandLessIcon size={20} sx={{color:"white"}} />
                  ) : (
                    <ExpandMoreIcon size={20} sx={{color:"white"}} />
                  )}
                </div>
                <div className={`dropdown_content ${activeDropdown === index ? "show" : ""}`}>
                  <ul>
                    {item.menu.map((menuItem) => (
                      <li key={menuItem.id}>
                        <Link style={{color:"white",fontWeight: 100, fontSize: "smaller"}}  to={menuItem.path}>{menuItem.link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div>
              <div className="dropdown_button" onClick={() => toggleDropdown(footMenu.length)}>
                <h4>FOLLOW US</h4>
                {activeDropdown === footMenu.length ? (
                  <ExpandLessIcon size={20} sx={{color:"white"}} />
                ) : (
                  <ExpandMoreIcon size={20} sx={{color:"white"}} />
                )}
              </div>
              <div className={`dropdown_content ${activeDropdown === footMenu.length ? "show" : ""}`}>
                <div className="foot_social">
                  {footSocial.map((item) => (
                    <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="separatorFooter"></div>

          <div className="sub_footer_root">
            <div className="container_Footer">
              <div className="sub_footer_wrapper">
                <div className="foot_copyright" style={{ color: "white", fontSize:"1rem"}}>
                  <p>
                    &copy; Copyright {currYear} | P&HBYPRIYANSHU PVT Ltd, All Rights Reserved.
                    <span>
                      <a href="https://www.linkedin.com/in/shashank-meena-8aa55623a" style={{ color: "white", fontSize:"small"}}> | Developed by Shashank Meena(Softiwo)</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer >
        <div className="container">
          <div className="topInfo row">
            <div className="col d-flex align-items-center">
              <span>
                <LuShirt />
              </span>
              <span className="ml-2">Brand Warranty</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbTruckDelivery />
              </span>
              <span className="ml-2">Express Delivery</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbDiscount2 />
              </span>
              <span className="ml-2">Exiciting Deals</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <CiBadgeDollar />
              </span>
              <span className="ml-2">Secure Payment</span>
            </div>
          </div>

          <div className="row mt-5 linksWrap">
            <div className="col">
              <h5>CATEGORIES</h5>
              <ul>
                <li>
                  <Link to="#">Men Suits</Link>
                </li>
                <li>
                  <Link to="#">Women Suits</Link>
                </li>
                <li>
                  <Link to="#">Blazers</Link>
                </li>
                <li>
                  <Link to="#">T Shirts</Link>
                </li>
                <li>
                  <Link to="#">Designer's Choice</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>PRIVACY AND POLICY</h5>
              <ul>
                <li>
                  <Link to="#">Return Policy</Link>
                </li>
                <li>
                  <Link to="#">Shiping Policy</Link>
                </li>
                <li>
                  <Link to="#">Site Map</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>COMPANY</h5>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Fresh Fruits</Link>
                </li>
                <li>
                  <Link to="#">Service Centers</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>GET IN TOUCH</h5>
              <ul>
                <li>
                  <Link to="#">Email: </Link>
                </li>
                <li>
                  <Link to="#">What's App: +91 85278 93507</Link>
                </li>
                <li>
                  <Link to="#">(Mon-Sat: Timing 10am - 7pm)</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">RETURN/EXCHANGE REQUEST</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright mt-3 pt-3 pb-3 d-flex">
            <p className="mb-0">Copyright 2024. All rights reserved</p>
            <ul className="list list-inline ml-auto mb-0 socials">
              <li className="list-inline-item">
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
