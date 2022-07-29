import React, { useState } from 'react';
import { Project } from './project';
import ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm"


interface ProjectListProps {
    project: Project[];
    // onSave: (project: Project) => void;
}
function ProjectList({ project
    // , onSave
 }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        // console.log(project);
        setProjectBeingEdited(project);
    };
    const cancelEditing = () => {
        setProjectBeingEdited({});
    };
    // return <pre>{JSON.stringify(project,null,'')}</pre>;
    // return (
    //     <ul className = "row">
    //         {project.map((project) => (
    //             <li key={project.id}>{project.name}</li>
    //         ))}
    //     </ul>
    // );
    return (
        <div className="row">
            {project.map((project) => (
                <div key={project.id} className="cols-sm">
                    <label>List</label>
                    {/* <div className="card">
                        <img src={project.imageUrl} alt={project.name}/>
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{project.name}</strong>
                            </h5>
                            <p>{project.description}</p>
                            <p>Budget:{project.budget.toLocaleString()}</p>
                        </section>
                    </div> */}
                    {/* <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>       
                    <ProjectForm /> */}
                    {project === projectBeingEdited ? (<ProjectForm project={project}
                    //  onSave={onSave}
                    onCancel={cancelEditing} />) : (<ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
                    )}
                </div>
            ))}
        </div>
    );
}
export default ProjectList;