import React from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../assets/data/projects";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";

const ProjectStyles = styled.div`
  padding: 3rem 0;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 1rem;
  }
  .projects__searchBar input {
    width: 95%;
    font-size: 1.5rem;

    color: black;
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: black;
  }
  @media only screen and(max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;
export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }
  return (
    <ProjectStyles>
      <div className="container" style={{ color: "white" }}>
        <SectionTitle
          heading="DDK PROJET"
          subheading="quelques unes de nos oeuvres récentes"
        />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Le Nom des projets"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}
