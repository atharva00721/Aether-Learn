export interface Lesson {
  module: string;
}

export interface Module {
  moduleTitle: string;
  lessons: Lesson[];
}

export interface Course {
  icon: string;
  uid: string;
  title: string;
  description: string;
  progress: string;
  totalModules: number;
  modules: Module[];
  lastOpened: string;
}