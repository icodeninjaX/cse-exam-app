// Additional Analytical Ability Questions (60 more)
import { ExamType } from './examConfig';

interface Question {
  id: string;
  examType: ExamType;
  section: string;
  questionText: string;
  choices: string[];
  correctAnswer: string;
}
export const EXTRA_ANALYTICAL: Question[] = [
  { id: 'ea1', examType: 'professional', section: 'analytical', questionText: 'Complete: 3, 9, 27, 81, ?', choices: ['243', '162', '216', '270'], correctAnswer: '243' },
  { id: 'ea2', examType: 'professional', section: 'analytical', questionText: 'If ROAD = 42, then PATH = ?', choices: ['50', '48', '46', '52'], correctAnswer: '50' },
  { id: 'ea3', examType: 'professional', section: 'analytical', questionText: 'Find odd: 121, 144, 169, __(196)__, __(225)__, __(250)__', choices: ['121', '169', '196', '250'], correctAnswer: '250' },
  { id: 'ea4', examType: 'professional', section: 'analytical', questionText: 'If A=1, B=2... then FACE = ?', choices: ['15', '14', '16', '17'], correctAnswer: '15' },
  { id: 'ea5', examType: 'professional', section: 'analytical', questionText: 'Complete: J, F, M, A, M, J, ?', choices: ['J', 'A', 'S', 'O'], correctAnswer: 'J' },
  { id: 'ea6', examType: 'professional', section: 'analytical', questionText: 'All roses are flowers. Some flowers are red. Thus:', choices: ['All roses are red', 'Some roses may be red', 'No roses are red', 'All red things are roses'], correctAnswer: 'Some roses may be red' },
  { id: 'ea7', examType: 'professional', section: 'analytical', questionText: 'Complete: 2, 5, 11, 23, ?', choices: ['47', '46', '48', '45'], correctAnswer: '47' },
  { id: 'ea8', examType: 'professional', section: 'analytical', questionText: 'If TIGER = 62, then LION = ?', choices: ['50', '48', '52', '46'], correctAnswer: '50' },
  { id: 'ea9', examType: 'professional', section: 'analytical', questionText: 'What comes next: IK, LN, OQ, RT, ?', choices: ['UW', 'VX', 'WY', 'TV'], correctAnswer: 'UW' },
  { id: 'ea10', examType: 'professional', section: 'analytical', questionText: 'Find the odd one: Mercury, Venus, Moon, Mars', choices: ['Mercury', 'Venus', 'Moon', 'Mars'], correctAnswer: 'Moon' },
  { id: 'ea11', examType: 'professional', section: 'analytical', questionText: 'Complete: 1, 2, 4, 7, 11, ?', choices: ['15', '16', '14', '17'], correctAnswer: '16' },
  { id: 'ea12', examType: 'professional', section: 'analytical', questionText: 'All doctors treat patients. John is a doctor. Thus:', choices: ['John treats patients', 'Patients treat John', 'John is a patient', 'Cannot determine'], correctAnswer: 'John treats patients' },
  { id: 'ea13', examType: 'professional', section: 'analytical', questionText: 'If BDFH = 2468, then ACEG = ?', choices: ['1357', '2468', '1234', '3579'], correctAnswer: '1357' },
  { id: 'ea14', examType: 'professional', section: 'analytical', questionText: 'Complete: 5, 10, 20, 40, ?', choices: ['80', '60', '100', '70'], correctAnswer: '80' },
  { id: 'ea15', examType: 'professional', section: 'analytical', questionText: 'Find odd: January, March, June, September', choices: ['January', 'March', 'June', 'September'], correctAnswer: 'March' },
  { id: 'ea16', examType: 'professional', section: 'analytical', questionText: 'A is north of B. C is south of B. D is north of A. Order S to N?', choices: ['C,B,A,D', 'D,A,B,C', 'B,C,A,D', 'C,A,B,D'], correctAnswer: 'C,B,A,D' },
  { id: 'ea17', examType: 'professional', section: 'analytical', questionText: 'Complete: 6, 11, 21, 36, ?', choices: ['56', '51', '52', '55'], correctAnswer: '56' },
  { id: 'ea18', examType: 'professional', section: 'analytical', questionText: 'If 1×2=2, 2×3=6, 3×4=12, then 5×6=?', choices: ['30', '32', '28', '34'], correctAnswer: '30' },
  { id: 'ea19', examType: 'professional', section: 'analytical', questionText: 'Find odd: Carrot, Potato, Onion, Apple', choices: ['Carrot', 'Potato', 'Onion', 'Apple'], correctAnswer: 'Apple' },
  { id: 'ea20', examType: 'professional', section: 'analytical', questionText: 'Some birds can fly. Penguins are birds. Thus:', choices: ['Penguins can fly', 'Penguins cannot fly', 'Penguins may or may not fly', 'All birds are penguins'], correctAnswer: 'Penguins may or may not fly' },
  { id: 'ea21', examType: 'professional', section: 'analytical', questionText: 'Complete: ACE, BDF, CEG, DFH, ?', choices: ['EGI', 'EFG', 'FGH', 'EHI'], correctAnswer: 'EGI' },
  { id: 'ea22', examType: 'professional', section: 'analytical', questionText: 'If * means +, + means -, what is 8*4+2?', choices: ['10', '14', '6', '12'], correctAnswer: '10' },
  { id: 'ea23', examType: 'professional', section: 'analytical', questionText: 'Find odd: 8, 27, 64, 100, 125', choices: ['8', '27', '100', '125'], correctAnswer: '100' },
  { id: 'ea24', examType: 'professional', section: 'analytical', questionText: 'Complete: 99, 92, 86, 81, ?', choices: ['77', '76', '75', '78'], correctAnswer: '77' },
  { id: 'ea25', examType: 'professional', section: 'analytical', questionText: 'Anna is older than Bea. Carla is younger than Bea. Who is youngest?', choices: ['Anna', 'Bea', 'Carla', 'Cannot determine'], correctAnswer: 'Carla' },
  { id: 'ea26', examType: 'professional', section: 'analytical', questionText: 'If MAP is coded as NZK, CAT is coded as:', choices: ['DZG', 'DBU', 'CZT', 'DAU'], correctAnswer: 'DZG' },
  { id: 'ea27', examType: 'professional', section: 'analytical', questionText: 'Complete: 4, 9, 16, 25, 36, ?', choices: ['49', '47', '45', '48'], correctAnswer: '49' },
  { id: 'ea28', examType: 'professional', section: 'analytical', questionText: 'Find odd: Chair, Table, Sofa, Refrigerator', choices: ['Chair', 'Table', 'Sofa', 'Refrigerator'], correctAnswer: 'Refrigerator' },
  { id: 'ea29', examType: 'professional', section: 'analytical', questionText: 'All writers are creative. Jane is creative. Thus:', choices: ['Jane is a writer', 'Jane is not a writer', 'Jane may or may not be a writer', 'Writers are not creative'], correctAnswer: 'Jane may or may not be a writer' },
  { id: 'ea30', examType: 'professional', section: 'analytical', questionText: 'Complete: 7, 14, 28, 56, ?', choices: ['112', '108', '104', '98'], correctAnswer: '112' },
  { id: 'ea31', examType: 'professional', section: 'analytical', questionText: 'If N=2X and X=5, N=?', choices: ['10', '7', '15', '25'], correctAnswer: '10' },
  { id: 'ea32', examType: 'professional', section: 'analytical', questionText: 'Find odd: Guitar, Violin, Drum, Piano', choices: ['Guitar', 'Violin', 'Drum', 'Piano'], correctAnswer: 'Drum' },
  { id: 'ea33', examType: 'professional', section: 'analytical', questionText: 'Complete: __, 1, 3, 6, 10, 15', choices: ['0', '1', '-1', '2'], correctAnswer: '0' },
  { id: 'ea34', examType: 'professional', section: 'analytical', questionText: 'ABCD : EFGH :: IJKL : ?', choices: ['MNOP', 'LMNO', 'NOPQ', 'KLMN'], correctAnswer: 'MNOP' },
  { id: 'ea35', examType: 'professional', section: 'analytical', questionText: 'If 6#3=9, 8#4=12, then 10#5=?', choices: ['15', '14', '16', '13'], correctAnswer: '15' },
  { id: 'ea36', examType: 'professional', section: 'analytical', questionText: 'Find odd: Lion, Tiger, Wolf, Elephant', choices: ['Lion', 'Tiger', 'Wolf', 'Elephant'], correctAnswer: 'Elephant' },
  { id: 'ea37', examType: 'professional', section: 'analytical', questionText: 'Complete: 13, 17, 19, 23, 29, ?', choices: ['31', '33', '35', '37'], correctAnswer: '31' },
  { id: 'ea38', examType: 'professional', section: 'analytical', questionText: 'If X>Y and Y>Z, which is false?', choices: ['X>Z', 'Z<X', 'Y<X', 'Z>X'], correctAnswer: 'Z>X' },
  { id: 'ea39', examType: 'professional', section: 'analytical', questionText: 'Complete: ABD, BCE, CDF, DEG, ?', choices: ['EFH', 'EGH', 'EFG', 'DFH'], correctAnswer: 'EFH' },
  { id: 'ea40', examType: 'professional', section: 'analytical', questionText: 'Find odd: 2, 3, 5, 7, 9, 11', choices: ['2', '5', '9', '11'], correctAnswer: '9' },
  { id: 'ea41', examType: 'professional', section: 'analytical', questionText: 'If 12 o\'clock angle=0°, what is 3 o\'clock?', choices: ['90°', '60°', '120°', '180°'], correctAnswer: '90°' },
  { id: 'ea42', examType: 'professional', section: 'analytical', questionText: 'Complete: 144, 121, 100, 81, ?', choices: ['64', '49', '36', '25'], correctAnswer: '64' },
  { id: 'ea43', examType: 'professional', section: 'analytical', questionText: 'All mammals breathe. Whales are mammals. Thus:', choices: ['Whales breathe', 'Whales don\'t breathe', 'Some whales breathe', 'Cannot determine'], correctAnswer: 'Whales breathe' },
  { id: 'ea44', examType: 'professional', section: 'analytical', questionText: 'If PEN=35, PENCIL=?', choices: ['66', '64', '68', '70'], correctAnswer: '66' },
  { id: 'ea45', examType: 'professional', section: 'analytical', questionText: 'Complete: 2, 6, 14, 30, ?', choices: ['62', '60', '58', '64'], correctAnswer: '62' },
  { id: 'ea46', examType: 'professional', section: 'analytical', questionText: 'Find odd: Kilometer, Meter, Liter, Centimeter', choices: ['Kilometer', 'Meter', 'Liter', 'Centimeter'], correctAnswer: 'Liter' },
  { id: 'ea47', examType: 'professional', section: 'analytical', questionText: 'If ÷ means ×, what is 12÷3?', choices: ['36', '4', '9', '15'], correctAnswer: '36' },
  { id: 'ea48', examType: 'professional', section: 'analytical', questionText: 'Complete: XW, VU, TS, RQ, ?', choices: ['PO', 'OP', 'NM', 'QP'], correctAnswer: 'PO' },
  { id: 'ea49', examType: 'professional', section: 'analytical', questionText: 'A\'s father is B. B\'s sister is C. C is A\'s?', choices: ['Aunt', 'Mother', 'Sister', 'Grandmother'], correctAnswer: 'Aunt' },
  { id: 'ea50', examType: 'professional', section: 'analytical', questionText: 'Complete: 1, 3, 7, 15, 31, ?', choices: ['63', '62', '64', '61'], correctAnswer: '63' },
  { id: 'ea51', examType: 'professional', section: 'analytical', questionText: 'Find odd: Noun, Verb, Subject, Adjective', choices: ['Noun', 'Verb', 'Subject', 'Adjective'], correctAnswer: 'Subject' },
  { id: 'ea52', examType: 'professional', section: 'analytical', questionText: 'If SEND=TDOE, then HELP=?', choices: ['IFMQ', 'HFMQ', 'IFMQ', 'GDKO'], correctAnswer: 'IFMQ' },
  { id: 'ea53', examType: 'professional', section: 'analytical', questionText: 'Complete: 5, 6, 8, 11, 15, ?', choices: ['20', '19', '21', '18'], correctAnswer: '20' },
  { id: 'ea54', examType: 'professional', section: 'analytical', questionText: 'All birds have feathers. Eagles have feathers. Thus:', choices: ['Eagles are birds', 'Eagles may or may not be birds', 'All feathered are eagles', 'Cannot determine'], correctAnswer: 'Eagles may or may not be birds' },
  { id: 'ea55', examType: 'professional', section: 'analytical', questionText: 'Find odd: Addition, Subtraction, Multiplication, Number', choices: ['Addition', 'Multiplication', 'Number', 'Subtraction'], correctAnswer: 'Number' },
  { id: 'ea56', examType: 'professional', section: 'analytical', questionText: 'Complete: 1, 4, 10, 20, 35, ?', choices: ['56', '55', '50', '52'], correctAnswer: '56' },
  { id: 'ea57', examType: 'professional', section: 'analytical', questionText: 'If CLOUD=59, RAIN=?', choices: ['42', '40', '44', '38'], correctAnswer: '42' },
  { id: 'ea58', examType: 'professional', section: 'analytical', questionText: 'Mirror of CLOCK shows?', choices: ['KCOLC', 'Reversed', '2:50 for 9:10', 'CLOCK'], correctAnswer: 'KCOLC' },
  { id: 'ea59', examType: 'professional', section: 'analytical', questionText: 'Complete: B, D, G, K, ?', choices: ['P', 'O', 'N', 'M'], correctAnswer: 'P' },
  { id: 'ea60', examType: 'professional', section: 'analytical', questionText: 'Find odd: See, Hear, Taste, Walk', choices: ['See', 'Hear', 'Taste', 'Walk'], correctAnswer: 'Walk' }
];
