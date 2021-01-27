import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';

function Search(){
    const {fetchNews} = useContext(AppContext);
    const [searchParam, setSearchParam ] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return(
        <div className="search_panel">
            <form>
                <h2>Fetch News with search criteria</h2>
                <div>
                    <label>Search: </label><br />
                    <input type="text" placeholder="Search param" value={searchParam} onChange={event => setSearchParam(event.target.value)} />
                </div>
                <div>
                    <label>From: </label><br />
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </div>
                <div>
                    <label>To: </label><br />
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                </div>
                <button type="submit" className="btn" onClick={(event) => fetchNews(event,searchParam, startDate, endDate)}>Fetch News</button>
            </form>
        </div>
    )
}

export default Search;