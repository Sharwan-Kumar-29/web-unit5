const reactlist=["React","javaScript","Css"]
function Display(){
    return(
        <div>
            <ol>
                {
                    reactlist.map((ele,i)=>(
                        <li key={i}>{ele}</li>
                    ))
                }
            </ol>
        </div>
    )
}


const App=()=>{
    return(
        <Display/>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)