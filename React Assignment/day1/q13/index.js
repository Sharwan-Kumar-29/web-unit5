let {useState}=React



const Display=()=>{
    //React state define
    let [reactTitle,setReacttitle]=useState("React Title:")
    //React state for the counter
    let [reactUpdate,setReactUpdate]=useState(0)


    //Variable for the vanila js
    let vanillaUpdates=0

    const javaScriptTitle=()=>{
        const element=document.getElementById("javaScript")
        if(element){
            element.innerText=`vanilajs:${vanillaUpdates+1}`
        }
        vanillaUpdates+=1
        const counter=document.getElementById("vanilaCounter")
        counter.innerText=`vanila Counters: ${vanillaUpdates}`
    }
    function changeReactTitle(){
        setReacttitle(`React Title: ${reactUpdate+1}`)
        setReactUpdate((prev)=>prev+1)
    }
 

    return(
        <>
        <div>
            {/* vanila title */}
            <h1 id="javaScript">vanilajs:</h1>
            <button onClick={javaScriptTitle}>change js title</button>
            {/* vanila counter */}
            <p id="vanilaCounter">vanila Counters: {vanillaUpdates}</p>

            {/*react title  */}
           <h1>{reactTitle}</h1>
           <button onClick={changeReactTitle}>change React Title</button>
           <p>counter: {reactUpdate}</p>
        </div>
        </>
    )
}

const App=()=>{
    return(
        <Display/>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)