interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome: () => 'Working from home'
  getCoffeeBreak(): string {
      return 'Getting a coffee break';
  }
  getToWork() {
    return 'Getting a coffee break'
  }
  workDirectorTasks(): string {
      return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome: () => 'Cannot work from home'
  getCoffeeBreak(): string {
      return 'Cannot have a break';
  }
  workTeacherTasks(): string {
      return 'Getting to work'
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (salary as number < 500) return new Teacher();
  return new Director();
}

const isDirector = (employee: Director | Teacher): boolean => {
  if ((employee instanceof Director)) return true;
  return false;
}

const executeWork = (employee: Director | Teacher): void => {
  if (isDirector(employee)) (employee as Director).workDirectorTasks();
  else (employee as Teacher).workTeacherTasks();
}
