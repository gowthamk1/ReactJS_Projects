import React from 'react'

function Card({userName="New Member",btnText="Know Me",img="https://images.pexels.com/photos/20763679/pexels-photo-20763679/free-photo-of-aerial-view-of-a-body-of-water-with-trees-on-the-coastal-hills.jpeg?auto=compress&cs=tinysrgb&w=800"}) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{userName}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-white-800">{btnText}
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
  )
}

export default Card