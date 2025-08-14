export type Goal = {
    id: string;
    text: string;
    emoji: string;
    top: string;
    left?: string;
    right?: string;

}

// export const goals = [
//     { id: 'sleep', emoji: '🛌', text: 'Sleep', top: '10%', left: '15%' },
//     { id: 'mood', emoji: '😌', text: 'Mood', top: '10%', right: '15%' },
//     { id: 'energy', emoji: '⚡️', text: 'Energy', top: '22%', left: '5%' },
//     { id: 'nervous', emoji: '💡', text: 'Nervous System', top: '22%', right: '5%' },
//     { id: 'cognition', emoji: '🧠', text: 'Cognition', top: '34%', left: '10%' },
//     { id: 'stress', emoji: '🧘', text: 'Stress', top: '34%', right: '15%' },
//     { id: 'heart', emoji: '❤️‍🩹', text: 'Heart Health', top: '70%', left: '10%' },
//     { id: 'endurance', emoji: '🏃', text: 'Endurance', top: '70%', right: '10%' },
//     { id: 'immunity', emoji: '🛡️', text: 'Immunity', top: '82%', left: '15%' },
//     { id: 'lung', emoji: '🫁', text: 'Lung Capacity', top: '82%', right: '15%' },
// ];

export const goals: Goal[] = [
    { id: 'sleep', emoji: '🛌', text: 'Sleep', top: '10%', left: '15%' },
    { id: 'mood', emoji: '😌', text: 'Mood', top: '10%', right: '15%' },
    { id: 'energy', emoji: '⚡️', text: 'Energy', top: '22%', left: '5%' },
    { id: 'nervous', emoji: '💡', text: 'Nervous System', top: '22%', right: '5%' },
    { id: 'cognition', emoji: '🧠', text: 'Cognition', top: '34%', left: '10%' },
    { id: 'stress', emoji: '🧘', text: 'Stress', top: '34%', right: '15%' },
    { id: 'heart', emoji: '❤️‍🩹', text: 'Heart Health', top: '70%', left: '10%' },
    { id: 'endurance', emoji: '🏃', text: 'Endurance', top: '70%', right: '10%' },
    { id: 'immunity', emoji: '🛡️', text: 'Immunity', top: '82%', left: '15%' },
    { id: 'lung', emoji: '🫁', text: 'Lung Capacity', top: '82%', right: '15%' },
];