export interface IEmployee {
    position: string;
    salary: number;
    corporateEmail: string;

    getPosition(): string;
    getSalary(): number;
    getCorporateEmail(): string;
}