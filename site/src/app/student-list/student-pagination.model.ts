import { Student } from './student.model';

export class StudentPagination  {
  constructor(
    public data: Student[],
    public links: Links,
    public meta: Meta
    ) {}
}

export class Links {
  constructor(
    public first: string,
    public last: string,
    public prev: string,
    public next: string
    ) {}
}

export class Meta {
  constructor(
    public current_page: number,
    public from: number,
    public last_page: number,
    public path: string,
    public per_page: number,
    public to: number,
    public total: number,
    ) {}
}