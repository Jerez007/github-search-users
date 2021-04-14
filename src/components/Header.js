import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import Search from "./Search";

const Header = () => {
  const { requests } = React.useContext(GithubContext);

  return (
    <Wrapper>
      <div className="content">
        <div className="requests">
          <h3>{requests} / 60</h3>
          <p>REQUESTS LEFT</p>
        </div>

        <div className="search">
          <Search />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .content {
    display: flex;
    align-content: center;

    position: relative;

    .search {
      padding: 20px;
      position: absolute;
      right: 0;
    }

    .requests {
      padding: 30px;
      opacity: 0.7;
      color: lightgray;
      p {
        color: white;
      }
    }
  }

  /* media queries */
  @media screen and (max-width: 509px) {
    .requests {
      padding: 10px !important;

      h3,
      p {
        font-size: 10px;
      }
    }

    .search {
      right: 0;
      top: -25px;
    }
  }
`;

export default Header;
