import React, { useState, useEffect, Fragment } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from "./project";
import { projectAPI } from './ProjectApi';
import { useSelector } from 'react-redux';
import { AppState } from './state';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './ProjectTypes';
import { AnyAction } from 'redux';
import { loadProjects, saveProject } from './ProjectActions';

function ProjectsPage() {
  // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  // // const [projects, setProjects] = useState<Project[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | undefined>(undefined);
  // const [currentPage, setCurrentPage] = useState(1);
  const loading=useSelector(
    (appState:AppState) => appState.projectState.loading
  )
  const projects=useSelector(
    (appState:AppState) => appState.projectState.projects
  )
  const error=useSelector(
    (appState:AppState) => appState.projectState.error
  )
  const currentPage=useSelector(
    (appState:AppState) => appState.projectState.page
  )
  const dispatch = useDispatch<ThunkDispatch<ProjectState,any,AnyAction>>();
  // const handleMoreClick = () => {
  //   setCurrentPage((currentPage) => currentPage + 1)
  // }
  // useEffect(() => {
  //   async function loadProjects() {
  //     setLoading(true);
  //     try {
  //       // const data = await projectAPI.get(1);
  //       const data = await projectAPI.get(currentPage);
  //       setError("");
  //       // setProjects(data);
  //       if (currentPage === 1) {  //make currentPage a dependency and use it when fetching the data.
  //         setProjects(data);
  //       } else {
  //         setProjects((projects) => [...projects, ...data]);
  //       }
  //     }
  //     catch (e) {
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       }
  //     }
  //     finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadProjects();
  //   // }, []);
  // }, [currentPage]);
  useEffect(() => {
    dispatch(loadProjects(1))
  },[dispatch])
  const handleMoreClick = () => {
    dispatch(loadProjects(currentPage+1))
    }
  // const saveProject = (project: Project) => {
    //console.log('Saving project: ', project);
    // let updatedProjects = projects.map((p: Project) => {
    //   return p.id === project.id ? project : p;
    // });
    // setProjects(updatedProjects);
  //   projectAPI
  //     .put(project)
  //     .then((updatedProject) => {
  //       const updatedProjects = projects.map((p: Project) => {
  //         return p.id === project.id ? new Project(updatedProject) : p;
  //       });
  //       setProjects(updatedProjects);
  //     })
  //     .catch((e) => {
  //       if (e instanceof Error) {
  //         setError(e.message);
  //       }
  //     });
  // };
  //return <h1>Projects</h1>;
  return (
    <Fragment>
    <>
      <h1 data-testid="heading">Projects</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
      {/* <ProjectList onSave={saveProject} project={MOCK_PROJECTS} /> */}
      {/* <ProjectList onSave={saveProject} project={projects} /> */}
      <ProjectList project={projects}/>
      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
    </Fragment>
  );
}

export default ProjectsPage;