import { useEffect, useState } from "react";

function Form(){

    const [s1,Sets1] = useState(0);
    const [s2,Sets2] = useState(0);
    const [s3,Sets3] = useState(0);
    const [s4,Sets4] = useState(0);
    const [s5,Sets5] = useState(0);

    const [arr,Setarr] = useState("");

    function ArrSetter(){
        Setarr(a=>[...a,{
            English:Number(s1),
            Tamil:Number(s2),
            Maths:Number(s3),
            Physics:Number(s4),
            Chemistry:Number(s5)
        }]);

    }
    useEffect(()=>{
        console.log(arr);
        Sets1(0);
        Sets2(0);
        Sets3(0);
        Sets4(0);
        Sets5(0);
    },[arr])
    return(<>
    

    <table>
        <thead>
       <tr>
        <th>English</th>
        <th>Tamil</th>
        <th>Maths</th>
        <th>Physics</th>
        <th>Chemistry</th>
        <th>Submit</th>
        </tr>
        </thead>
<tbody>
    <tr>
    <td><input type="Number" className="i1" max={100} min={0} value={s1} onChange={(e)=>{(parseInt(e.target.value)<=100)?Sets1(parseInt(e.target.value)):Sets1(0)}}/></td>

    <td><input type="Number" className="i2" max={100} min={0} value={s2} onChange={(e)=>{(parseInt(e.target.value)<=100)?Sets2(parseInt(e.target.value)):Sets2(0)}}/></td>
    <td><input type="Number" className="i3" max={100} min={0} value={s3} onChange={(e)=>{(parseInt(e.target.value)<=100)?Sets3(parseInt(e.target.value)):Sets3(0)}}/></td>
    <td><input type="Number" className="i4" max={100} min={0} value={s4} onChange={(e)=>{(parseInt(e.target.value)<=100)?Sets4(parseInt(e.target.value)):Sets4(0)}}/></td>
    <td><input type="Number" className="i5" max={100} min={0} value={s5} onChange={(e)=>{(parseInt(e.target.value)<=100)?Sets5(parseInt(e.target.value)):Sets5(0)}}/></td>

    <td><button onClick={ArrSetter}>Submit</button></td>
    </tr>
</tbody>
    </table>
    
    <h1>Marks List</h1>

    <table>
        <thead>
       <tr>
        <th>Name</th>
        <th>English</th>
        <th>Tamil</th>
        <th>Maths</th>
        <th>Physics</th>
        <th>Chemistry</th>
        </tr>
        </thead>


        <tbody>
            <>
            {arr && arr.map((a,index)=>(
                <tr key={index}>
                    <td>Student {index+1}</td>
                    <td>{a.English}</td>
                    <td>{a.Tamil}</td>
                    <td>{a.Maths}</td>
                    <td>{a.Physics}</td>
                    <td>{a.Chemistry}</td>
                </tr>
            ))}
           </>
        </tbody>
        </table>
    </>)
}

export default Form;