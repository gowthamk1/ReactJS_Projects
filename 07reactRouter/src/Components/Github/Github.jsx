// import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    // const [data, setData] = React.useState([]);
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/gowthamk1')
    //         .then((response) => response.json())
    //         .then((apiData) => {  
    //             console.log(apiData); 
    //             setData(apiData);  
    //         })
    //         .catch((error) => console.error("Error fetching data:", error)); 
    // }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="Gowtham K" width="300" />
    <div>
                <h2 className="text-white font-bold">Name: {data.name}</h2>
                <h2 className="text-white font-bold">Location: {data.location}</h2>
            </div>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/gowthamk1');
    const data = await response.json();
    return data;
}