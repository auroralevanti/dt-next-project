
import { GeneralLayout } from "../../../../components/layout";


import { CurrentContest, NoContest } from '../../../../components/pages';


const NoHayConcursos = () => {
  return (
    <GeneralLayout title='Concursos - DevTalles'>
      {/* <NoContest /> */}
      <CurrentContest />


    </GeneralLayout>
  )
}

export default NoHayConcursos