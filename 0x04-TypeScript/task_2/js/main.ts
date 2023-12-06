interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTaskDirectors(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome: () => 'Working from home'
  getCoffeeBreak(): string {
      return 'Getting a coffee break';
  }
  getToWork() {
    return 'Getting a coffee break'
  }
  workDirectorTaskDirectors(): string {
      return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome: () => 'Cannot work from home'
  getCoffeeBreak(): string {
      return 'Cannot have a break';
  }
  workDirectorTasks(): string {
      return 'Getting to work'
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (salary as number < 500) return new Teacher();
  return new Director();
}
