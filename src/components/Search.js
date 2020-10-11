import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm]= useState('');
    const [results, setResults]= useState([]);


    useEffect(()=>{
        const search = async() => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
              params:{
                  action: 'query',
                  list: 'search',
                  origin: '*',
                  format: 'json',
                  srsearch: term
              }  
            });

            setResults(data.query.search);
        }

        if(term && !results.length)
        {
            search();
        }
        else
        {
            const timeout_id = setTimeout(()=> {
                if(term){   //If term exists then only call search
                    search();
                }
            }, 500);
    
            return () => {
                clearTimeout(timeout_id);
            };
        }
    }, [term]);

    const renderedResults = results.map((r)=> {return (<div className="item">
        <div className="right floated content">
            <a className="ui button" href={`https://en.wikipedia.org?curid=${r.pageid}`}>Go</a>
        </div>
        <div key= {r.pageid} className="content">
            <div className="header">
                {r.title}
            </div>
            <span dangerouslySetInnerHTML={{__html: r.snippet}}></span>
        </div>
    </div>)});

    return (
        <div>
            <div className="ui form">
                <div className = "field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                    value={term} 
                    onChange={e => setTerm(e.target.value)}></input>
                </div>
            </div>
    <div className="ui celled list">{renderedResults}</div>
        </div>
    );
}

export default Search;