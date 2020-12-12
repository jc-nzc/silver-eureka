import React, {useState} from "react";

export default function SearchMovies(){

    //states -input query, movies
    const [query, setQuery] = useState('');
    //create the state for the movies, and update that state appropriately
    const [movies, setMovies] = useState([]);


    const searchMovies = async (e) => {
        e.preventDefault()
        // console.log("submitting");

        // const query = "One flew over the cuckoo's nest";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=f7608f6360f6fbdaa618b9e61bf22029&language=en-US&query=${query}&page=1&include_adult=false`;

        // const res = await fetch(url);
        // const data  = await res.json();
        // console.log(data);
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
    )
}
