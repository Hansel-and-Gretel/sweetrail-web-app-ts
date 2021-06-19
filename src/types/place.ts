export interface Place {
    id: number;
    placeName: string | number;
    time: string;
    longitude: string;
    latitude: string;
    image: string;
    note: string;
    category: string;
    status: number;
    journeysId: number;
    userId: number;
    userName: string
}