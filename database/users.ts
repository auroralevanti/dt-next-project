export interface SeedUsers {
    userId: string;
    email: string;
    password: string;
    role: string;
    discordId: string;
    discordName: string;
    discordMemberSince: string,
    createdAt: string
};

interface SeedUsersData {
    users: SeedUsers[]
};

export const initialUsersData: SeedUsersData = {
    users: [
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
        {
            userId:             '005',
            email:              'isaiasdominguez@gmail.com',
            password:           '12345678',
            role:               'participant',
            discordId:          'isaiasdominguez',
            discordName:        'Isaias Dominguez',
            discordMemberSince: '18-07-2023',
            createdAt:          '11-03-2024'
        },
        {
            userId:             '006',
            email:              'fernando_her85@gmail.com',
            password:           '12345678',
            role:               'admin',
            discordId:          'fernando_her85',
            discordName:        'Fernando Herrera',
            discordMemberSince: '18-07-2023',
            createdAt:          '11-03-2024'
        },
        {
            userId:             '007',
            email:              'cesarhsandoval@gmail.com',
            password:           '12345678',
            role:               'admin',
            discordId:          'cesarhsandoval',
            discordName:        'César H. Sandoval',
            discordMemberSince: '18-07-2023',
            createdAt:          '11-03-2024'
        },
    ]
}