import './App.css';
import {ChangeEvent, SyntheticEvent, useState} from 'react'
import Search from './Components/Search/Search'
import Card_list from './Components/Card_list/Card_list'
 
function App() {

  const [search, setSearch] = useState<string>("");

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
       // console.log(e);
    }
    const onClick = (e:SyntheticEvent) => {
        console.log(e);
    }
  return (
   <div>
      <Search search={search} handleSearch={handleSearch} onClick={onClick}/>
      <Card_list/>
   </div>
  );
}

export default App;
