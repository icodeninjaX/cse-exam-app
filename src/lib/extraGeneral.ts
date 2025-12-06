// Additional General Information Questions (60 more)
import { ExamType } from './examConfig';

interface Question {
  id: string;
  examType: ExamType;
  section: string;
  questionText: string;
  choices: string[];
  correctAnswer: string;
}
export const EXTRA_GENERAL: Question[] = [
  { id: 'eg1', examType: 'professional', section: 'general', questionText: 'What is RA 9710 also known as?', choices: ['Magna Carta of Women', 'Women Protection Act', 'Gender Equality Act', 'Women Rights Act'], correctAnswer: 'Magna Carta of Women' },
  { id: 'eg2', examType: 'professional', section: 'general', questionText: 'Who appoints the Chief Justice?', choices: ['Congress', 'President', 'Judicial Bar Council', 'Senate'], correctAnswer: 'President' },
  { id: 'eg3', examType: 'professional', section: 'general', questionText: 'How many regions are in the Philippines?', choices: ['16', '17', '18', '15'], correctAnswer: '17' },
  { id: 'eg4', examType: 'professional', section: 'general', questionText: 'What is the term of office for COMELEC commissioners?', choices: ['5 years', '6 years', '7 years', '9 years'], correctAnswer: '7 years' },
  { id: 'eg5', examType: 'professional', section: 'general', questionText: 'RA 7160 is the:', choices: ['Local Government Code', 'Administrative Code', 'Civil Service Law', 'Election Code'], correctAnswer: 'Local Government Code' },
  { id: 'eg6', examType: 'professional', section: 'general', questionText: 'What is the retirement age for SC Justices?', choices: ['65', '70', '75', '60'], correctAnswer: '70' },
  { id: 'eg7', examType: 'professional', section: 'general', questionText: 'Who has power of executive clemency?', choices: ['Congress', 'President', 'Supreme Court', 'DOJ Secretary'], correctAnswer: 'President' },
  { id: 'eg8', examType: 'professional', section: 'general', questionText: 'What is RA 9485 about?', choices: ['Anti-Red Tape Act', 'Anti-Graft Act', 'Civil Service Act', 'Ethics Act'], correctAnswer: 'Anti-Red Tape Act' },
  { id: 'eg9', examType: 'professional', section: 'general', questionText: 'How many legislative districts are required to amend the Constitution?', choices: ['3/4 of Congress', '2/3 of Congress', 'Majority', 'Unanimous'], correctAnswer: '3/4 of Congress' },
  { id: 'eg10', examType: 'professional', section: 'general', questionText: 'What agency audits government finances?', choices: ['DBM', 'DOF', 'COA', 'BTr'], correctAnswer: 'COA' },
  { id: 'eg11', examType: 'professional', section: 'general', questionText: 'What is the Human Rights commission term?', choices: ['5 years', '6 years', '7 years', '9 years'], correctAnswer: '7 years' },
  { id: 'eg12', examType: 'professional', section: 'general', questionText: 'RA 6657 is the:', choices: ['Agrarian Reform Law', 'Land Reform Act', 'Farmers Protection Act', 'Agricultural Code'], correctAnswer: 'Agrarian Reform Law' },
  { id: 'eg13', examType: 'professional', section: 'general', questionText: 'Who is the presiding officer of the Senate?', choices: ['Senate President', 'Majority Leader', 'Speaker', 'Vice President'], correctAnswer: 'Senate President' },
  { id: 'eg14', examType: 'professional', section: 'general', questionText: 'What is the minimum age to be a Representative?', choices: ['21', '25', '30', '35'], correctAnswer: '25' },
  { id: 'eg15', examType: 'professional', section: 'general', questionText: 'RA 7610 protects:', choices: ['Children', 'Women', 'Elderly', 'Workers'], correctAnswer: 'Children' },
  { id: 'eg16', examType: 'professional', section: 'general', questionText: 'What is the State religion of the Philippines?', choices: ['Catholic', 'Christianity', 'None (separation of church and state)', 'Islam'], correctAnswer: 'None (separation of church and state)' },
  { id: 'eg17', examType: 'professional', section: 'general', questionText: 'How long can the President suspend habeas corpus?', choices: ['30 days', '60 days', '90 days', '120 days'], correctAnswer: '60 days' },
  { id: 'eg18', examType: 'professional', section: 'general', questionText: 'What article covers Social Justice?', choices: ['Article XII', 'Article XIII', 'Article XIV', 'Article XV'], correctAnswer: 'Article XIII' },
  { id: 'eg19', examType: 'professional', section: 'general', questionText: 'RA 8293 is the:', choices: ['Intellectual Property Code', 'Patent Law', 'Copyright Act', 'Trademark Law'], correctAnswer: 'Intellectual Property Code' },
  { id: 'eg20', examType: 'professional', section: 'general', questionText: 'What body declares presidential incapacity?', choices: ['Congress', 'Cabinet', 'Supreme Court', 'Senate'], correctAnswer: 'Cabinet' },
  { id: 'eg21', examType: 'professional', section: 'general', questionText: 'What is RA 10173 about?', choices: ['Data Privacy Act', 'Cybercrime Act', 'E-Commerce Act', 'Information Act'], correctAnswer: 'Data Privacy Act' },
  { id: 'eg22', examType: 'professional', section: 'general', questionText: 'Who succeeds after Vice President?', choices: ['Senate President', 'Chief Justice', 'Speaker', 'Oldest Senator'], correctAnswer: 'Senate President' },
  { id: 'eg23', examType: 'professional', section: 'general', questionText: 'RA 9208 is about:', choices: ['Anti-Trafficking in Persons', 'Child Protection', 'Women Protection', 'Labor Law'], correctAnswer: 'Anti-Trafficking in Persons' },
  { id: 'eg24', examType: 'professional', section: 'general', questionText: 'What is the voting requirement for impeachment?', choices: ['1/2 of House', '1/3 of House', '2/3 of House', '3/4 of House'], correctAnswer: '1/3 of House' },
  { id: 'eg25', examType: 'professional', section: 'general', questionText: 'RA 11036 is the:', choices: ['Mental Health Act', 'Health Care Act', 'Medical Practice Act', 'Hospital Code'], correctAnswer: 'Mental Health Act' },
  { id: 'eg26', examType: 'professional', section: 'general', questionText: 'What agency handles elections?', choices: ['COMELEC', 'DILG', 'DOJ', 'CSC'], correctAnswer: 'COMELEC' },
  { id: 'eg27', examType: 'professional', section: 'general', questionText: 'What is RA 10175 about?', choices: ['Cybercrime Prevention Act', 'Data Privacy Act', 'E-Commerce Act', 'IT Law'], correctAnswer: 'Cybercrime Prevention Act' },
  { id: 'eg28', examType: 'professional', section: 'general', questionText: 'Ombudsman term of office?', choices: ['5 years', '6 years', '7 years', '9 years'], correctAnswer: '7 years' },
  { id: 'eg29', examType: 'professional', section: 'general', questionText: 'What article covers Accountability?', choices: ['Article IX', 'Article X', 'Article XI', 'Article XII'], correctAnswer: 'Article XI' },
  { id: 'eg30', examType: 'professional', section: 'general', questionText: 'RA 9994 protects:', choices: ['Senior Citizens', 'PWDs', 'Children', 'Women'], correctAnswer: 'Senior Citizens' },
  { id: 'eg31', examType: 'professional', section: 'general', questionText: 'What is the quorum for Congress?', choices: ['1/2', '1/3', 'Majority', '2/3'], correctAnswer: 'Majority' },
  { id: 'eg32', examType: 'professional', section: 'general', questionText: 'RA 7941 is about:', choices: ['Party-List System Act', 'Election Code', 'Political Party Act', 'Voter Registration'], correctAnswer: 'Party-List System Act' },
  { id: 'eg33', examType: 'professional', section: 'general', questionText: 'Who prosecutes impeachment cases?', choices: ['House', 'Senate', 'Supreme Court', 'DOJ'], correctAnswer: 'House' },
  { id: 'eg34', examType: 'professional', section: 'general', questionText: 'RA 9442 expands benefits for:', choices: ['PWDs', 'Senior Citizens', 'Veterans', 'OFWs'], correctAnswer: 'PWDs' },
  { id: 'eg35', examType: 'professional', section: 'general', questionText: 'What is the Philippine territorial sea?', choices: ['12 nautical miles', '24 nautical miles', '200 nautical miles', '7,107 islands'], correctAnswer: '12 nautical miles' },
  { id: 'eg36', examType: 'professional', section: 'general', questionText: 'RA 10627 is the:', choices: ['Anti-Bullying Act', 'Child Protection Act', 'School Safety Act', 'Education Act'], correctAnswer: 'Anti-Bullying Act' },
  { id: 'eg37', examType: 'professional', section: 'general', questionText: 'What is EO 292?', choices: ['Administrative Code of 1987', 'Civil Service Law', 'Local Government Code', 'Ethics Code'], correctAnswer: 'Administrative Code of 1987' },
  { id: 'eg38', examType: 'professional', section: 'general', questionText: 'Who tries impeachment cases?', choices: ['House', 'Senate', 'Supreme Court', 'Sandiganbayan'], correctAnswer: 'Senate' },
  { id: 'eg39', examType: 'professional', section: 'general', questionText: 'RA 10168 is about:', choices: ['Anti-Money Laundering', 'Tax Evasion', 'Corruption', 'Financial Crimes'], correctAnswer: 'Anti-Money Laundering' },
  { id: 'eg40', examType: 'professional', section: 'general', questionText: 'What is the official gazette of the Philippines?', choices: ['Official Gazette', 'Manila Bulletin', 'Philippine Star', 'Government Journal'], correctAnswer: 'Official Gazette' },
  { id: 'eg41', examType: 'professional', section: 'general', questionText: 'RA 6969 covers:', choices: ['Toxic Substances and Hazardous Waste', 'Clean Air', 'Clean Water', 'Solid Waste'], correctAnswer: 'Toxic Substances and Hazardous Waste' },
  { id: 'eg42', examType: 'professional', section: 'general', questionText: 'What percentage is needed for conviction in impeachment?', choices: ['2/3 of Senate', '1/2 of Senate', 'Majority of Senate', '3/4 of Senate'], correctAnswer: '2/3 of Senate' },
  { id: 'eg43', examType: 'professional', section: 'general', questionText: 'RA 9184 is the:', choices: ['Government Procurement Reform Act', 'Budget Act', 'Finance Code', 'Audit Law'], correctAnswer: 'Government Procurement Reform Act' },
  { id: 'eg44', examType: 'professional', section: 'general', questionText: 'What is the exclusive economic zone?', choices: ['200 nautical miles', '12 nautical miles', '24 nautical miles', '100 nautical miles'], correctAnswer: '200 nautical miles' },
  { id: 'eg45', examType: 'professional', section: 'general', questionText: 'RA 9514 is the:', choices: ['Fire Code', 'Building Code', 'Safety Code', 'Electrical Code'], correctAnswer: 'Fire Code' },
  { id: 'eg46', examType: 'professional', section: 'general', questionText: 'Who can be impeached?', choices: ['All government officials', 'Only the President', 'Constitutional officers', 'Cabinet members'], correctAnswer: 'Constitutional officers' },
  { id: 'eg47', examType: 'professional', section: 'general', questionText: 'RA 10066 is about:', choices: ['National Cultural Heritage Act', 'Arts Act', 'Tourism Act', 'Museum Act'], correctAnswer: 'National Cultural Heritage Act' },
  { id: 'eg48', examType: 'professional', section: 'general', questionText: 'What is the electoral tribunal for Senate contests?', choices: ['SET', 'HRET', 'COMELEC', 'Supreme Court'], correctAnswer: 'SET' },
  { id: 'eg49', examType: 'professional', section: 'general', questionText: 'RA 9266 is the:', choices: ['Architecture Act', 'Engineering Act', 'Building Code', 'Design Act'], correctAnswer: 'Architecture Act' },
  { id: 'eg50', examType: 'professional', section: 'general', questionText: 'What is the Paris Agreement about?', choices: ['Climate Change', 'Trade', 'Human Rights', 'Peace'], correctAnswer: 'Climate Change' },
  { id: 'eg51', examType: 'professional', section: 'general', questionText: 'RA 7942 is the:', choices: ['Mining Act', 'Forestry Code', 'Environmental Act', 'Land Use Act'], correctAnswer: 'Mining Act' },
  { id: 'eg52', examType: 'professional', section: 'general', questionText: 'What is UNESCO?', choices: ['UN Educational, Scientific and Cultural Organization', 'UN Economic Social Council', 'UN Environment Program', 'UN Development Program'], correctAnswer: 'UN Educational, Scientific and Cultural Organization' },
  { id: 'eg53', examType: 'professional', section: 'general', questionText: 'RA 8042 protects:', choices: ['Migrant Workers', 'Domestic Workers', 'Child Workers', 'Factory Workers'], correctAnswer: 'Migrant Workers' },
  { id: 'eg54', examType: 'professional', section: 'general', questionText: 'What year was the current Constitution ratified?', choices: ['1986', '1987', '1988', '1985'], correctAnswer: '1987' },
  { id: 'eg55', examType: 'professional', section: 'general', questionText: 'RA 9147 is the:', choices: ['Wildlife Resources Act', 'Forestry Code', 'Environmental Act', 'Marine Protection Act'], correctAnswer: 'Wildlife Resources Act' },
  { id: 'eg56', examType: 'professional', section: 'general', questionText: 'What is SDG?', choices: ['Sustainable Development Goals', 'Social Development Goals', 'State Development Guidelines', 'Strategic Development Goals'], correctAnswer: 'Sustainable Development Goals' },
  { id: 'eg57', examType: 'professional', section: 'general', questionText: 'RA 10173 is enforced by:', choices: ['NPC', 'NBI', 'DOJ', 'DICT'], correctAnswer: 'NPC' },
  { id: 'eg58', examType: 'professional', section: 'general', questionText: 'What is the Universal Declaration year?', choices: ['1945', '1946', '1948', '1950'], correctAnswer: '1948' },
  { id: 'eg59', examType: 'professional', section: 'general', questionText: 'RA 10152 is about:', choices: ['Mandatory Infants Immunization', 'Child Health Act', 'Maternal Care Act', 'Vaccination Act'], correctAnswer: 'Mandatory Infants Immunization' },
  { id: 'eg60', examType: 'professional', section: 'general', questionText: 'What does ASEAN stand for?', choices: ['Association of Southeast Asian Nations', 'Asian Southeast Economic Alliance', 'Associated Southeast Asian Network', 'Alliance of Southeast Asian Nations'], correctAnswer: 'Association of Southeast Asian Nations' }
];
