import React from 'react';
import Head from 'next/head';

const Champions = () => {
  return (
    <React.Fragment>
      <Head>
        <title>lol / champions</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ lol / champions ⚡</span>
      </div>
    </React.Fragment>
  )
}

export default Champions;
