import { FC } from "react";
import { IContestans } from "../../interfaces";
import { initialContestantsData } from "../../database";
import { Card, Grid, CardContent, Typography } from "@mui/material";



interface Props {
  contestant: IContestans,
};

const contestant = initialContestantsData.contestants

export const ContestantCard:FC<Props> = ({ contestant }) => {
  return (
    <Grid item xs={12} md={12} key={contestant.userId}>

      <Card>
        <CardContent sx={{ maxWidth: '70%' }}>
          <Typography variant='body1' fontWeight={300} fontSize='20px' color='black'>{contestant.discordName}</Typography>
          <Typography variant='body1' fontWeight={300} fontSize='20px' color='black'>{contestant.discordId}</Typography>
          <Typography variant='body1' fontWeight={300} fontSize='16px' color='black'>{contestant.role}</Typography>
        </CardContent>
      </Card>

    </Grid>
  )
}
