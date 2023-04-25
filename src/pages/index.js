import Head from 'next/head'
import { useEffect, useState } from 'react'
export default function Home (){
  const[input,setInput]=useState("");
  const[User,setTask]=useState([]);
  const[updateUI,setUpdateUI]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('/api/set_task',{User:input})
    .then((res)=>{console.log(res);
    setInput("");})
    .catch((err)=>console.log(err));
  };
  useEffect(()=>{
    axios.get(`/api/get_task`)
    .then((res)=>{
      setTask(res.data)
console.log(res)    })
  },[updateUI])
  return (
    <>
    <Head>

      <title>Assignment</title >
      <meta name='description' contents="Generated "/>
      <meta name='viewport' contents='width=device-width,initial-scale=1' />
      <link rel='icon' href='/favicon.ico'/>


    </Head>

    <main>
     
<div className='app'>
      <table onSubmit={handleSubmit}>
        <tr>
          <th>FIRSTNAME</th>
          <th>LASTNAME</th>
          <th>EMAILID</th>
          <th>CAR BRAND </th>
          <th>PHN PRICE</th>
          <th>GENDER</th>
          <th>INCOME</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>SAHA</td>
          <td>debanjanrik04@gmail.com</td>
          <td>BMW</td>
          <td>1000000</td>
          <td>MALE</td>
          <td>15200000</td>


        </tr>
       
      </table>
    </div>


      
      
        {User.map((t)=>( <li key={t._id}>{t.User}</li>))}
      

    </main>

    
    </>
  );
}