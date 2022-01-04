import {useState, useEffect} from 'react'

function Main() {
    const [food, getFood] = useState([])
    const yelpURL = 'https://api.yelp.com/v3/businesses/search?term=food&location=singapore&open_now=true';
    const yelpOption = {
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`,
            Origin: 'localhost',
            withCredentials: true
        }
    }
    const yelpData = () => {
        fetch(yelpURL, yelpOption).then(res => res.json()).then(json => console.log(json))
    }
    useEffect(() => {
        yelpData()
    }, [])
    return (
      <div className="Main">

      </div>
    );
  }
  
  export default Main;
  