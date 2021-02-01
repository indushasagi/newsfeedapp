import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';

function Search(){
    const {fetchNews} = useContext(AppContext);
    const [searchParam, setSearchParam ] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [prefLang, setPrefLang] = useState("ru");
    const selectLang = (event) => {
        setPrefLang(event.target.value);
    }
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
                <div>
                    <label>Choose language: </label><br />
                    <select onChange={(event) => selectLang(event)}>
                        <option value="ru">RU</option>
                        <option value="es">UK</option>
                    </select>
                </div>
                <button type="submit" className="btn" onClick={(event) => fetchNews(event,searchParam, startDate, endDate, prefLang)}>Fetch News</button>
            </form>
        </div>
    )
}

export default Search;