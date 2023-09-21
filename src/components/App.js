import React, {useState, useEffect} from "react"

function App() {
    const [dog, setDog] = useState([])
    // Display a <p> tag with the text of "Loading..." when the component is first rendered
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setDog(data.message)
            setIsLoaded(true)
          
        })
    }, [])

    if (!isLoaded) return <h1>Loading...</h1>
    return ( 
        <div>
            <img src={dog}alt="A Random Dog"></img>
        </div>
    )
}

export default App