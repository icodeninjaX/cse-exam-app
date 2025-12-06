import { ExamType } from './examConfig';
import { EXTRA_VERBAL } from './extraVerbal';
import { EXTRA_NUMERICAL } from './extraNumerical';
import { EXTRA_ANALYTICAL } from './extraAnalytical';
import { EXTRA_GENERAL } from './extraGeneral';

export interface Question {
  id: string;
  examType: ExamType;
  section: string;
  questionText: string;
  choices: string[];
  correctAnswer: string;
  explanation?: string; // How to solve the question
}

// Complete 170 questions for Professional Level CSE Exam
export const PROFESSIONAL_QUESTIONS: Question[] = [
  // ==================== VERBAL ABILITY (45 questions) ====================
  // Grammar and Correct Usage
  { id: 'v1', examType: 'professional', section: 'verbal', questionText: 'Choose the word that best completes the sentence: The manager\'s _____ approach helped resolve the conflict quickly.', choices: ['diplomatic', 'aggressive', 'indifferent', 'hostile'], correctAnswer: 'diplomatic', explanation: 'The context says the approach "helped resolve the conflict quickly." Diplomatic means skillful in dealing with people = positive outcome. Aggressive/hostile would escalate conflict. Indifferent means not caring.' },
  { id: 'v2', examType: 'professional', section: 'verbal', questionText: 'Which word is the OPPOSITE of "benevolent"?', choices: ['Generous', 'Kind', 'Malevolent', 'Charitable'], correctAnswer: 'Malevolent', explanation: 'Benevolent = kind, generous (bene- means good). The prefix "mal-" means bad/evil. Malevolent = wishing harm to others. It is the direct opposite.' },
  { id: 'v3', examType: 'professional', section: 'verbal', questionText: 'Identify the correct sentence:', choices: ['Each of the students have submitted their reports.', 'Each of the students has submitted their report.', 'Each of the students have submitted his report.', 'Each of the students has submitted his or her report.'], correctAnswer: 'Each of the students has submitted his or her report.', explanation: '"Each" is singular, so it takes "has" (not "have"). For gender-neutral language with singular subjects, use "his or her" instead of "their."' },
  { id: 'v4', examType: 'professional', section: 'verbal', questionText: 'What is the meaning of the word "ubiquitous"?', choices: ['Rare', 'Present everywhere', 'Hidden', 'Ancient'], correctAnswer: 'Present everywhere', explanation: 'Ubiquitous comes from Latin "ubique" meaning "everywhere." Example: Smartphones are ubiquitous = they are found everywhere.' },
  { id: 'v5', examType: 'professional', section: 'verbal', questionText: 'Choose the correct word: The government _____ new policies to address climate change.', choices: ['implemented', 'implementing', 'implement', 'implements'], correctAnswer: 'implemented' },
  { id: 'v6', examType: 'professional', section: 'verbal', questionText: 'Which word means "to make something easier"?', choices: ['Complicate', 'Facilitate', 'Aggravate', 'Deteriorate'], correctAnswer: 'Facilitate' },
  { id: 'v7', examType: 'professional', section: 'verbal', questionText: 'Select the word that is spelled correctly:', choices: ['Occassion', 'Occurence', 'Accommodate', 'Seperate'], correctAnswer: 'Accommodate' },
  { id: 'v8', examType: 'professional', section: 'verbal', questionText: 'The word "ephemeral" means:', choices: ['Lasting forever', 'Short-lived', 'Extremely large', 'Very small'], correctAnswer: 'Short-lived' },
  { id: 'v9', examType: 'professional', section: 'verbal', questionText: 'Choose the correct verb form: Neither the teacher nor the students _____ present.', choices: ['was', 'were', 'is', 'has been'], correctAnswer: 'were' },
  { id: 'v10', examType: 'professional', section: 'verbal', questionText: 'What is the synonym of "meticulous"?', choices: ['Careless', 'Thorough', 'Quick', 'Simple'], correctAnswer: 'Thorough' },
  { id: 'v11', examType: 'professional', section: 'verbal', questionText: 'Identify the sentence with correct punctuation:', choices: ['The report, which was submitted late was rejected.', 'The report which was submitted late, was rejected.', 'The report, which was submitted late, was rejected.', 'The report which was submitted late was rejected.'], correctAnswer: 'The report, which was submitted late, was rejected.' },
  { id: 'v12', examType: 'professional', section: 'verbal', questionText: 'The antonym of "verbose" is:', choices: ['Wordy', 'Concise', 'Lengthy', 'Detailed'], correctAnswer: 'Concise' },
  { id: 'v13', examType: 'professional', section: 'verbal', questionText: 'Choose the correct preposition: The meeting is scheduled _____ Monday.', choices: ['in', 'on', 'at', 'by'], correctAnswer: 'on' },
  { id: 'v14', examType: 'professional', section: 'verbal', questionText: 'What does "prudent" mean?', choices: ['Reckless', 'Wise and careful', 'Aggressive', 'Lazy'], correctAnswer: 'Wise and careful' },
  { id: 'v15', examType: 'professional', section: 'verbal', questionText: 'Select the correctly spelled word:', choices: ['Beaurocracy', 'Bureacracy', 'Bureaucracy', 'Bureacrasy'], correctAnswer: 'Bureaucracy' },
  { id: 'v16', examType: 'professional', section: 'verbal', questionText: 'The word "ambiguous" means:', choices: ['Clear', 'Unclear or having multiple meanings', 'Definite', 'Simple'], correctAnswer: 'Unclear or having multiple meanings' },
  { id: 'v17', examType: 'professional', section: 'verbal', questionText: 'Choose the correct word: The committee _____ its decision yesterday.', choices: ['announce', 'announces', 'announced', 'announcing'], correctAnswer: 'announced' },
  { id: 'v18', examType: 'professional', section: 'verbal', questionText: 'What is the meaning of "pragmatic"?', choices: ['Idealistic', 'Practical', 'Theoretical', 'Emotional'], correctAnswer: 'Practical' },
  { id: 'v19', examType: 'professional', section: 'verbal', questionText: 'Identify the error: "He don\'t know the answer to the question."', choices: ['He', 'don\'t', 'answer', 'question'], correctAnswer: 'don\'t' },
  { id: 'v20', examType: 'professional', section: 'verbal', questionText: 'The synonym of "tenacious" is:', choices: ['Weak', 'Persistent', 'Flexible', 'Yielding'], correctAnswer: 'Persistent' },
  { id: 'v21', examType: 'professional', section: 'verbal', questionText: 'Choose the correct conjunction: I will attend the meeting _____ I am feeling unwell.', choices: ['although', 'because', 'therefore', 'so'], correctAnswer: 'although' },
  { id: 'v22', examType: 'professional', section: 'verbal', questionText: 'What does "inevitable" mean?', choices: ['Avoidable', 'Certain to happen', 'Unlikely', 'Preventable'], correctAnswer: 'Certain to happen' },
  { id: 'v23', examType: 'professional', section: 'verbal', questionText: 'Select the sentence with proper subject-verb agreement:', choices: ['The news are very disturbing.', 'The news is very disturbing.', 'The news were very disturbing.', 'The news have been very disturbing.'], correctAnswer: 'The news is very disturbing.' },
  { id: 'v24', examType: 'professional', section: 'verbal', questionText: 'The antonym of "affluent" is:', choices: ['Wealthy', 'Impoverished', 'Prosperous', 'Rich'], correctAnswer: 'Impoverished' },
  { id: 'v25', examType: 'professional', section: 'verbal', questionText: 'Choose the correct phrase: The manager, along with his staff, _____ attending the conference.', choices: ['are', 'is', 'were', 'have been'], correctAnswer: 'is' },
  { id: 'v26', examType: 'professional', section: 'verbal', questionText: 'What is the meaning of "diligent"?', choices: ['Lazy', 'Hardworking', 'Careless', 'Indifferent'], correctAnswer: 'Hardworking' },
  { id: 'v27', examType: 'professional', section: 'verbal', questionText: 'Identify the correctly punctuated sentence:', choices: ['However the project was completed on time.', 'However, the project was completed on time.', 'However; the project was completed on time.', 'However: the project was completed on time.'], correctAnswer: 'However, the project was completed on time.' },
  { id: 'v28', examType: 'professional', section: 'verbal', questionText: 'The word "obsolete" means:', choices: ['Modern', 'Outdated', 'Advanced', 'Current'], correctAnswer: 'Outdated' },
  { id: 'v29', examType: 'professional', section: 'verbal', questionText: 'Choose the correct form: One of the employees _____ promoted.', choices: ['were', 'was', 'are', 'have been'], correctAnswer: 'was' },
  { id: 'v30', examType: 'professional', section: 'verbal', questionText: 'What does "comprehensive" mean?', choices: ['Partial', 'Complete and thorough', 'Brief', 'Limited'], correctAnswer: 'Complete and thorough' },
  { id: 'v31', examType: 'professional', section: 'verbal', questionText: 'Select the word spelled correctly:', choices: ['Recieve', 'Receive', 'Receve', 'Receieve'], correctAnswer: 'Receive' },
  { id: 'v32', examType: 'professional', section: 'verbal', questionText: 'The synonym of "adamant" is:', choices: ['Flexible', 'Unyielding', 'Agreeable', 'Changeable'], correctAnswer: 'Unyielding' },
  { id: 'v33', examType: 'professional', section: 'verbal', questionText: 'Choose the correct word: She speaks _____ than her sister.', choices: ['more fluent', 'most fluently', 'more fluently', 'fluenter'], correctAnswer: 'more fluently' },
  { id: 'v34', examType: 'professional', section: 'verbal', questionText: 'What is the antonym of "transparent"?', choices: ['Clear', 'Opaque', 'Visible', 'Obvious'], correctAnswer: 'Opaque' },
  { id: 'v35', examType: 'professional', section: 'verbal', questionText: 'Identify the sentence with correct grammar:', choices: ['Between you and I, this is confidential.', 'Between you and me, this is confidential.', 'Between you and myself, this is confidential.', 'Between I and you, this is confidential.'], correctAnswer: 'Between you and me, this is confidential.' },
  { id: 'v36', examType: 'professional', section: 'verbal', questionText: 'The word "plausible" means:', choices: ['Impossible', 'Believable', 'Definite', 'Proven'], correctAnswer: 'Believable' },
  { id: 'v37', examType: 'professional', section: 'verbal', questionText: 'Choose the correct article: _____ honest man is always respected.', choices: ['A', 'An', 'The', 'No article needed'], correctAnswer: 'An' },
  { id: 'v38', examType: 'professional', section: 'verbal', questionText: 'What does "impartial" mean?', choices: ['Biased', 'Fair and unbiased', 'Partial', 'Prejudiced'], correctAnswer: 'Fair and unbiased' },
  { id: 'v39', examType: 'professional', section: 'verbal', questionText: 'Select the correctly spelled word:', choices: ['Liason', 'Liaison', 'Liasion', 'Liasson'], correctAnswer: 'Liaison' },
  { id: 'v40', examType: 'professional', section: 'verbal', questionText: 'The antonym of "lenient" is:', choices: ['Gentle', 'Strict', 'Kind', 'Merciful'], correctAnswer: 'Strict' },
  { id: 'v41', examType: 'professional', section: 'verbal', questionText: 'Choose the correct tense: By the time he arrives, we _____ the meeting.', choices: ['will finish', 'will have finished', 'finished', 'are finishing'], correctAnswer: 'will have finished' },
  { id: 'v42', examType: 'professional', section: 'verbal', questionText: 'What is the meaning of "alleviate"?', choices: ['Worsen', 'Reduce or relieve', 'Increase', 'Intensify'], correctAnswer: 'Reduce or relieve' },
  { id: 'v43', examType: 'professional', section: 'verbal', questionText: 'The synonym of "eloquent" is:', choices: ['Inarticulate', 'Expressive', 'Silent', 'Quiet'], correctAnswer: 'Expressive' },
  { id: 'v44', examType: 'professional', section: 'verbal', questionText: 'Identify the correct sentence:', choices: ['Laying on the floor, I found my keys.', 'Lying on the floor, I found my keys.', 'I found my keys laying on the floor.', 'I found my keys lying on the floor.'], correctAnswer: 'I found my keys lying on the floor.' },
  { id: 'v45', examType: 'professional', section: 'verbal', questionText: 'What does "mitigate" mean?', choices: ['Aggravate', 'Make less severe', 'Worsen', 'Intensify'], correctAnswer: 'Make less severe' },

  // ==================== NUMERICAL ABILITY (45 questions) ====================
  { id: 'n1', examType: 'professional', section: 'numerical', questionText: 'If a product costs ₱450 and is sold at a 20% profit, what is the selling price?', choices: ['₱540', '₱520', '₱500', '₱560'], correctAnswer: '₱540', explanation: 'Selling Price = Cost + Profit. Profit = 20% of ₱450 = 0.20 × 450 = ₱90. So SP = ₱450 + ₱90 = ₱540. Shortcut: SP = Cost × 1.20 = 450 × 1.20 = ₱540' },
  { id: 'n2', examType: 'professional', section: 'numerical', questionText: 'A worker can complete a task in 6 hours. Another worker can do it in 4 hours. How long working together?', choices: ['2 hours', '2.4 hours', '3 hours', '5 hours'], correctAnswer: '2.4 hours', explanation: 'Use the formula: 1/T = 1/T₁ + 1/T₂. Here: 1/T = 1/6 + 1/4 = 2/12 + 3/12 = 5/12. So T = 12/5 = 2.4 hours.' },
  { id: 'n3', examType: 'professional', section: 'numerical', questionText: 'What is 15% of 840?', choices: ['126', '124', '128', '130'], correctAnswer: '126', explanation: '15% = 15/100 = 0.15. Calculate: 840 × 0.15 = 126. Shortcut: 10% of 840 = 84, 5% = 42. So 15% = 84 + 42 = 126.' },
  { id: 'n4', examType: 'professional', section: 'numerical', questionText: 'If 3x + 7 = 22, what is the value of x?', choices: ['5', '6', '7', '8'], correctAnswer: '5', explanation: 'Step 1: Subtract 7 from both sides: 3x = 22 - 7 = 15. Step 2: Divide both sides by 3: x = 15 ÷ 3 = 5.' },
  { id: 'n5', examType: 'professional', section: 'numerical', questionText: 'A train travels 240 km in 3 hours. What is its average speed?', choices: ['70 km/h', '75 km/h', '80 km/h', '85 km/h'], correctAnswer: '80 km/h', explanation: 'Speed = Distance ÷ Time. Speed = 240 km ÷ 3 hours = 80 km/h.' },
  { id: 'n6', examType: 'professional', section: 'numerical', questionText: 'What is 25% of 400?', choices: ['80', '100', '120', '90'], correctAnswer: '100' },
  { id: 'n7', examType: 'professional', section: 'numerical', questionText: 'If 5 workers can complete a job in 12 days, how many days for 10 workers?', choices: ['6 days', '8 days', '24 days', '4 days'], correctAnswer: '6 days' },
  { id: 'n8', examType: 'professional', section: 'numerical', questionText: 'What is the value of 8² - 5²?', choices: ['39', '36', '45', '30'], correctAnswer: '39' },
  { id: 'n9', examType: 'professional', section: 'numerical', questionText: 'A shirt costs ₱500. After a 30% discount, what is the sale price?', choices: ['₱350', '₱300', '₱400', '₱450'], correctAnswer: '₱350' },
  { id: 'n10', examType: 'professional', section: 'numerical', questionText: 'What is 3/4 + 1/2?', choices: ['1', '1 1/4', '5/4', '1 1/2'], correctAnswer: '1 1/4' },
  { id: 'n11', examType: 'professional', section: 'numerical', questionText: 'If the ratio of boys to girls is 3:5, and there are 24 boys, how many girls?', choices: ['40', '35', '30', '45'], correctAnswer: '40' },
  { id: 'n12', examType: 'professional', section: 'numerical', questionText: 'What is 2.5 × 4.2?', choices: ['10.5', '10', '10.2', '11'], correctAnswer: '10.5' },
  { id: 'n13', examType: 'professional', section: 'numerical', questionText: 'A car travels 150 km using 10 liters of fuel. How many liters for 300 km?', choices: ['15 liters', '20 liters', '25 liters', '30 liters'], correctAnswer: '20 liters' },
  { id: 'n14', examType: 'professional', section: 'numerical', questionText: 'What is the average of 12, 18, 24, and 30?', choices: ['20', '21', '22', '23'], correctAnswer: '21' },
  { id: 'n15', examType: 'professional', section: 'numerical', questionText: 'If a = 3 and b = 4, what is a² + b²?', choices: ['25', '24', '49', '12'], correctAnswer: '25' },
  { id: 'n16', examType: 'professional', section: 'numerical', questionText: 'What is 40% of 250?', choices: ['100', '90', '110', '80'], correctAnswer: '100' },
  { id: 'n17', examType: 'professional', section: 'numerical', questionText: 'A rectangle has length 12cm and width 8cm. What is its area?', choices: ['96 cm²', '40 cm²', '80 cm²', '20 cm²'], correctAnswer: '96 cm²' },
  { id: 'n18', examType: 'professional', section: 'numerical', questionText: 'What is 144 ÷ 12?', choices: ['11', '12', '13', '14'], correctAnswer: '12' },
  { id: 'n19', examType: 'professional', section: 'numerical', questionText: 'If a book costs ₱120 and you pay ₱500, how much change do you receive?', choices: ['₱380', '₱360', '₱400', '₱340'], correctAnswer: '₱380' },
  { id: 'n20', examType: 'professional', section: 'numerical', questionText: 'What is 5/8 as a decimal?', choices: ['0.625', '0.58', '0.65', '0.525'], correctAnswer: '0.625' },
  { id: 'n21', examType: 'professional', section: 'numerical', questionText: 'A circle has a radius of 7 cm. What is its diameter?', choices: ['14 cm', '21 cm', '7 cm', '3.5 cm'], correctAnswer: '14 cm' },
  { id: 'n22', examType: 'professional', section: 'numerical', questionText: 'What is 18 × 15?', choices: ['270', '265', '275', '280'], correctAnswer: '270' },
  { id: 'n23', examType: 'professional', section: 'numerical', questionText: 'If ₱5,000 earns ₱500 interest in one year, what is the interest rate?', choices: ['8%', '10%', '12%', '15%'], correctAnswer: '10%' },
  { id: 'n24', examType: 'professional', section: 'numerical', questionText: 'What is the square root of 169?', choices: ['11', '12', '13', '14'], correctAnswer: '13' },
  { id: 'n25', examType: 'professional', section: 'numerical', questionText: 'A bag contains 3 red and 5 blue balls. What fraction are red?', choices: ['3/8', '5/8', '3/5', '5/3'], correctAnswer: '3/8' },
  { id: 'n26', examType: 'professional', section: 'numerical', questionText: 'What is 75% expressed as a fraction?', choices: ['3/4', '2/3', '7/10', '4/5'], correctAnswer: '3/4' },
  { id: 'n27', examType: 'professional', section: 'numerical', questionText: 'If 2x - 5 = 15, what is x?', choices: ['8', '9', '10', '11'], correctAnswer: '10' },
  { id: 'n28', examType: 'professional', section: 'numerical', questionText: 'A triangle has sides 3, 4, and 5 cm. What is its perimeter?', choices: ['10 cm', '11 cm', '12 cm', '13 cm'], correctAnswer: '12 cm' },
  { id: 'n29', examType: 'professional', section: 'numerical', questionText: 'What is 1000 - 347?', choices: ['653', '663', '657', '647'], correctAnswer: '653' },
  { id: 'n30', examType: 'professional', section: 'numerical', questionText: 'If a meeting lasts 2 hours 45 minutes, how many minutes is that?', choices: ['145', '155', '165', '175'], correctAnswer: '165' },
  { id: 'n31', examType: 'professional', section: 'numerical', questionText: 'What is 0.25 × 80?', choices: ['20', '15', '25', '30'], correctAnswer: '20' },
  { id: 'n32', examType: 'professional', section: 'numerical', questionText: 'A store marks up items by 50%. If cost is ₱200, what is the selling price?', choices: ['₱250', '₱300', '₱350', '₱400'], correctAnswer: '₱300' },
  { id: 'n33', examType: 'professional', section: 'numerical', questionText: 'What is the LCM of 6 and 8?', choices: ['24', '48', '12', '16'], correctAnswer: '24' },
  { id: 'n34', examType: 'professional', section: 'numerical', questionText: 'If a tank fills 1/3 in 20 minutes, how long to fill completely?', choices: ['40 minutes', '50 minutes', '60 minutes', '80 minutes'], correctAnswer: '60 minutes' },
  { id: 'n35', examType: 'professional', section: 'numerical', questionText: 'What is 7 × 8 + 6?', choices: ['56', '62', '68', '54'], correctAnswer: '62' },
  { id: 'n36', examType: 'professional', section: 'numerical', questionText: 'A dozen eggs costs ₱84. How much for one egg?', choices: ['₱6', '₱7', '₱8', '₱5'], correctAnswer: '₱7' },
  { id: 'n37', examType: 'professional', section: 'numerical', questionText: 'What is 3³?', choices: ['9', '18', '27', '81'], correctAnswer: '27' },
  { id: 'n38', examType: 'professional', section: 'numerical', questionText: 'If the sum of two numbers is 50 and one is 18, what is the other?', choices: ['32', '28', '22', '38'], correctAnswer: '32' },
  { id: 'n39', examType: 'professional', section: 'numerical', questionText: 'What is 5.6 + 3.45?', choices: ['9.05', '8.95', '9.15', '8.05'], correctAnswer: '9.05' },
  { id: 'n40', examType: 'professional', section: 'numerical', questionText: 'A bus travels 45 km/h for 4 hours. What is the distance?', choices: ['180 km', '160 km', '200 km', '150 km'], correctAnswer: '180 km' },
  { id: 'n41', examType: 'professional', section: 'numerical', questionText: 'What is 2/5 as a percentage?', choices: ['40%', '25%', '50%', '35%'], correctAnswer: '40%' },
  { id: 'n42', examType: 'professional', section: 'numerical', questionText: 'If 4 pens cost ₱60, how much do 10 pens cost?', choices: ['₱150', '₱120', '₱180', '₱200'], correctAnswer: '₱150' },
  { id: 'n43', examType: 'professional', section: 'numerical', questionText: 'What is the GCF of 24 and 36?', choices: ['6', '8', '12', '4'], correctAnswer: '12' },
  { id: 'n44', examType: 'professional', section: 'numerical', questionText: 'A square has a side of 9 cm. What is its perimeter?', choices: ['36 cm', '81 cm', '27 cm', '18 cm'], correctAnswer: '36 cm' },
  { id: 'n45', examType: 'professional', section: 'numerical', questionText: 'What is 100 - 35% of 100?', choices: ['65', '35', '75', '55'], correctAnswer: '65' },

  // ==================== ANALYTICAL ABILITY (40 questions) ====================
  { id: 'a1', examType: 'professional', section: 'analytical', questionText: 'All managers are leaders. Some leaders are visionaries. Which statement MUST be true?', choices: ['All managers are visionaries', 'Some managers may be visionaries', 'No managers are visionaries', 'All visionaries are managers'], correctAnswer: 'Some managers may be visionaries', explanation: 'This is a syllogism. All managers = leaders (certain). Some leaders = visionaries (uncertain). So some managers MIGHT be visionaries, but not definitely. "May be" is the safest conclusion.' },
  { id: 'a2', examType: 'professional', section: 'analytical', questionText: 'If APPLE is coded as ELPPA, how is MANGO coded?', choices: ['OGNAM', 'GNAMO', 'OGANM', 'MANOG'], correctAnswer: 'OGNAM', explanation: 'APPLE → ELPPA is the word spelled backwards. Apply same rule: MANGO reversed = OGNAM.' },
  { id: 'a3', examType: 'professional', section: 'analytical', questionText: 'Complete the series: 2, 6, 12, 20, 30, ?', choices: ['40', '42', '44', '46'], correctAnswer: '42', explanation: 'Find the differences: 6-2=4, 12-6=6, 20-12=8, 30-20=10. Pattern: +4, +6, +8, +10, +12. So next = 30 + 12 = 42.' },
  { id: 'a4', examType: 'professional', section: 'analytical', questionText: 'If A > B, B > C, and C > D, which is definitely true?', choices: ['D > A', 'A > D', 'B > D only', 'Cannot be determined'], correctAnswer: 'A > D', explanation: 'Chain the inequalities: A > B > C > D. This means A is the largest and D is the smallest, so A > D is definitely true.' },
  { id: 'a5', examType: 'professional', section: 'analytical', questionText: 'Which number does NOT belong: 2, 5, 10, 17, 26, 35?', choices: ['10', '17', '26', '35'], correctAnswer: '35' },
  { id: 'a6', examType: 'professional', section: 'analytical', questionText: 'If CAT is coded as 24, how is DOG coded?', choices: ['26', '27', '28', '25'], correctAnswer: '26' },
  { id: 'a7', examType: 'professional', section: 'analytical', questionText: 'Complete: 1, 4, 9, 16, 25, ?', choices: ['30', '36', '49', '64'], correctAnswer: '36', explanation: 'These are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, so next is 6²=36.' },
  { id: 'a8', examType: 'professional', section: 'analytical', questionText: 'All cats are mammals. All mammals are animals. Therefore:', choices: ['All animals are cats', 'All cats are animals', 'Some animals are cats', 'No cats are animals'], correctAnswer: 'All cats are animals', explanation: 'Transitive property: If cats ⊆ mammals and mammals ⊆ animals, then cats ⊆ animals. So all cats are animals.' },
  { id: 'a9', examType: 'professional', section: 'analytical', questionText: 'If Monday = 1, Wednesday = 3, then Sunday = ?', choices: ['5', '6', '7', '0'], correctAnswer: '7' },
  { id: 'a10', examType: 'professional', section: 'analytical', questionText: 'Complete: A, C, F, J, O, ?', choices: ['T', 'U', 'V', 'W'], correctAnswer: 'U' },
  { id: 'a11', examType: 'professional', section: 'analytical', questionText: 'John is taller than Mary. Mary is taller than Sue. Who is the shortest?', choices: ['John', 'Mary', 'Sue', 'Cannot determine'], correctAnswer: 'Sue' },
  { id: 'a12', examType: 'professional', section: 'analytical', questionText: 'Complete the series: 3, 6, 11, 18, 27, ?', choices: ['36', '38', '40', '42'], correctAnswer: '38' },
  { id: 'a13', examType: 'professional', section: 'analytical', questionText: 'If WATER is coded as XBUFS, how is EARTH coded?', choices: ['FBSUI', 'FBSUI', 'FBUUI', 'FBSUI'], correctAnswer: 'FBSUI' },
  { id: 'a14', examType: 'professional', section: 'analytical', questionText: 'Which is the odd one out: Circle, Square, Triangle, Cube?', choices: ['Circle', 'Square', 'Triangle', 'Cube'], correctAnswer: 'Cube' },
  { id: 'a15', examType: 'professional', section: 'analytical', questionText: 'If all A are B, and all B are C, then:', choices: ['All C are A', 'All A are C', 'Some C are A', 'None of these'], correctAnswer: 'All A are C' },
  { id: 'a16', examType: 'professional', section: 'analytical', questionText: 'Complete: 100, 95, 85, 70, 50, ?', choices: ['20', '25', '30', '35'], correctAnswer: '25' },
  { id: 'a17', examType: 'professional', section: 'analytical', questionText: 'If RED = 27, then BLUE = ?', choices: ['40', '42', '44', '38'], correctAnswer: '40' },
  { id: 'a18', examType: 'professional', section: 'analytical', questionText: 'Which letter comes next: A, Z, B, Y, C, X, D, ?', choices: ['E', 'V', 'W', 'U'], correctAnswer: 'W' },
  { id: 'a19', examType: 'professional', section: 'analytical', questionText: 'If 2 = 6, 3 = 12, 4 = 20, then 5 = ?', choices: ['25', '30', '35', '40'], correctAnswer: '30' },
  { id: 'a20', examType: 'professional', section: 'analytical', questionText: 'All doctors are professionals. Some professionals are wealthy. Thus:', choices: ['All doctors are wealthy', 'Some doctors may be wealthy', 'No doctors are wealthy', 'Doctors are not professionals'], correctAnswer: 'Some doctors may be wealthy' },
  { id: 'a21', examType: 'professional', section: 'analytical', questionText: 'Complete: 2, 3, 5, 7, 11, 13, ?', choices: ['15', '17', '19', '21'], correctAnswer: '17' },
  { id: 'a22', examType: 'professional', section: 'analytical', questionText: 'If FISH is written as EHRG, then BIRD is written as:', choices: ['AKQC', 'CHSE', 'AQKC', 'CIRD'], correctAnswer: 'AHQC' },
  { id: 'a23', examType: 'professional', section: 'analytical', questionText: 'There are 5 people: A, B, C, D, E. A is taller than B, C is shorter than D, E is taller than A, D is shorter than B. Who is tallest?', choices: ['A', 'B', 'C', 'E'], correctAnswer: 'E' },
  { id: 'a24', examType: 'professional', section: 'analytical', questionText: 'What comes next: AB, CD, EF, GH, ?', choices: ['HI', 'IJ', 'JK', 'KL'], correctAnswer: 'IJ' },
  { id: 'a25', examType: 'professional', section: 'analytical', questionText: 'If North becomes East, East becomes South, what does West become?', choices: ['North', 'South', 'East', 'West'], correctAnswer: 'North' },
  { id: 'a26', examType: 'professional', section: 'analytical', questionText: 'Complete: 1, 1, 2, 3, 5, 8, ?', choices: ['11', '12', '13', '14'], correctAnswer: '13' },
  { id: 'a27', examType: 'professional', section: 'analytical', questionText: 'Which is different: 32, 45, 56, 63, 81?', choices: ['32', '45', '56', '81'], correctAnswer: '56' },
  { id: 'a28', examType: 'professional', section: 'analytical', questionText: 'If + means ×, × means ÷, ÷ means -, - means +, then 8 + 4 × 2 ÷ 1 - 3 = ?', choices: ['15', '16', '17', '18'], correctAnswer: '18' },
  { id: 'a29', examType: 'professional', section: 'analytical', questionText: 'No teachers are students. All professors are teachers. Therefore:', choices: ['No professors are students', 'All students are professors', 'Some professors are students', 'Cannot determine'], correctAnswer: 'No professors are students' },
  { id: 'a30', examType: 'professional', section: 'analytical', questionText: 'Complete: 64, 32, 16, 8, ?', choices: ['2', '4', '6', '0'], correctAnswer: '4' },
  { id: 'a31', examType: 'professional', section: 'analytical', questionText: 'If today is Wednesday, what day was it 100 days ago?', choices: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'], correctAnswer: 'Sunday' },
  { id: 'a32', examType: 'professional', section: 'analytical', questionText: 'Find the odd one: 27, 64, 125, 216, 300', choices: ['27', '64', '216', '300'], correctAnswer: '300' },
  { id: 'a33', examType: 'professional', section: 'analytical', questionText: 'Complete: AZ, BY, CX, DW, ?', choices: ['EU', 'EV', 'FU', 'FV'], correctAnswer: 'EV' },
  { id: 'a34', examType: 'professional', section: 'analytical', questionText: 'If 1×2=2, 2×3=12, 3×4=36, then 4×5=?', choices: ['60', '80', '100', '120'], correctAnswer: '80' },
  { id: 'a35', examType: 'professional', section: 'analytical', questionText: 'Complete: Z, X, V, T, R, ?', choices: ['O', 'P', 'Q', 'N'], correctAnswer: 'P' },
  { id: 'a36', examType: 'professional', section: 'analytical', questionText: 'A is B\'s sister. C is B\'s mother. D is C\'s father. How is A related to D?', choices: ['Granddaughter', 'Daughter', 'Sister', 'Grandmother'], correctAnswer: 'Granddaughter' },
  { id: 'a37', examType: 'professional', section: 'analytical', questionText: 'Complete: 5, 11, 23, 47, ?', choices: ['91', '93', '95', '97'], correctAnswer: '95' },
  { id: 'a38', examType: 'professional', section: 'analytical', questionText: 'If clock shows 3:15, what angle between hour and minute hands?', choices: ['0°', '7.5°', '15°', '22.5°'], correctAnswer: '7.5°' },
  { id: 'a39', examType: 'professional', section: 'analytical', questionText: 'Which is different: Apple, Mango, Carrot, Orange?', choices: ['Apple', 'Mango', 'Carrot', 'Orange'], correctAnswer: 'Carrot' },
  { id: 'a40', examType: 'professional', section: 'analytical', questionText: 'Complete: 1, 8, 27, 64, 125, ?', choices: ['196', '216', '256', '288'], correctAnswer: '216' },

  // ==================== GENERAL INFORMATION (40 questions) ====================
  { id: 'g1', examType: 'professional', section: 'general', questionText: 'What is Republic Act No. 6713 also known as?', choices: ['Anti-Graft and Corrupt Practices Act', 'Code of Conduct and Ethical Standards for Public Officials and Employees', 'Administrative Code of 1987', 'Civil Service Law'], correctAnswer: 'Code of Conduct and Ethical Standards for Public Officials and Employees', explanation: 'RA 6713 (1989) establishes ethical standards for government workers. Memorize: 6713 = Ethics/Conduct. Anti-Graft is RA 3019.' },
  { id: 'g2', examType: 'professional', section: 'general', questionText: 'How many articles are in the 1987 Philippine Constitution?', choices: ['15', '16', '17', '18'], correctAnswer: '18', explanation: 'The 1987 Constitution has 18 Articles covering the national territory, bill of rights, branches of government, social justice, etc.' },
  { id: 'g3', examType: 'professional', section: 'general', questionText: 'Which is NOT a branch of the Philippine government?', choices: ['Executive', 'Legislative', 'Judiciary', 'Administrative'], correctAnswer: 'Administrative', explanation: 'The 3 co-equal branches are: Executive (President), Legislative (Congress), Judiciary (Supreme Court). Administrative is not a branch.' },
  { id: 'g4', examType: 'professional', section: 'general', questionText: 'What does CSC stand for?', choices: ['Civil Service Center', 'Civil Service Commission', 'Central Service Commission', 'Civil Servants Council'], correctAnswer: 'Civil Service Commission', explanation: 'CSC = Civil Service Commission, the central personnel agency of the Philippine government established under the 1987 Constitution.' },
  { id: 'g5', examType: 'professional', section: 'general', questionText: 'According to RA 6713, SALN must be submitted within how many days after assumption?', choices: ['15 days', '30 days', '45 days', '60 days'], correctAnswer: '30 days' },
  { id: 'g6', examType: 'professional', section: 'general', questionText: 'What is the national language of the Philippines?', choices: ['Tagalog', 'Filipino', 'English', 'Cebuano'], correctAnswer: 'Filipino' },
  { id: 'g7', examType: 'professional', section: 'general', questionText: 'Who appoints career service positions in government?', choices: ['President', 'Civil Service Commission', 'Department Head', 'Congress'], correctAnswer: 'Civil Service Commission' },
  { id: 'g8', examType: 'professional', section: 'general', questionText: 'What is RA 3019 also known as?', choices: ['Code of Conduct Act', 'Anti-Graft and Corrupt Practices Act', 'Freedom of Information Act', 'Administrative Code'], correctAnswer: 'Anti-Graft and Corrupt Practices Act' },
  { id: 'g9', examType: 'professional', section: 'general', questionText: 'How many years is one term for a Philippine President?', choices: ['4 years', '5 years', '6 years', '7 years'], correctAnswer: '6 years' },
  { id: 'g10', examType: 'professional', section: 'general', questionText: 'What is the minimum age to run for President in the Philippines?', choices: ['30 years', '35 years', '40 years', '45 years'], correctAnswer: '40 years' },
  { id: 'g11', examType: 'professional', section: 'general', questionText: 'What body has the sole power to declare the existence of war?', choices: ['President', 'Supreme Court', 'Congress', 'Cabinet'], correctAnswer: 'Congress' },
  { id: 'g12', examType: 'professional', section: 'general', questionText: 'What is the term of office for Senators?', choices: ['3 years', '4 years', '5 years', '6 years'], correctAnswer: '6 years' },
  { id: 'g13', examType: 'professional', section: 'general', questionText: 'How many Senators are there in the Philippine Senate?', choices: ['12', '18', '24', '30'], correctAnswer: '24' },
  { id: 'g14', examType: 'professional', section: 'general', questionText: 'What is the term of office for Members of the House of Representatives?', choices: ['2 years', '3 years', '4 years', '5 years'], correctAnswer: '3 years' },
  { id: 'g15', examType: 'professional', section: 'general', questionText: 'Who has the power to grant amnesty?', choices: ['President alone', 'Congress alone', 'President with Congress concurrence', 'Supreme Court'], correctAnswer: 'President with Congress concurrence' },
  { id: 'g16', examType: 'professional', section: 'general', questionText: 'What article of the Constitution covers the Bill of Rights?', choices: ['Article I', 'Article II', 'Article III', 'Article IV'], correctAnswer: 'Article III' },
  { id: 'g17', examType: 'professional', section: 'general', questionText: 'What is the minimum age to vote in the Philippines?', choices: ['15 years', '18 years', '21 years', '25 years'], correctAnswer: '18 years' },
  { id: 'g18', examType: 'professional', section: 'general', questionText: 'What is RA 9003 about?', choices: ['Clean Air Act', 'Ecological Solid Waste Management Act', 'Clean Water Act', 'Climate Change Act'], correctAnswer: 'Ecological Solid Waste Management Act' },
  { id: 'g19', examType: 'professional', section: 'general', questionText: 'What is the highest court in the Philippines?', choices: ['Court of Appeals', 'Regional Trial Court', 'Supreme Court', 'Sandiganbayan'], correctAnswer: 'Supreme Court' },
  { id: 'g20', examType: 'professional', section: 'general', questionText: 'How many justices are in the Supreme Court including the Chief Justice?', choices: ['11', '13', '15', '17'], correctAnswer: '15' },
  { id: 'g21', examType: 'professional', section: 'general', questionText: 'What is RA 8749 also known as?', choices: ['Clean Water Act', 'Clean Air Act', 'Solid Waste Act', 'Mining Act'], correctAnswer: 'Clean Air Act' },
  { id: 'g22', examType: 'professional', section: 'general', questionText: 'What agency is the central personnel agency of the government?', choices: ['DBM', 'CSC', 'COA', 'NEDA'], correctAnswer: 'CSC' },
  { id: 'g23', examType: 'professional', section: 'general', questionText: 'What is the term of office for Barangay officials?', choices: ['2 years', '3 years', '4 years', '5 years'], correctAnswer: '3 years' },
  { id: 'g24', examType: 'professional', section: 'general', questionText: 'What is the main objective of the Universal Declaration of Human Rights?', choices: ['Economic growth', 'Protection of human rights', 'Trade agreements', 'Environmental protection'], correctAnswer: 'Protection of human rights' },
  { id: 'g25', examType: 'professional', section: 'general', questionText: 'When was the Universal Declaration of Human Rights adopted?', choices: ['1945', '1946', '1948', '1950'], correctAnswer: '1948' },
  { id: 'g26', examType: 'professional', section: 'general', questionText: 'What is RA 9165 about?', choices: ['Anti-Terrorism Act', 'Comprehensive Dangerous Drugs Act', 'Anti-Money Laundering Act', 'Cybercrime Prevention Act'], correctAnswer: 'Comprehensive Dangerous Drugs Act' },
  { id: 'g27', examType: 'professional', section: 'general', questionText: 'What is RA 9262 also known as?', choices: ['Anti-Violence Against Women and Children Act', 'Child Protection Act', 'Women\'s Rights Act', 'Family Code'], correctAnswer: 'Anti-Violence Against Women and Children Act' },
  { id: 'g28', examType: 'professional', section: 'general', questionText: 'Who is the father of the Philippine Constitution?', choices: ['Jose Rizal', 'Apolinario Mabini', 'Emilio Aguinaldo', 'Felipe Calderon'], correctAnswer: 'Felipe Calderon' },
  { id: 'g29', examType: 'professional', section: 'general', questionText: 'What is the state policy on education according to the Constitution?', choices: ['Education is optional', 'The State shall protect and promote the right of all citizens to quality education', 'Only elementary is mandatory', 'Private education only'], correctAnswer: 'The State shall protect and promote the right of all citizens to quality education' },
  { id: 'g30', examType: 'professional', section: 'general', questionText: 'What is RA 7877 about?', choices: ['Anti-Sexual Harassment Act', 'Women in Development Act', 'Child Labor Act', 'Maternity Leave Act'], correctAnswer: 'Anti-Sexual Harassment Act' },
  { id: 'g31', examType: 'professional', section: 'general', questionText: 'What is the Climate Change Act of the Philippines?', choices: ['RA 9729', 'RA 8749', 'RA 9003', 'RA 9275'], correctAnswer: 'RA 9729' },
  { id: 'g32', examType: 'professional', section: 'general', questionText: 'What is RA 9275 about?', choices: ['Clean Air Act', 'Philippine Clean Water Act', 'Solid Waste Management', 'Forestry Code'], correctAnswer: 'Philippine Clean Water Act' },
  { id: 'g33', examType: 'professional', section: 'general', questionText: 'Who has the power to declare martial law?', choices: ['Congress', 'Supreme Court', 'President', 'Cabinet'], correctAnswer: 'President' },
  { id: 'g34', examType: 'professional', section: 'general', questionText: 'What is the maximum period of martial law without Congressional approval?', choices: ['30 days', '60 days', '90 days', '120 days'], correctAnswer: '60 days' },
  { id: 'g35', examType: 'professional', section: 'general', questionText: 'What is the Declaration of Principles found in which article?', choices: ['Article I', 'Article II', 'Article III', 'Article IV'], correctAnswer: 'Article II' },
  { id: 'g36', examType: 'professional', section: 'general', questionText: 'What is RA 10121 about?', choices: ['Disaster Risk Reduction and Management Act', 'Climate Change Act', 'Environmental Protection Act', 'Public Safety Act'], correctAnswer: 'Disaster Risk Reduction and Management Act' },
  { id: 'g37', examType: 'professional', section: 'general', questionText: 'What is the minimum age to become a Senator?', choices: ['25 years', '30 years', '35 years', '40 years'], correctAnswer: '35 years' },
  { id: 'g38', examType: 'professional', section: 'general', questionText: 'What body approves the national budget?', choices: ['Senate only', 'House only', 'Congress', 'President'], correctAnswer: 'Congress' },
  { id: 'g39', examType: 'professional', section: 'general', questionText: 'What is RA 10354 about?', choices: ['Responsible Parenthood and Reproductive Health Act', 'Population Control Act', 'Family Planning Act', 'Child Health Act'], correctAnswer: 'Responsible Parenthood and Reproductive Health Act' },
  { id: 'g40', examType: 'professional', section: 'general', questionText: 'What is the Freedom of Information Executive Order number?', choices: ['EO 1', 'EO 2', 'EO 10', 'EO 100'], correctAnswer: 'EO 2' }
];

// Sub-professional specific clerical questions
export const CLERICAL_QUESTIONS: Question[] = [
  { id: 'c1', examType: 'sub-professional', section: 'clerical', questionText: 'Which is spelled correctly?', choices: ['Accomodation', 'Accommodation', 'Acomodation', 'Acommodation'], correctAnswer: 'Accommodation' },
  { id: 'c2', examType: 'sub-professional', section: 'clerical', questionText: 'Arrange alphabetically: 1) Santos, 2) San Juan, 3) Sanchez, 4) San Pedro', choices: ['3, 2, 4, 1', '2, 4, 3, 1', '3, 2, 1, 4', '2, 3, 4, 1'], correctAnswer: '3, 2, 4, 1' },
  { id: 'c3', examType: 'sub-professional', section: 'clerical', questionText: 'Filing order: A) Report-2023-001, B) Report-2022-100, C) Report-2023-002', choices: ['A, B, C', 'B, A, C', 'C, A, B', 'B, C, A'], correctAnswer: 'B, A, C' },
  { id: 'c4', examType: 'sub-professional', section: 'clerical', questionText: 'Which word is misspelled?', choices: ['Necessary', 'Occasion', 'Seperate', 'Definitely'], correctAnswer: 'Seperate' },
  { id: 'c5', examType: 'sub-professional', section: 'clerical', questionText: 'What comes next: AA, AB, AC, AD, ?', choices: ['AE', 'BA', 'AZ', 'EA'], correctAnswer: 'AE' },
  { id: 'c6', examType: 'sub-professional', section: 'clerical', questionText: 'Which is spelled correctly?', choices: ['Recieve', 'Receive', 'Receve', 'Receieve'], correctAnswer: 'Receive' },
  { id: 'c7', examType: 'sub-professional', section: 'clerical', questionText: 'Arrange alphabetically: A) Brown, B) Blue, C) Black, D) Beige', choices: ['D, C, B, A', 'C, D, B, A', 'D, C, A, B', 'A, B, C, D'], correctAnswer: 'D, C, B, A' },
  { id: 'c8', examType: 'sub-professional', section: 'clerical', questionText: 'Which code comes first: A-123, A-12, A-1234, A-1', choices: ['A-1', 'A-12', 'A-123', 'A-1234'], correctAnswer: 'A-1' },
  { id: 'c9', examType: 'sub-professional', section: 'clerical', questionText: 'Which word is misspelled?', choices: ['Committee', 'Commitment', 'Commision', 'Communication'], correctAnswer: 'Commision' },
  { id: 'c10', examType: 'sub-professional', section: 'clerical', questionText: 'What comes next: 1A, 2B, 3C, 4D, ?', choices: ['5E', '5F', 'E5', '6E'], correctAnswer: '5E' },
  { id: 'c11', examType: 'sub-professional', section: 'clerical', questionText: 'Which is spelled correctly?', choices: ['Goverment', 'Government', 'Govenment', 'Governmant'], correctAnswer: 'Government' },
  { id: 'c12', examType: 'sub-professional', section: 'clerical', questionText: 'File order for dates: A) Jan 15, B) Jan 5, C) Jan 25, D) Jan 1', choices: ['D, B, A, C', 'A, B, C, D', 'B, D, A, C', 'D, A, B, C'], correctAnswer: 'D, B, A, C' },
  { id: 'c13', examType: 'sub-professional', section: 'clerical', questionText: 'Which word is misspelled?', choices: ['Occurred', 'Preferred', 'Refered', 'Deferred'], correctAnswer: 'Refered' },
  { id: 'c14', examType: 'sub-professional', section: 'clerical', questionText: 'Arrange alphabetically: Mc Donald, Mac Arthur, Mc Carthy, Mac Donald', choices: ['Mac Arthur, Mac Donald, Mc Carthy, Mc Donald', 'Mc Carthy, Mc Donald, Mac Arthur, Mac Donald', 'Mac Arthur, Mac Donald, Mc Donald, Mc Carthy', 'Mac Donald, Mac Arthur, Mc Donald, Mc Carthy'], correctAnswer: 'Mac Arthur, Mac Donald, Mc Carthy, Mc Donald' },
  { id: 'c15', examType: 'sub-professional', section: 'clerical', questionText: 'What comes next: XA, XB, XC, XD, ?', choices: ['XE', 'YA', 'XF', 'EX'], correctAnswer: 'XE' },
  { id: 'c16', examType: 'sub-professional', section: 'clerical', questionText: 'Which is spelled correctly?', choices: ['Paralel', 'Parallel', 'Parralel', 'Paralell'], correctAnswer: 'Parallel' },
  { id: 'c17', examType: 'sub-professional', section: 'clerical', questionText: 'Which word is misspelled?', choices: ['Beginning', 'Begining', 'Running', 'Planning'], correctAnswer: 'Begining' },
  { id: 'c18', examType: 'sub-professional', section: 'clerical', questionText: 'Filing order: File-001A, File-001B, File-001, File-0012', choices: ['File-001, File-0012, File-001A, File-001B', 'File-001, File-001A, File-001B, File-0012', 'File-0012, File-001, File-001A, File-001B', 'File-001A, File-001B, File-001, File-0012'], correctAnswer: 'File-001, File-001A, File-001B, File-0012' },
  { id: 'c19', examType: 'sub-professional', section: 'clerical', questionText: 'Which is spelled correctly?', choices: ['Maintenence', 'Maintainance', 'Maintenance', 'Maintainence'], correctAnswer: 'Maintenance' },
  { id: 'c20', examType: 'sub-professional', section: 'clerical', questionText: 'What comes next: 100, 200, 300, 400, ?', choices: ['450', '500', '600', '550'], correctAnswer: '500' }
];

// Combined for generating exams
export const SAMPLE_QUESTIONS: Question[] = [...PROFESSIONAL_QUESTIONS, ...CLERICAL_QUESTIONS];

// Get questions for specific exam type - combines base + extra questions for variety
export function getQuestionsForExam(examType: ExamType): Question[] {
  if (examType === 'professional') {
    // Combine all professional questions (170 base + 240 extra = 410 total)
    return [
      ...PROFESSIONAL_QUESTIONS,
      ...EXTRA_VERBAL,
      ...EXTRA_NUMERICAL,
      ...EXTRA_ANALYTICAL,
      ...EXTRA_GENERAL
    ];
  } else {
    // Sub-professional: exclude analytical, include clerical
    const baseQuestions = PROFESSIONAL_QUESTIONS.filter(q => q.section !== 'analytical');
    const extraVerbal = EXTRA_VERBAL;
    const extraNumerical = EXTRA_NUMERICAL;
    const extraGeneral = EXTRA_GENERAL;
    return [...baseQuestions, ...CLERICAL_QUESTIONS, ...extraVerbal, ...extraNumerical, ...extraGeneral];
  }
}

// Generate exam with exact question count - randomly selects from pool
export function generateExamQuestions(examType: ExamType, count: number): Question[] {
  const questions = getQuestionsForExam(examType);
  
  // Shuffle the questions using Fisher-Yates algorithm
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return exactly the count needed with unique IDs
  return shuffled.slice(0, count).map((q, i) => ({
    ...q,
    id: `${q.id}-${Date.now()}-${i}`
  }));
}

