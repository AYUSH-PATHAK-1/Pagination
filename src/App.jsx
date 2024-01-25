import React, { useState } from 'react'
import Data from './Data.json'

const App = () => {
  const [curruntpage,setCurrentpage]=useState(1)
  const recordsPerpage=5;
  const lastIndex=curruntpage*recordsPerpage;
  const firstIndex=lastIndex-recordsPerpage;
  const records=Data.slice(firstIndex,lastIndex);
  const npage=Math.ceil(Data.length/recordsPerpage);
  const numbers=[...Array(npage+1).keys()].slice(1);

  function prePage(){
    if(curruntpage !==1){
      setCurrentpage(curruntpage-1)
    }
  }

  function changeCpage(id){
      setCurrentpage(id)
  }

  function nextPage(){
      if(curruntpage !==npage){
        setCurrentpage(curruntpage+1)
      }
  }

  return (
    <>
   <div className='container mx-auto mt-12 border-black p-5 border-[2px] rounded-xl'>
  <table className='min-w-full bg-white border border-gray-300'>
    <thead>
      <tr>
        <th className='py-2 px-4 border-b text-center border-black border-[1px] border-solid'>ID</th>
        {/* <div class="line rotate-90 border-[1px] border-orange-500 md:block"></div> */}
        <th className='py-2 px-4 border-b text-center border-black border-[1px] border-solid'>Name</th>
        <th className='py-2 px-4 border-b text-center border-black border-[1px] border-solid'>Email</th>
      </tr>
    </thead>
    <tbody>
      {records.map((d, i) => (
        <tr key={i} className={(i % 2 === 0 ? 'bg-green-100' : 'bg-white')}>
          <td className='py-2 px-4 border-b text-center align-middle border-black border-[1px] border-solid'>{d.id}</td>
          <td className='py-2 px-4 border-b text-center align-middle border-black border-[1px] border-solid'>{d.name}</td>
          <td className='py-2 px-4 border-b text-center align-middle border-black border-[1px] border-solid'>{d.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <nav className="flex items-center justify-center mt-4 ">
  <ul className="flex list-none p-2 border-black border-[1px] rounded-lg">
    <li className="mr-3 p-2">
      <a href="#" className="page-link" onClick={prePage}>
        Prev
      </a>
    </li>
    {numbers.map((n, i) => (
      <li key={i} className={`mr-3 ${curruntpage === n ? 'bg-blue-500' : ''} p-2 rounded-lg`}>
        <a href="#" className="page-link" onClick={() => changeCpage(n)}>
          {n}
        </a>
      </li>
    ))}
    <li className='p-2'>
      <a href="#" className="page-link" onClick={nextPage}>
        Next
      </a>
    </li>
  </ul>
</nav>


</div>

    </>
  )
}

export default App