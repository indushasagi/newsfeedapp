import {  useContext } from 'react';
import { AppContext } from '../context/AppContext';

function View(){
    const {result} = useContext(AppContext);
    return(
        <>
            {result.map((i,index) => {
                return(
                    <div key={index} className="news_panel" >
                        <img src={i.urlToImage} alt={i.urlToImage} style={{width:'20%'}}/>
                        <div className="content">
                            <h2><a  rel="noopener noreferrer"href={i.url} target="_blank">{i.title}</a></h2>
                            <span>By: {i.author}</span>
                            <p className="blurContent">{i.content}</p>
                        </div>
                    </div>
                )
               
            })}
        </>
    )
}

export default View;