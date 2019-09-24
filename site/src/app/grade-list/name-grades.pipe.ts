import { Pipe, PipeTransform } from '@angular/core';
import { Grade } from './grade.model';

@Pipe({
  name: 'nameGrades'
})
export class NameGradesPipe implements PipeTransform {

  transform(grades: Grade[], searchName: string): any {
    if (!grades) { return []; }
    if (!searchName || searchName.length < 1) { return grades; }

    searchName = searchName.toLowerCase();
    return grades.filter( (grade: Grade) => {
      return grade.examName.toLowerCase().includes(searchName);
    });
  }

}
