import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';


interface Props {
    title: string;
    children: JSX.Element;
}


export const GeneralLayout:FC<Props> = ({ title, children }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        
        <nav>
            <Navbar />
        </nav>

        <main >
            {children}
        </main>
    </>
  )
}
