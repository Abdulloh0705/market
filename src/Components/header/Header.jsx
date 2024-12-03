import { Link } from "react-router-dom";

import { BiChevronRight } from "react-icons/bi";
import Swiper from "./Swiper";
import Section from "../section/Section";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_box">
            <ul className="header_list">
              <label className="header_label">
                <div className="link_box">
                  <li>
                    <Link to={"/woman’s fashionWoman’sfashion"} className="header_link tex">Woman’s Fashion</Link>
                  </li>

                  <div className="link_icon">
                    <BiChevronRight />
                  </div>
                </div>
              </label>
              <label className="header_label">
                <div className="link_box">
                  <li>
                    <Link to={"/men’sfashion"} className="header_link tex">Men’s Fashion</Link>
                  </li>

                  <div className="box_icon">
                    <BiChevronRight />
                  </div>
                </div>
              </label>
              <li>
                <Link to={"/electronics"} className="header_link">Electronics</Link>
              </li>
              <li>
                <Link to={"/home&lifestyle"} className="header_link">Home & Lifestyle</Link>
              </li>
              <li>
                <Link to={"/medicine"} className="header_link">Medicine</Link>
              </li>
              <li>
                <Link to={"/sports&outdoor"} className="header_link">Sports & Outdoor</Link>
              </li>
              <li>
                <Link to={"/baby’s&toys"} className="header_link">Baby’s & Toys</Link>
              </li>
              <li>
                <Link to={"/groceries&pets"} className="header_link">Groceries & Pets</Link>
              </li>
              <li>
                <Link to={"health&beauty"} className="header_link">Health & Beauty</Link>
              </li>
            </ul>
            <div className="header_right">
              <Swiper />
            </div>
          </div>
          <div className="section">
            <Section />
          </div>
        </div>

      </div>

    </>
  )
}

export default Header
