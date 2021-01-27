import React, { createContext } from 'react';
import axios from 'axios';
import keys from '../config/key';

export const initialAppContext = {
    result: []
}
export const AppContext = createContext(initialAppContext);

class AppContextProvider extends React.Component {
    state={
        result:[]
    }

    fetchLatestNews = async () => {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${keys.newsOrgKey}`)
        .then((response) => {
            const res = response.data.articles;
            this.setState({result:res});
        })
        .catch((e) => {
            console.error(e);
        });
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    fetchNews = async (event,searchParam, startdate, enddate) => {
        event.preventDefault();
        if(searchParam){
            await axios.get(`https://newsapi.org/v2/everything?q=${searchParam}&from=${this.formatDate(startdate)}&to=${this.formatDate(enddate)}&language=en&apiKey=${keys.newsOrgKey}`)
            .then((response) =>{
                const res = response.data.articles;
                this.setState({result:res});
            })
            .catch((error) => {
                alert('Please enter a date range of past 2 weeks');
                this.setState({result:[]});
            });
        }else{
            alert('Please enter the search param');
        }
    }
    render(){
      return (
        <>
          <AppContext.Provider 
            value={{
              ...this.state,
              fetchLatestNews:this.fetchLatestNews,
              fetchNews:this.fetchNews
            }}
           >
              {this.props.children}
          </AppContext.Provider>
        </>
      );
    }
  }
  
export default AppContextProvider;