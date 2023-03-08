import styled from "styled-components";
import { RxMagnifyingGlass } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

export default function HeaderMenu() {
  const IMAGE_TEST = "https://wallpaperaccess.com/full/641507.jpg";

  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <HeaderMenuContainer>
        <DesktopMenu showLogout={showLogout}>
          <h1>linkr</h1>
          <div className="search-box">
            <input type="text" placeholder="Search for people" />
            <button type="submit">
              <RxMagnifyingGlass />
            </button>
          </div>
          <div className="profile" onClick={() => setShowLogout(!showLogout)}>
            <MdOutlineKeyboardArrowDown className="arrowDown" />
            <MdKeyboardArrowUp className="arrowUp" />
            <img src={IMAGE_TEST} alt="" />
          </div>
        </DesktopMenu>

        <MobileMenu>
          <div>
            <h1>LINKR</h1>
            <div className="profile" onClick={() => setShowLogout(!showLogout)}>
              <MdOutlineKeyboardArrowDown className="arrowDown" />
              <MdKeyboardArrowUp className="arrowUp" />
              <img src={IMAGE_TEST} alt="" />
            </div>
          </div>
        </MobileMenu>
{/* 
        <MobileSearchBox>
          teste
          <div className="search-box">
            <input type="text" placeholder="Search for people" />
            <button type="submit">
              <RxMagnifyingGlass />
            </button>
          </div>
        </MobileSearchBox> */}
      </HeaderMenuContainer>

      <Logout showLogout={showLogout}>
        <div>
          <h3>Logout</h3>
        </div>
      </Logout>
    </>
  );
}

const HeaderMenuContainer = styled.header`
  width: 100%;
  height: 72px;
  background: #151515;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 895px) {
    flex-direction: column;
  }
`;

const DesktopMenu = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 28px;

  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
    /* width: 438.5px; */
  }

  input {
    width: 563px;
    height: 45px;
    left: 437px;
    top: 13px;
    background: #ffffff;
    border-radius: 8px;
    border-style: none;
    padding: 9px 14px;
    box-sizing: border-box;
  }

  .search-box {
    position: relative;
    display: inline-block;
  }

  .search-box input[type="text"] {
    padding-right: 40px; /* Adjust this value as needed */
  }

  .search-box button[type="submit"] {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: #f2f2f2;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-box button[type="submit"] i {
    color: #555;
  }

  div.profile {
    width: 131px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 30px;
    color: white;

    :hover {
      cursor: pointer;
    }

    .arrowDown {
      display: ${({ showLogout }) => (showLogout ? "none" : "block")};
    }

    .arrowUp {
      display: ${({ showLogout }) => (!showLogout ? "none" : "block")};
    }

    img {
      width: 53px;
      height: 53px;
      border-radius: 26.5px;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 895px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 895px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px 28px;

    div {
      display: flex;
      justify-content: space-between;
    }

    h1 {
      font-family: "Passion One";
      font-weight: 700;
      font-size: 49px;
      line-height: 54px;
      letter-spacing: 0.05em;
      color: #ffffff;
      /* width: 438.5px; */
    }

    input {
      width: 563px;
      height: 45px;
      left: 437px;
      top: 13px;
      background: #ffffff;
      border-radius: 8px;
      border-style: none;
      padding: 9px 14px;
      box-sizing: border-box;
    }

    div.profile {
      width: 131px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      font-size: 30px;
      color: white;

      :hover {
        cursor: pointer;
      }

      .arrowDown {
        display: ${({ showLogout }) => (showLogout ? "none" : "block")};
      }

      .arrowUp {
        display: ${({ showLogout }) => (!showLogout ? "none" : "block")};
      }

      img {
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
        margin-left: 10px;
      }
    }
  }
`;
const MobileSearchBox = styled.div`
  display: none;

  @media screen and (max-width: 895px) {
    background-color: yellow;

    .search-box {
      position: relative;
      display: inline-block;
      background-color: yellow;
    }

    .search-box input[type="text"] {
      padding-right: 40px; /* Adjust this value as needed */
    }

    .search-box button[type="submit"] {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      background-color: #f2f2f2;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search-box button[type="submit"] i {
      color: #555;
    }
  }
`;

const Logout = styled.div`
  display: ${({ showLogout }) => (showLogout ? "flex" : "none")};
  justify-content: flex-end;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 47px;
    left: 1307px;
    top: 72px;
    background: #171717;
    border-radius: 0px 0px 0px 15px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;

    color: #ffffff;

    h3 {
      :hover {
        cursor: pointer;
      }
    }
  }
`;
