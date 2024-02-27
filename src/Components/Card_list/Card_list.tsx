import React from 'react'
import Card_com from '../Card/Card_com'


interface Props {}

const Card_list: React.FC<Props> = ({}: Props): JSX.Element => {
  return (
    <div className='Container'>
      <h1>git</h1>
        <Card_com 
            companyName="Apple"
            ticker="AAPL" 
            price={100}
            paragraph="This is paragraph one"
            image="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card_com
            companyName="Microsoft"
            ticker="MSFT" 
            price={200}
            paragraph="This is paragraph Two"
            image="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
        />
        <Card_com
            companyName = "WSO2"
            ticker = "WS2" 
            price={300}
            paragraph="This is paragraph Three"
            image="https://images.unsplash.com/photo-1707009504605-a772866ac980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
        />
        <Card_com
            companyName="Codegen"
            ticker="cdgn" 
            price={400}
            paragraph="This is paragraph Four"
            image="https://images.unsplash.com/photo-1708456697489-423b34cf2650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"   />
    </div>
  )
}

export default Card_list