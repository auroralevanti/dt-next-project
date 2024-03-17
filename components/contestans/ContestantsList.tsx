import { FC } from "react";
import { IContestans } from "../../interfaces";
import { Grid } from "@mui/material";
import { ContestantCard } from "./ContestantCard";


interface Props {
    contestants: IContestans[],
};


export const ContestantsList: FC<Props> = ({ contestants }) => {
    return (
        <Grid container spacing={3} width='80%' marginTop={3} marginBottom={3} sx={{ boxShadow: 2, }}>
            {
                contestants.map(contestant =>
                    <ContestantCard
                        key={contestant.userId}
                        contestant={contestant}
                    />
                )
            }
        </Grid>
    )
}
