
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { PieChart, Pie, Tooltip, ResponsiveContainer, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar,  Brush } from 'recharts';
function App() {
  const [state,setState]=useState()
  const result = [];
  useEffect(()=>{
axios.get('https://fakestoreapi.com/products').then(res=>{
  console.log(res.data);
  setState(res.data)
 
 
})

  },[])
  const data = state?.map(({ price, title }) => ({ price, title }));

console.log(data);

  return (
   <>
  
    
<div>
<h1 style={{textAlign:"center"}}>Products</h1>

         <ResponsiveContainer width="100%" height={400}>
          <PieChart>
          <Brush dataKey="title" height={30} />
            <Pie
              dataKey="price"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip formatter={(value, name, props) => [`${props.payload.title}: $${value}`, 'Price']} />
          </PieChart>
        </ResponsiveContainer>
        </div>
<div>

  
 

<ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <Brush dataKey="title" height={30} />
            <XAxis dataKey="title" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="price" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>

</div>


   </>
  );
}

export default App;
