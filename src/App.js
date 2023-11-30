
import './App.css';
import { PieChart, Pie, Tooltip, ResponsiveContainer, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts';
function App() {
  const data=[
    {name:"Facebook",value:200000000},
    {name:"Instagram",value:150000000},
    {name:"Twitter",value:100000000},
    {name:"Telegram",value:200000000},
    {name:"Youtube",value:200000000},
    
  ]
  return (
   <>
  
    
<div>
<h1>Pie chart</h1>




        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
        </div>
<div>

  <h1>Barchart</h1>

  <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>


</div>


   </>
  );
}

export default App;
