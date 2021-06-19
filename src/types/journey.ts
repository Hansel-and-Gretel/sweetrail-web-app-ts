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

