export interface Journey {
    id: number;
    journeyName: string;
    type: string;
    accompany: string | null | '친구' | 'alone' | 'family' | 'friends' | 'random' ;
    pinFrequency: number;
    summary: string;
    image: string | '/image/journey/default.png';
    status: number;
    sharedFlag: number; //0: private 1: public
    userId: number | null;
    userName: string;
    createdAt: string;
    updatedAt: string;
}

export const styleArray = [
    'Adventure', 'Popular Places', 'Hipster','Solo Traveller', 'Nomadic', 'Food Lover', 'Geek', 'Shopping', 'History',
    'Local Places', 'Festival', 'Art', 'Academic',
    'Active', 'Bohemian', 'Hipster', 'Solo', 'Nomadic', 'Rural', 'Traditional', 'Back to the Land',
    'Digital', 'Sustainable', 'Workaholic', 'Socialite', 'Academic', 'Groupie', 'Simple Living'
]

export const accompany = [
    'Friends', 'Solo', 'Family', 'Random'
]