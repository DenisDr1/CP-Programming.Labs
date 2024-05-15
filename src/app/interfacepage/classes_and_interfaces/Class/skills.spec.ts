import { Skills } from './skills';

describe('Skills', () => {
  let skills: Skills;

  beforeEach(() => {
    let softSkills = ['communication', 'teamwork'];
    let hardSkills = ['programming', 'problem solving'];
    skills = new Skills(softSkills, hardSkills);
  });

  fit('should create', () => {
    expect(skills).toBeTruthy();
  });

  fit('should return combined skills', () => {
    expect(skills.getSkills()).toEqual(['communication', 'teamwork', 'programming', 'problem solving']);
  });
});
