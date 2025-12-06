// Additional Verbal Ability Questions (60 more)
import { ExamType } from './examConfig';

export interface Question {
  id: string;
  examType: ExamType;
  section: string;
  questionText: string;
  choices: string[];
  correctAnswer: string;
}
export const EXTRA_VERBAL: Question[] = [
  { id: 'ev1', examType: 'professional', section: 'verbal', questionText: 'What is the synonym of "arduous"?', choices: ['Easy', 'Difficult', 'Quick', 'Simple'], correctAnswer: 'Difficult' },
  { id: 'ev2', examType: 'professional', section: 'verbal', questionText: 'Choose the antonym of "frugal":', choices: ['Thrifty', 'Wasteful', 'Careful', 'Economical'], correctAnswer: 'Wasteful' },
  { id: 'ev3', examType: 'professional', section: 'verbal', questionText: 'The word "gregarious" means:', choices: ['Shy', 'Sociable', 'Angry', 'Quiet'], correctAnswer: 'Sociable' },
  { id: 'ev4', examType: 'professional', section: 'verbal', questionText: 'Select the correct spelling:', choices: ['Occurance', 'Occurrance', 'Occurrence', 'Occurence'], correctAnswer: 'Occurrence' },
  { id: 'ev5', examType: 'professional', section: 'verbal', questionText: 'The manager _____ the new employee.', choices: ['oriented', 'orientated', 'orienting', 'orients'], correctAnswer: 'oriented' },
  { id: 'ev6', examType: 'professional', section: 'verbal', questionText: 'What does "lucid" mean?', choices: ['Confusing', 'Clear', 'Dark', 'Complex'], correctAnswer: 'Clear' },
  { id: 'ev7', examType: 'professional', section: 'verbal', questionText: 'The antonym of "mundane" is:', choices: ['Ordinary', 'Exciting', 'Boring', 'Common'], correctAnswer: 'Exciting' },
  { id: 'ev8', examType: 'professional', section: 'verbal', questionText: 'Which is correct? "The data _____ accurate."', choices: ['is', 'are', 'were', 'am'], correctAnswer: 'are' },
  { id: 'ev9', examType: 'professional', section: 'verbal', questionText: '"Perfunctory" means:', choices: ['Perfect', 'Careless', 'Thorough', 'Careful'], correctAnswer: 'Careless' },
  { id: 'ev10', examType: 'professional', section: 'verbal', questionText: 'Synonym of "candid":', choices: ['Dishonest', 'Frank', 'Hidden', 'Secretive'], correctAnswer: 'Frank' },
  { id: 'ev11', examType: 'professional', section: 'verbal', questionText: 'The word "copious" means:', choices: ['Scarce', 'Abundant', 'Small', 'Limited'], correctAnswer: 'Abundant' },
  { id: 'ev12', examType: 'professional', section: 'verbal', questionText: 'Antonym of "taciturn":', choices: ['Silent', 'Talkative', 'Quiet', 'Reserved'], correctAnswer: 'Talkative' },
  { id: 'ev13', examType: 'professional', section: 'verbal', questionText: 'Choose correctly spelled word:', choices: ['Entreprenuer', 'Entrepreneur', 'Enterprenuer', 'Entrepeneur'], correctAnswer: 'Entrepreneur' },
  { id: 'ev14', examType: 'professional', section: 'verbal', questionText: '"Astute" means:', choices: ['Stupid', 'Shrewd', 'Slow', 'Careless'], correctAnswer: 'Shrewd' },
  { id: 'ev15', examType: 'professional', section: 'verbal', questionText: 'Neither he nor I _____ responsible.', choices: ['am', 'is', 'are', 'was'], correctAnswer: 'am' },
  { id: 'ev16', examType: 'professional', section: 'verbal', questionText: 'Synonym of "venerate":', choices: ['Disrespect', 'Revere', 'Ignore', 'Hate'], correctAnswer: 'Revere' },
  { id: 'ev17', examType: 'professional', section: 'verbal', questionText: '"Obsolete" is the opposite of:', choices: ['Old', 'Modern', 'Ancient', 'Outdated'], correctAnswer: 'Modern' },
  { id: 'ev18', examType: 'professional', section: 'verbal', questionText: 'The phenomenon _____ observed yesterday.', choices: ['was', 'were', 'are', 'have been'], correctAnswer: 'was' },
  { id: 'ev19', examType: 'professional', section: 'verbal', questionText: '"Prolific" means:', choices: ['Unproductive', 'Fertile', 'Lazy', 'Slow'], correctAnswer: 'Fertile' },
  { id: 'ev20', examType: 'professional', section: 'verbal', questionText: 'Antonym of "ostentatious":', choices: ['Showy', 'Modest', 'Flashy', 'Elaborate'], correctAnswer: 'Modest' },
  { id: 'ev21', examType: 'professional', section: 'verbal', questionText: '"Pernicious" means:', choices: ['Helpful', 'Harmful', 'Kind', 'Gentle'], correctAnswer: 'Harmful' },
  { id: 'ev22', examType: 'professional', section: 'verbal', questionText: 'Correct spelling:', choices: ['Maintenence', 'Maintainance', 'Maintenance', 'Maintanence'], correctAnswer: 'Maintenance' },
  { id: 'ev23', examType: 'professional', section: 'verbal', questionText: 'Synonym of "altruistic":', choices: ['Selfish', 'Selfless', 'Greedy', 'Mean'], correctAnswer: 'Selfless' },
  { id: 'ev24', examType: 'professional', section: 'verbal', questionText: '"Repudiate" means:', choices: ['Accept', 'Reject', 'Embrace', 'Approve'], correctAnswer: 'Reject' },
  { id: 'ev25', examType: 'professional', section: 'verbal', questionText: 'The committee _____ divided on the issue.', choices: ['is', 'are', 'am', 'be'], correctAnswer: 'is' },
  { id: 'ev26', examType: 'professional', section: 'verbal', questionText: 'Antonym of "ephemeral":', choices: ['Brief', 'Permanent', 'Short', 'Temporary'], correctAnswer: 'Permanent' },
  { id: 'ev27', examType: 'professional', section: 'verbal', questionText: '"Voracious" means:', choices: ['Satisfied', 'Greedy', 'Full', 'Content'], correctAnswer: 'Greedy' },
  { id: 'ev28', examType: 'professional', section: 'verbal', questionText: 'Correct: "She is _____ than her brother."', choices: ['more smarter', 'smarter', 'most smart', 'smartest'], correctAnswer: 'smarter' },
  { id: 'ev29', examType: 'professional', section: 'verbal', questionText: 'Synonym of "capricious":', choices: ['Stable', 'Unpredictable', 'Steady', 'Constant'], correctAnswer: 'Unpredictable' },
  { id: 'ev30', examType: 'professional', section: 'verbal', questionText: '"Sporadic" means:', choices: ['Regular', 'Occasional', 'Frequent', 'Constant'], correctAnswer: 'Occasional' },
  { id: 'ev31', examType: 'professional', section: 'verbal', questionText: 'Antonym of "verbose":', choices: ['Wordy', 'Succinct', 'Long', 'Detailed'], correctAnswer: 'Succinct' },
  { id: 'ev32', examType: 'professional', section: 'verbal', questionText: '"Cogent" means:', choices: ['Weak', 'Convincing', 'Confusing', 'Unclear'], correctAnswer: 'Convincing' },
  { id: 'ev33', examType: 'professional', section: 'verbal', questionText: 'Correct spelling:', choices: ['Neccessary', 'Necessary', 'Necesary', 'Neccesary'], correctAnswer: 'Necessary' },
  { id: 'ev34', examType: 'professional', section: 'verbal', questionText: 'Synonym of "resilient":', choices: ['Weak', 'Tough', 'Fragile', 'Brittle'], correctAnswer: 'Tough' },
  { id: 'ev35', examType: 'professional', section: 'verbal', questionText: '"Placate" means:', choices: ['Anger', 'Calm', 'Excite', 'Irritate'], correctAnswer: 'Calm' },
  { id: 'ev36', examType: 'professional', section: 'verbal', questionText: 'Neither the manager nor the employees _____ present.', choices: ['was', 'were', 'is', 'has been'], correctAnswer: 'were' },
  { id: 'ev37', examType: 'professional', section: 'verbal', questionText: 'Antonym of "benign":', choices: ['Harmless', 'Malignant', 'Kind', 'Gentle'], correctAnswer: 'Malignant' },
  { id: 'ev38', examType: 'professional', section: 'verbal', questionText: '"Complacent" means:', choices: ['Worried', 'Self-satisfied', 'Anxious', 'Concerned'], correctAnswer: 'Self-satisfied' },
  { id: 'ev39', examType: 'professional', section: 'verbal', questionText: 'Synonym of "austere":', choices: ['Luxurious', 'Severe', 'Fancy', 'Ornate'], correctAnswer: 'Severe' },
  { id: 'ev40', examType: 'professional', section: 'verbal', questionText: '"Spurious" means:', choices: ['Genuine', 'False', 'Real', 'Authentic'], correctAnswer: 'False' },
  { id: 'ev41', examType: 'professional', section: 'verbal', questionText: 'Correct: "I wish I _____ there."', choices: ['was', 'were', 'am', 'is'], correctAnswer: 'were' },
  { id: 'ev42', examType: 'professional', section: 'verbal', questionText: 'Antonym of "judicious":', choices: ['Wise', 'Foolish', 'Careful', 'Prudent'], correctAnswer: 'Foolish' },
  { id: 'ev43', examType: 'professional', section: 'verbal', questionText: '"Sycophant" means:', choices: ['Critic', 'Flatterer', 'Leader', 'Rebel'], correctAnswer: 'Flatterer' },
  { id: 'ev44', examType: 'professional', section: 'verbal', questionText: 'Correct spelling:', choices: ['Priviledge', 'Privelege', 'Privilege', 'Privilage'], correctAnswer: 'Privilege' },
  { id: 'ev45', examType: 'professional', section: 'verbal', questionText: 'Synonym of "vindicate":', choices: ['Blame', 'Justify', 'Accuse', 'Condemn'], correctAnswer: 'Justify' },
  { id: 'ev46', examType: 'professional', section: 'verbal', questionText: '"Reticent" means:', choices: ['Talkative', 'Reserved', 'Loud', 'Outgoing'], correctAnswer: 'Reserved' },
  { id: 'ev47', examType: 'professional', section: 'verbal', questionText: 'The jury _____ reached a verdict.', choices: ['have', 'has', 'are', 'were'], correctAnswer: 'has' },
  { id: 'ev48', examType: 'professional', section: 'verbal', questionText: 'Antonym of "profuse":', choices: ['Abundant', 'Scanty', 'Plentiful', 'Generous'], correctAnswer: 'Scanty' },
  { id: 'ev49', examType: 'professional', section: 'verbal', questionText: '"Fastidious" means:', choices: ['Careless', 'Meticulous', 'Sloppy', 'Messy'], correctAnswer: 'Meticulous' },
  { id: 'ev50', examType: 'professional', section: 'verbal', questionText: 'Synonym of "elucidate":', choices: ['Confuse', 'Clarify', 'Obscure', 'Complicate'], correctAnswer: 'Clarify' },
  { id: 'ev51', examType: 'professional', section: 'verbal', questionText: '"Querulous" means:', choices: ['Cheerful', 'Complaining', 'Happy', 'Content'], correctAnswer: 'Complaining' },
  { id: 'ev52', examType: 'professional', section: 'verbal', questionText: 'Correct: "Each of the boys _____ his own book."', choices: ['have', 'has', 'are having', 'were having'], correctAnswer: 'has' },
  { id: 'ev53', examType: 'professional', section: 'verbal', questionText: 'Antonym of "tacit":', choices: ['Silent', 'Explicit', 'Implied', 'Unspoken'], correctAnswer: 'Explicit' },
  { id: 'ev54', examType: 'professional', section: 'verbal', questionText: '"Sanguine" means:', choices: ['Pessimistic', 'Optimistic', 'Sad', 'Depressed'], correctAnswer: 'Optimistic' },
  { id: 'ev55', examType: 'professional', section: 'verbal', questionText: 'Correct spelling:', choices: ['Concensus', 'Consensus', 'Consensis', 'Concenses'], correctAnswer: 'Consensus' },
  { id: 'ev56', examType: 'professional', section: 'verbal', questionText: 'Synonym of "prodigal":', choices: ['Thrifty', 'Wasteful', 'Frugal', 'Saving'], correctAnswer: 'Wasteful' },
  { id: 'ev57', examType: 'professional', section: 'verbal', questionText: '"Obsequious" means:', choices: ['Defiant', 'Servile', 'Proud', 'Independent'], correctAnswer: 'Servile' },
  { id: 'ev58', examType: 'professional', section: 'verbal', questionText: 'The majority of the students _____ passed.', choices: ['has', 'have', 'is', 'was'], correctAnswer: 'have' },
  { id: 'ev59', examType: 'professional', section: 'verbal', questionText: 'Antonym of "laconic":', choices: ['Brief', 'Verbose', 'Short', 'Concise'], correctAnswer: 'Verbose' },
  { id: 'ev60', examType: 'professional', section: 'verbal', questionText: '"Enigmatic" means:', choices: ['Clear', 'Mysterious', 'Obvious', 'Simple'], correctAnswer: 'Mysterious' }
];
