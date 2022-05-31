import CategoriesInDb from './CategoriesInDb'
import ContentRowMovies from './ContentRowMovies'
import LastMovieInDb from "./LastMovieInDb";

function ContentRowTop() {
    return (
        <div className="container-fluid">
                                       
        <ContentRowMovies />
            
            <div className="row">
        <LastMovieInDb/>
        <CategoriesInDb />
            </div>
        </div>     


    )
}

export default ContentRowTop;