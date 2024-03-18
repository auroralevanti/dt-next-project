import { GetServerSideProps } from 'next';
import { GeneralLayout } from "../../../../components/layout";


import { CurrentContest, NoContest } from '../../../../components/pages';


const NoHayConcursos = ({ data }: any) => {
  return (
    <GeneralLayout title='Concursos - DevTalles'>

      {
        data.Objeto.contestStatus === true
        ?
        <CurrentContest />
        :
        <NoContest />

      }


    </GeneralLayout>
  )
}

export default NoHayConcursos

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = 'https://devquest.azurewebsites.net/api/Contest/getActiveContest';
    
    const connect = await fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const data = await connect.json();
    

  return {
    props: {
     data, 
    }
  }
}