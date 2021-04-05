import React, {useState} from "react";
import Tweet from './Tweet'; 

function App(){
const[users, setUser] = useState([
  {name:'ed', message: 'Hello there'},
  {name:'jo', message: 'i am jo!'},
  {name: 'hana', message: 'see you everyday'}
]);
  
return(
<div className="app">
  {users.map(user =>(
<Tweet name={user.name} message={user.message}/>
  ))} 
</div>
  );
}



export default App;