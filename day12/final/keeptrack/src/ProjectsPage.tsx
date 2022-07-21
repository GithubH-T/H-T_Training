import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import {Project} from "./project";

function ProjectsPage() {
  const saveProject = (project: Project) => {
    console.log('Saving project: ', project);
  };
  //return <h1>Projects</h1>;
  return (
    <>
      <h1>Projects</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
      <ProjectList onSave={saveProject} project={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;