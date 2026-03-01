export interface MachineInfo {
  type: string;
  model: string;
  year: string;
  condition: 'new' | 'used';
  location: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
