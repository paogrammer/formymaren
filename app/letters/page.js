// pages/index.js

import React from 'react';
import './letters.css';
import Link from 'next/link'

const image = '/public/img/envelope.jpg'

const Letters = () => {
  return (
    
    <div className='letters-container'>
        <h1 className='title'>Letters to Maren</h1>
        <div className='content'>
          <div className=' grid xl:grid-cols-3 xs: grid-cols-1 gap-4'>
            <div className='col-span-1'>
              <Link href='/letters/1'>
                <div className=" bg-white max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-full testimg"></div>
                    <div className="px-6 py-4">
                        <div className="text-black font-bold text-xl mb-2">Those Eyes</div>
                    </div>
                </div>
              </Link>
            </div>
            <div className='col-span-1'>
              <Link href='/letters/2'>
                <div className=" bg-white max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-full testimg"></div>
                    <div className="px-6 py-4">
                        <div className="text-black font-bold text-xl mb-2">Destiny</div>
                    </div>
                </div>
              </Link>
            </div>
            <div className='col-span-1'>
              <Link href='/letters/3'>
                <div className=" bg-white max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-full testimg"></div>
                    <div className="px-6 py-4">
                        <div className="text-black font-bold text-xl mb-2">Our Own Story</div>
                    </div>
                </div>
              </Link>
            </div>
            {/* <div className='col-span-1'>
              <Link href='/letters/4'>
                <div className=" bg-white max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-full testimg"></div>
                    <div className="px-6 py-4">
                        <div className="text-black font-bold text-xl mb-2">Untitled</div>
                    </div>
                </div>
              </Link>
            </div> */}
            
          </div>
        </div>
    </div>
  );
};

export default Letters;



