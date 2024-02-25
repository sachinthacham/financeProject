import React, { SyntheticEvent,ChangeEvent} from 'react'


interface Props {
    search: string | undefined;
    onClick: (e:SyntheticEvent) => void;
    handleSearch:(e:ChangeEvent<HTMLInputElement>) => void
}

const Search:React.FC<Props> = ({search,onClick,handleSearch}: Props):JSX.Element => {

    
  return (
    <div>
        <input 
            value={search} onChange={(e) => handleSearch(e)}>
        </input>
        <button onClick={(e) => onClick(e)}></button>
    </div>
  )
}
export default Search;

