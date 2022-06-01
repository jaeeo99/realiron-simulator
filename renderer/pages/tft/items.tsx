import React from 'react';
import Head from 'next/head';

const Items = () => {
  return (
    <React.Fragment>
      <Head>
        <title>tft / items</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ tft / items ⚡</span>
      </div>
    </React.Fragment>
  )
}

export default Items;
