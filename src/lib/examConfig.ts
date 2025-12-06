export type ExamType = 'professional' | 'sub-professional';

export interface ExamConfig {
  name: string;
  totalItems: number;
  timeLimit: number; // in seconds
  passingScore: number; // percentage (0.80 = 80%)
  sections: string[];
}

export const EXAM_CONFIG: Record<ExamType, ExamConfig> = {
  professional: {
    name: "Professional Level",
    totalItems: 170,
    timeLimit: 190 * 60, // 3 hours 10 minutes = 11,400 seconds
    passingScore: 0.80,
    sections: ['verbal', 'numerical', 'analytical', 'general']
  },
  'sub-professional': {
    name: "Sub-Professional Level",
    totalItems: 165,
    timeLimit: 160 * 60, // 2 hours 40 minutes = 9,600 seconds
    passingScore: 0.80,
    sections: ['verbal', 'numerical', 'clerical', 'general']
  }
};

export const SECTION_NAMES: Record<string, string> = {
  verbal: "Verbal Ability",
  numerical: "Numerical Ability",
  analytical: "Analytical Ability",
  clerical: "Clerical Ability",
  general: "General Information"
};
