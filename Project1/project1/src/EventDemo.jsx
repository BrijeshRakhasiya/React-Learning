function EventDemo() {

    const demo = () => {
        alert("Welcome")
    }

    const PrintData = (event) => {
        console.log("Type is : " + event.type )
        console.log("Name is : " + event.target.name )
        console.log("Value is : " + event.target.value )
    }

    return (
        <>
        <input type="button" name="btn1" value="Btn1" onClick={demo}/>
        <input type="button" name="btn2" value="Btn2" onClick={demo}/>
        Text1 : <input type="text" name='textbox' onChange={PrintData}/>
        </>
    )
}

export default EventDemo 