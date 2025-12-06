// Additional Numerical Ability Questions (60 more)
import { ExamType } from './examConfig';

interface Question {
  id: string;
  examType: ExamType;
  section: string;
  questionText: string;
  choices: string[];
  correctAnswer: string;
}
export const EXTRA_NUMERICAL: Question[] = [
  { id: 'en1', examType: 'professional', section: 'numerical', questionText: 'What is 35% of 600?', choices: ['200', '210', '220', '190'], correctAnswer: '210' },
  { id: 'en2', examType: 'professional', section: 'numerical', questionText: 'If x + 15 = 42, what is x?', choices: ['27', '28', '26', '25'], correctAnswer: '27' },
  { id: 'en3', examType: 'professional', section: 'numerical', questionText: 'A car travels 90 km/h for 2.5 hours. Distance?', choices: ['225 km', '200 km', '250 km', '180 km'], correctAnswer: '225 km' },
  { id: 'en4', examType: 'professional', section: 'numerical', questionText: 'What is 7/8 as a percentage?', choices: ['85%', '87.5%', '80%', '75%'], correctAnswer: '87.5%' },
  { id: 'en5', examType: 'professional', section: 'numerical', questionText: 'If 8 pens cost ₱120, what is the cost of 15 pens?', choices: ['₱200', '₱225', '₱240', '₱180'], correctAnswer: '₱225' },
  { id: 'en6', examType: 'professional', section: 'numerical', questionText: 'What is the value of 15² - 10²?', choices: ['125', '120', '115', '130'], correctAnswer: '125' },
  { id: 'en7', examType: 'professional', section: 'numerical', questionText: 'What is 0.6 × 0.5?', choices: ['0.3', '0.25', '0.35', '0.4'], correctAnswer: '0.3' },
  { id: 'en8', examType: 'professional', section: 'numerical', questionText: 'A product marked ₱800 is sold at 15% discount. Price?', choices: ['₱680', '₱700', '₱720', '₱660'], correctAnswer: '₱680' },
  { id: 'en9', examType: 'professional', section: 'numerical', questionText: 'What is the average of 15, 25, 35, 45, 55?', choices: ['35', '30', '40', '32'], correctAnswer: '35' },
  { id: 'en10', examType: 'professional', section: 'numerical', questionText: 'If 2/3 of a number is 48, what is the number?', choices: ['72', '64', '80', '68'], correctAnswer: '72' },
  { id: 'en11', examType: 'professional', section: 'numerical', questionText: 'What is √256?', choices: ['14', '15', '16', '17'], correctAnswer: '16' },
  { id: 'en12', examType: 'professional', section: 'numerical', questionText: 'A meeting starts at 9:45 AM and lasts 2h 30m. End time?', choices: ['12:15 PM', '12:00 PM', '11:45 AM', '12:30 PM'], correctAnswer: '12:15 PM' },
  { id: 'en13', examType: 'professional', section: 'numerical', questionText: 'What is 5/6 + 2/3?', choices: ['1 1/2', '1 1/3', '7/6', '1 2/3'], correctAnswer: '1 1/2' },
  { id: 'en14', examType: 'professional', section: 'numerical', questionText: 'If A:B = 2:5 and B:C = 3:4, what is A:C?', choices: ['6:20', '3:10', '2:4', '6:15'], correctAnswer: '3:10' },
  { id: 'en15', examType: 'professional', section: 'numerical', questionText: 'What is 18% of 550?', choices: ['99', '100', '98', '97'], correctAnswer: '99' },
  { id: 'en16', examType: 'professional', section: 'numerical', questionText: '₱10,000 at 5% simple interest for 2 years. Total?', choices: ['₱11,000', '₱10,500', '₱11,500', '₱10,800'], correctAnswer: '₱11,000' },
  { id: 'en17', examType: 'professional', section: 'numerical', questionText: 'What is 4³?', choices: ['64', '48', '12', '16'], correctAnswer: '64' },
  { id: 'en18', examType: 'professional', section: 'numerical', questionText: 'If 3x - 12 = 18, what is x?', choices: ['8', '9', '10', '11'], correctAnswer: '10' },
  { id: 'en19', examType: 'professional', section: 'numerical', questionText: 'What is 225 ÷ 15?', choices: ['15', '14', '16', '13'], correctAnswer: '15' },
  { id: 'en20', examType: 'professional', section: 'numerical', questionText: 'A triangle has base 10cm, height 6cm. Area?', choices: ['30 cm²', '60 cm²', '40 cm²', '50 cm²'], correctAnswer: '30 cm²' },
  { id: 'en21', examType: 'professional', section: 'numerical', questionText: 'What is 0.75 as a fraction?', choices: ['3/4', '2/3', '4/5', '7/10'], correctAnswer: '3/4' },
  { id: 'en22', examType: 'professional', section: 'numerical', questionText: 'If 6 workers finish in 8 days, how many for 4 days?', choices: ['12', '10', '14', '8'], correctAnswer: '12' },
  { id: 'en23', examType: 'professional', section: 'numerical', questionText: 'What is 17 × 23?', choices: ['391', '381', '401', '371'], correctAnswer: '391' },
  { id: 'en24', examType: 'professional', section: 'numerical', questionText: 'What is the LCM of 12 and 18?', choices: ['36', '24', '54', '72'], correctAnswer: '36' },
  { id: 'en25', examType: 'professional', section: 'numerical', questionText: 'A cube has side 5cm. Volume?', choices: ['125 cm³', '100 cm³', '150 cm³', '75 cm³'], correctAnswer: '125 cm³' },
  { id: 'en26', examType: 'professional', section: 'numerical', questionText: 'What is 45% as a decimal?', choices: ['0.45', '4.5', '0.045', '0.405'], correctAnswer: '0.45' },
  { id: 'en27', examType: 'professional', section: 'numerical', questionText: 'If profit is ₱120 on cost ₱400, profit %?', choices: ['30%', '25%', '35%', '40%'], correctAnswer: '30%' },
  { id: 'en28', examType: 'professional', section: 'numerical', questionText: 'What is 8.5 - 3.75?', choices: ['4.75', '5.25', '4.25', '5.75'], correctAnswer: '4.75' },
  { id: 'en29', examType: 'professional', section: 'numerical', questionText: 'A rectangle: length 15m, width 8m. Perimeter?', choices: ['46m', '48m', '50m', '44m'], correctAnswer: '46m' },
  { id: 'en30', examType: 'professional', section: 'numerical', questionText: 'What is the GCF of 48 and 60?', choices: ['12', '8', '6', '4'], correctAnswer: '12' },
  { id: 'en31', examType: 'professional', section: 'numerical', questionText: 'What is 2.4 × 3.5?', choices: ['8.4', '8.2', '8.0', '8.6'], correctAnswer: '8.4' },
  { id: 'en32', examType: 'professional', section: 'numerical', questionText: 'If x/5 = 12, what is x?', choices: ['60', '55', '65', '50'], correctAnswer: '60' },
  { id: 'en33', examType: 'professional', section: 'numerical', questionText: 'What is 5/12 - 1/4?', choices: ['1/6', '1/4', '2/12', '1/3'], correctAnswer: '1/6' },
  { id: 'en34', examType: 'professional', section: 'numerical', questionText: 'A car depreciates 10% yearly. After 1 year from ₱500,000?', choices: ['₱450,000', '₱400,000', '₱475,000', '₱425,000'], correctAnswer: '₱450,000' },
  { id: 'en35', examType: 'professional', section: 'numerical', questionText: 'What is 1.5 hours in minutes?', choices: ['90', '80', '100', '85'], correctAnswer: '90' },
  { id: 'en36', examType: 'professional', section: 'numerical', questionText: 'What is 625 ÷ 25?', choices: ['25', '20', '30', '24'], correctAnswer: '25' },
  { id: 'en37', examType: 'professional', section: 'numerical', questionText: 'If ratio is 3:7, and total is 50, find smaller part.', choices: ['15', '20', '12', '18'], correctAnswer: '15' },
  { id: 'en38', examType: 'professional', section: 'numerical', questionText: 'What is √121?', choices: ['11', '10', '12', '13'], correctAnswer: '11' },
  { id: 'en39', examType: 'professional', section: 'numerical', questionText: 'What is 3/8 as a decimal?', choices: ['0.375', '0.35', '0.38', '0.325'], correctAnswer: '0.375' },
  { id: 'en40', examType: 'professional', section: 'numerical', questionText: 'A circle has diameter 14cm. Circumference? (π=22/7)', choices: ['44 cm', '42 cm', '46 cm', '48 cm'], correctAnswer: '44 cm' },
  { id: 'en41', examType: 'professional', section: 'numerical', questionText: 'What is 22% of 450?', choices: ['99', '98', '100', '97'], correctAnswer: '99' },
  { id: 'en42', examType: 'professional', section: 'numerical', questionText: 'If 4(x+3) = 28, what is x?', choices: ['4', '5', '6', '7'], correctAnswer: '4' },
  { id: 'en43', examType: 'professional', section: 'numerical', questionText: 'What is 13 × 17?', choices: ['221', '211', '231', '201'], correctAnswer: '221' },
  { id: 'en44', examType: 'professional', section: 'numerical', questionText: 'A cylinder: radius 7cm, height 10cm. Volume? (π=22/7)', choices: ['1540 cm³', '1400 cm³', '1600 cm³', '1480 cm³'], correctAnswer: '1540 cm³' },
  { id: 'en45', examType: 'professional', section: 'numerical', questionText: 'What is 5.25 + 2.75?', choices: ['8', '7.5', '8.5', '7'], correctAnswer: '8' },
  { id: 'en46', examType: 'professional', section: 'numerical', questionText: 'If loss is 20% of CP and CP=₱500, SP=?', choices: ['₱400', '₱450', '₱350', '₱375'], correctAnswer: '₱400' },
  { id: 'en47', examType: 'professional', section: 'numerical', questionText: 'What is 2⁵?', choices: ['32', '16', '64', '24'], correctAnswer: '32' },
  { id: 'en48', examType: 'professional', section: 'numerical', questionText: 'What is 1/4 + 1/3 + 1/6?', choices: ['3/4', '2/3', '5/6', '7/12'], correctAnswer: '3/4' },
  { id: 'en49', examType: 'professional', section: 'numerical', questionText: 'Distance = 300km, Time = 5hr. Speed?', choices: ['60 km/h', '55 km/h', '65 km/h', '50 km/h'], correctAnswer: '60 km/h' },
  { id: 'en50', examType: 'professional', section: 'numerical', questionText: 'What is 0.008 × 1000?', choices: ['8', '80', '0.8', '800'], correctAnswer: '8' },
  { id: 'en51', examType: 'professional', section: 'numerical', questionText: 'What is 63 ÷ 9 + 7?', choices: ['14', '13', '15', '12'], correctAnswer: '14' },
  { id: 'en52', examType: 'professional', section: 'numerical', questionText: 'If 25% of x = 30, what is x?', choices: ['120', '100', '130', '110'], correctAnswer: '120' },
  { id: 'en53', examType: 'professional', section: 'numerical', questionText: 'What is 999 + 111?', choices: ['1110', '1100', '1010', '1000'], correctAnswer: '1110' },
  { id: 'en54', examType: 'professional', section: 'numerical', questionText: 'A square has perimeter 48cm. Area?', choices: ['144 cm²', '140 cm²', '148 cm²', '136 cm²'], correctAnswer: '144 cm²' },
  { id: 'en55', examType: 'professional', section: 'numerical', questionText: 'What is 7/10 as a percentage?', choices: ['70%', '75%', '65%', '60%'], correctAnswer: '70%' },
  { id: 'en56', examType: 'professional', section: 'numerical', questionText: 'If pipe fills tank in 6hr, what part in 2hr?', choices: ['1/3', '1/4', '1/2', '2/3'], correctAnswer: '1/3' },
  { id: 'en57', examType: 'professional', section: 'numerical', questionText: 'What is 14 × 14?', choices: ['196', '186', '206', '176'], correctAnswer: '196' },
  { id: 'en58', examType: 'professional', section: 'numerical', questionText: 'What is 3.6 ÷ 1.2?', choices: ['3', '2', '4', '2.5'], correctAnswer: '3' },
  { id: 'en59', examType: 'professional', section: 'numerical', questionText: 'Ratio of ages: 4:5, younger is 20. Elder?', choices: ['25', '24', '28', '30'], correctAnswer: '25' },
  { id: 'en60', examType: 'professional', section: 'numerical', questionText: 'What is √400?', choices: ['20', '18', '22', '25'], correctAnswer: '20' }
];
