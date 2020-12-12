import React from "react";

export default function SearchMovies(){

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("submitting");

        const query = "One flew over the cuckoo's nest";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=f7608f6360f6fbdaa618b9e61bf22029&language=en-US&query=${query}&page=1&include_adult=false`;

        // const res = await fetch(url);
        // const data  = await res.json();
        // console.log(data);
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
