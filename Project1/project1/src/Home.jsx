import './Home.css'
import wp from './assets/whatsapp.png'
function Home() {
    var a = 10 
    var b = 20 
    var mycolor = {color:"white" , backgroundColor:'blue'}
    return (
        <>
        A value is {a} <br></br>
        B value is {b}
        <p style={{color:'red' , backgroundColor:"yellow"}}>I am P Tag</p>
        <p style={mycolor}>I am P Tag again</p>
        <p style={mycolor}>I am P Tag again</p>
        <p style={mycolor}>I am P Tag again</p>
        <img src={wp} ></img>
        </>
    )
    
}

export  default Home 