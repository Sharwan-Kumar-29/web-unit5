let {useState}=React
function Display(){
    let [value,setValue]=useState("")

    function render(){
        switch(value){
            case "Home":
                return <h1>Welcome to Home</h1> 
            case "Product":
                return <h1>Product lupin k pass h</h1>
            case "Contact US":

                return <h1>You can contact to leena</h1>
        }

    }

    return(
        <div id="container"style={styles.Container}>
            <nav id="navbar" style={styles.navbar}>
                <button onClick={()=>setValue((prev)=>prev="Home") } style={value==="Home"?styles.activeLink:styles.link}>Home</button>
                <button onClick={()=>setValue((prev)=>prev="Product")}style={value==="Product"?styles.activeLink:styles.link}>Product</button>
                <button onClick={()=>setValue((prev)=>prev="Contact US")}style={value==="Contact US"?styles.activeLink:styles.link}>Contact Us</button>

            </nav>
            <div id="content">
                { render()}

            </div>
        </div>
    )

}



const App=()=>{
    return(
        <Display/>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)


const styles={
Container:{
    textAlign:"center"
},
navbar:{
    display:"flex",
    justifyContent:"center",
    gap:"20px"
    
},
activeLink:{
    backgroundColor:"red",
    color:"white",
    borderStyle:"none",
    borderRadius:"20%",
    padding:"0.5rem",
    fontWeight:"700"

},
link:{
    backgroundColor:"green",
    color:"white",
    borderStyle:"none",
    borderRadius:"20%",
    padding:"0.5rem",
    fontWeight:"700"

}

}