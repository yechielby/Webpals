export class Student  {
  constructor(
    public id: number,
    public fName: string,
    public lName: string,
    public gpa: number,
    public edit?: string,
    public grades?: string
    ) {}
}
