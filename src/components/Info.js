import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following } = githubUser;

  const items = [
    {
      id: 1,
      label: "repositories",
      value: public_repos,
    },
    {
      id: 2,
      label: "followers",
      value: followers,
    },
    {
      id: 3,
      label: "following",
      value: following,
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: max-content;
  margin-bottom: 120px;

  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    margin: 5px;
 
    span {
      width: 3rem;
      height: 3rem;

      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
  
    div {
      text-align: center;
    }
  }
`;

export default UserInfo;
