import './Styles.css';
import {Counter} from './Counter';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export function MovieCard(props){
    const ratingStyles = {
        color: props.rating >= 8.5 ? "green":"red"
    }
const [show, setShow] = useState(true);

    return(
        <Card className='movie-container'>
            <img className='movie-poster' src={props.poster} alt={props.alt}/>
            <CardContent className='movie-spec'>
                {/* <div className='movie-spec'> */}
                    <h2 className='movie-name'>{props.name}
                        <IconButton aria-label="delete" color="primary">
                        <button onClick={()=>setShow(!show)}>
                            {show?<ExpandLessIcon fontSize='small'/>:<ExpandMoreIcon fontSize='small'/>}
                        </button>
                        </IconButton>
                        <IconButton aria-label="delete" color="primary">
                            <InfoIcon fontSize='small' />
                        </IconButton>
                    </h2>
                    <h3 style={ratingStyles} className='movie-rating'>⭐{props.rating}</h3>
                {/* </div>  */}
            </CardContent>
            {show?<p className='movie-sumary'>{props.summary}</p>:null}
            <CardActions>
                <Counter />
            </CardActions>
        </Card>
    )
}