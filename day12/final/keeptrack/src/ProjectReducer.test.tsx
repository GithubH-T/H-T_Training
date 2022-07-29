import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./project";
import { initialProjectState, projectReducer } from "./ProjectReducer";
import { SAVE_PROJECT_SUCCESS } from "./ProjectTypes";

describe('project reducer', () => {
    test('should update an existing project', () => {
      const project = MOCK_PROJECTS[0];
      const updatedProject = Object.assign(new Project(), project, {
        name: project.name + ' updated',
      });
      const currentState = { ...initialProjectState, projects: [project] };
      const updatedState = {
        ...initialProjectState,
        projects: [updatedProject],
      };
      expect(
        projectReducer(currentState, {
          type: SAVE_PROJECT_SUCCESS,
          payload: updatedProject,
        })
      ).toEqual(updatedState);
    });
  });