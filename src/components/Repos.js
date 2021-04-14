import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
import ChartComponent from "./Charts/ExampleChart";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return total;
    }

    if (!total[language]) {
      // creates a key and initializes it
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + 1,
      };
    }
    return total;
  }, {});

  // turn it back into an array and sorts it. takes the top 5 items only
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // most stars per language. sorts it
  // value is to the number of stars because that is what the chart is looking for
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  // gets the repos with the most stars and most forked
  // added label and value key because that is what the chart is looking for 
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = {label:name, value:forks}
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  // gets the top 5 repo with the most stars and most forked
  stars = Object.values(stars).slice(-5).reverse()
    forks = Object.values(forks).slice(-5).reverse();


  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "23",
    },
    {
      label: "Javascript",
      value: "80",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData}/> */}
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;