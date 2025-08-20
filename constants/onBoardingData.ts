export type Goal = {
    id: string;
    text: string;
    emoji: string;
    top: string;
    left?: string;
    right?: string;

}

export const goals = [
    { id: 'sleep', emoji: '🛌', text: 'Sleep', top: '5%', left: '15%', rotation: -6, secondTop: 400, secondLeft: 30 },
    { id: 'mood', emoji: '😌', text: 'Mood', top: '3%', right: '12%', rotation: 5, secondTop: 410, secondLeft: 50 },
    { id: 'energy', emoji: '⚡️', text: 'Energy', top: '17%', left: '0', rotation: -30, secondTop: 390, secondLeft: -40 },
    { id: 'nervous', emoji: '💡', text: 'Nervous System', top: '22%', right: '5%', rotation: 5, secondTop: 335, secondLeft: 40 },
    { id: 'cognition', emoji: '🧠', text: 'Cognition', top: '32%', left: '1%', rotation: -8, secondTop: 310, secondLeft: 50 },
    { id: 'stress', emoji: '🧘', text: 'Stress', top: '34%', right: '15%', rotation: -60, secondTop: 350, secondLeft: -50 },
    { id: 'heart', emoji: '❤️‍🩹', text: 'Heart Health', top: '70%', left: '2%', rotation: -10, secondTop: 128, secondLeft: -30 },
    { id: 'endurance', emoji: '🏃', text: 'Endurance', top: '75%', right: '5%', rotation: 10, secondTop: 70, secondLeft: 50 },
    { id: 'immunity', emoji: '🛡️', text: 'Immunity', top: '82%', left: '0%', rotation: -7, secondTop: 99, secondLeft: 0 },
    { id: 'lung', emoji: '🫁', text: 'Lung Capacity', top: '89%', right: '5%', rotation: 10, secondTop: 40, secondLeft: 50 },
];



export const selectableGoalsData = [
    { id: 'sleep', emoji: '🛌', text: 'Better Sleep' },
    { id: 'stress', emoji: '😟', text: 'Stress or Anxiety' },
    { id: 'mood', emoji: '📈', text: 'Improve My Mood' },
    { id: 'energy', emoji: '⚡️', text: 'Energy & Focus' },
    { id: 'health', emoji: '💖', text: 'Overall Health' },
];

export const whenToDoBreathWrk = [
    { id: 'morning', emoji: '🛌', text: 'Morning' },
    { id: 'afternoon', emoji: '😟', text: 'Afternoon' },
    { id: 'night', emoji: '📈', text: 'Night' },

];


export const textStepsContent = [
    {
        line1: 'How you breathe is',
        line2: 'essential',
        line3: 'for unlocking a healthy\nbrain, body, and mind.',
    },
    {
        line1: 'Unfortunately most of us',
        line2: 'breathe poorly',
        line3: 'leading to more stress,\nburnout, and restless sleep.',
    },
    {
        line1: 'The good news is just',
        line2: '5 minutes',
        line3: 'of Breathwrk a day eliminates,\nstress, improves sleeo, \n and boosts energy.',
    },
    {
        line1: 'Its not magic its',
        line2: 'Neuroscience',
        line3: 'Breathwrk rewires your nervous \ system in seconds.'
    },
    {
        line1: 'What are your goals \n with Breathwrk',
        line2: '(Choose all that apply)',
    },
    {
        line1: 'What are your goals \n with Breathwrk',
        line2: '(Choose all that apply)',
    },
    {
        line1: "Let's do a quick lung test \n to calibrate your app ",
        line2: 'This will test how long you can exhale',
    },
    {
        line1: "Inhale fully",
    },
    {
        line1: "Hold down the button to start \n timing your exhale",
        line2: "Exhale as slowly \n as you can",
    },
    {
        line1: "Your Lung Health \n Score is",
        line2: "We'll show you what this means and how to improve it \n after sign up",
    },
    {
        line1: "When would you like \n do Breathwrk",
        line2: "(all you need is 5 minutes a day)",
    },
    {
        line1: "Great! We will help you \n stay consistent",
        line2: "Users who allow push reports 9x better results",
    },
    {
        line1: "Your custom",
        line2: "plan is ready",
    },
    {
        line1: "Start the New Year with",
        line2: "BreathWrk for FREE",
    },
];


