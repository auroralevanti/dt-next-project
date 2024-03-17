export interface SeedContest {
    contestId:    string;
    contestName:  string;
    starsAt:      string;
    endsAt:       string;

};

interface SeedContestData {
    contest: SeedContest;
};

export const initialContestData:SeedContestData = {
    contest: 
        {
        contestId:    '001-30',
        contestName:  'CodeQuest 2024',
        starsAt:      '11-03-2024',
        endsAt:       '14-03-2024',
    }


}