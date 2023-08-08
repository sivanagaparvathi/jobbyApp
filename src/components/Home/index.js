import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home=props=>{
    const onRedirectToJobs=()=>{
        const {history}=props
        history.replace("/jobs")
    }

    return(
        <>
        <Header/>
        <div className="home-container">
            <h1 className="home-heading">
                Find The Job That <br/>
                Fits Your Life
            </h1>
            <p className="home-paragraph">Millions of people are searching jobs,salary information,company
            Reviews.Find the job that fits your ability and potential</p>
            <Link className="retry-btn-link" to="/jobs">
                <button 
                className="home-jobs-button"
                type="button"
                onClick={onRedirectToJobs}>
                    Find jobs
                </button>
            </Link>
        </div>
    )
}
export default Home