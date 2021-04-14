import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdLocationOn, MdLink } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    location,
    login,
  } = githubUser;

  return (
    <Wrapper>
      <a href={html_url}>
        <img src={avatar_url} alt={name} />
      </a>

      <header>
        <div>
          <h1>{name}</h1>
          <a href={html_url}>
            <h3>@{login}</h3>
          </a>
        </div>
      </header>

      <div className="links">
        <p className="company">
          <BsBriefcase className="briefcaseIcon" />
          {company}
        </p>
        <p className="location">
          <MdLocationOn className="locationIcon" /> {location || "earth"}
        </p>
        <p className="blog-links">
          <MdLink />

          <a href={`https://${blog}`}>{blog}</a>
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;

  img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    border: 6px blue solid;
  }

  p {
    text-align: center;
    color: gray;
  }

  .links {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    font-weight: 600;

    .company,
    .location {
      display: flex;
      align-items: center;
    }

    .company,
    .location,
    .blog-links {
      margin-right: 30px;
    }
  }

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .briefcaseIcon,
  .locationIcon {
    margin-right: 10px;
  }

  .blog-links {
    display: flex;
    align-items: center;
    text-decoration: none;

    a {
      margin-left: 10px;
      color: gray;
    }
  }

  h3 {
    text-transform: lowercase;
    color: lightgray;
  }

  h3:hover {
    text-decoration: underline;
  }

  /* media queries */
  @media screen and (max-width: 799px) {
    .links {
      font-size: 16px;

      .company,
      .location,
      .blog-links {
        margin-right: 20px;
      }
    }
  }

  @media screen and (max-width: 551px) {
    .links {
      font-size: 16px;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export default Card;
