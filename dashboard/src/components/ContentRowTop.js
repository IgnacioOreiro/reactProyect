import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./ContentRowMovies";
import { Link, Route, Switch } from "react-router-dom";


function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/*<!-- Content Row Movies-->*/}
            <></>
            <Switch>
            <Route path="/ContentRowMovies" component={ContentRowMovies}/>
            <Route path="/LastMovieInDb" component={LastMovieInDb}/>
            <Route path="/GenresInDb" component={GenresInDb}/>
            <Route>
                <h1>404</h1>
            </Route >
            </Switch>
            {/*<!-- End movies in Data Base -->*/}

                {/*<!-- Genres in DB -->*/}
                {/*<!--End Genres In Db-->*/}

            </div>
        
    );
}
export default ContentRowTop;
