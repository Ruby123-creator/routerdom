import { useSearchParams } from "react-router-dom"

const Filter =()=>{
    const [searchParams , setSearchParams] = useSearchParams();
    let age = searchParams.get('age');
    let city = searchParams.get('city')
    return(
        <div>
            <h1>Filter Page</h1>
            <h3>Age is :{age}</h3>
            <h3>City is :{city}</h3>
            <input type="text" name="" id="" onChange={(e)=>setSearchParams({text:e.target.value ,age:100,city:"Noida"})}/>
           <button onClick={()=>setSearchParams({age:40})}>Age in query</button>
        </div>
    )
}
export default Filter;