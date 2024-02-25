
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react';
import './Card_list.css'

interface Props  {
  companyName: string;
  ticker:string;
  price:number;
  paragraph:string;
  image: string;
}

const Card_com : React.FC<Props> = ({companyName,ticker,price,paragraph,image}: Props):JSX.Element => {
  return (
   
      <Card sx={{ maxWidth: 345, borderRadius:"20%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {companyName}({ticker})
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

      
   
  )
}

export default Card_com


