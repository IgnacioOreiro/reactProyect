import React, { Component } from "react"
import GenresMap from "./GenresMap";


class GenresInDb extends Component{
	constructor(){
		super()
		this.state = { genres: null }
	}

	componentDidMount () {
        fetch("http://localhost:3001/api/genres")
        .then(res =>(res.json()))
        .then(result => {
			this.setState({genres: result.data})
		})
    }
	

	render(){
	return (
		<>
			{/* <!-- Genres in DB --> */}
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
					</div>
					<div className="card-body">
						<div className="row">

							{this.state.genres === null 
							
							? 
								<div>Loading...</div>
							
							:
								this.state.genres.map((genreMap,index)=> {
									return <GenresMap {...genreMap} key={index}/>
								})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
	}
}

export default GenresInDb;