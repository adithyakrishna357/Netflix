import React,{useEffect,useState} from 'react'
import './RowPost.css';
import axios from '../../axios'
import Youtube from 'react-youtube'
import { API_KEY, imageUrl} from '../../constants/constants';

function RowPost(props) {
  const [movies,setmovies] = useState([]);
  const [urlid,setUrlid] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setmovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  }, []);
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }
      else{
        console.log('Array Empty');
      }
    })
  }
  const opts = {
    height: '430',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='row'>
      <h3>{props.title}</h3>
      <div className='posters'>
        {movies && movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${obj ? imageUrl+obj.backdrop_path : "" }`}  alt="poster"/>
          
        )}
      </div>
      {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default RowPost
