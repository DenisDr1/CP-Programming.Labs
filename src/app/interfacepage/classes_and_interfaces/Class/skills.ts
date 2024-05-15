import { ISkills } from "../Interface/iskills";

export class Skills implements ISkills {
    softSkills: string[];
    hardSkills: string[];
    
    constructor(softSkills: string[], hardSkills: string[]) {
        this.softSkills = softSkills;
        this.hardSkills = hardSkills;
    }

    getSkills(): string[] {
        return [...this.softSkills, ...this.hardSkills];
    }
}