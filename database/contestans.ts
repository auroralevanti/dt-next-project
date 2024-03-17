export interface SeedContestans {
    userId: string;
    email: string;
    password: string;
    role: string;
    discordId: string;
    discordName: string;
    discordMemberSince: string,
    createdAt: string
};

interface SeedContestantsData {
    contestants: SeedContestans[]
};

export const initialContestantsData: SeedContestantsData = {
    contestants: [
        {
            userId:             '001',
            email:              'jmboada30@gmail.com',
            password:           '12345678',
            role:               'participant',
            discordId:          'joelboada',
            discordName:        'joelboada30',
            discordMemberSince: '07-08-2023',
            createdAt:          '11-03-2024'
        },
        {
            userId:             '002',
            email:              'jmboada30@gmail.com',
            password:           '12345678',
            role:               'participant',
            discordId:          'miguel98fer',
            discordName:        'miguel98fer',
            discordMemberSince: '01-03-2023',
            createdAt:          '11-03-2024'
        },
        {
            userId:             '003',
            email:              'diegojdiazp@gmail.com',
            password:           '12345678',
            role:               'participant',
            discordId:          'diegojdiazp',
            discordName:        'Diego Díaz',
            discordMemberSince: '07-09-2023',
            createdAt:          '11-03-2024'
        },
        {
            userId:             '004',
            email:              'auroralevanti@gmail.com',
            password:           '12345678',
            role:               'participant',
            discordId:          'alevanti',
            discordName:        'ALevanti',
            discordMemberSince: '07-08-2023',
            createdAt:          '11-03-2024'
        },
    ]
}


