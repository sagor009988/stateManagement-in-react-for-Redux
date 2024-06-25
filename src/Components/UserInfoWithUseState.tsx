
import { useState } from "react";

const UserInfoWithUseState = () => {
    const [user,setUser]=useState({names:'',age:0,hobbies:[]})
    console.log(user);
    
    return (
        <div>
            <form className="border border-red-400 p-6 m-10">
                <input onChange={(e)=>setUser({...user,names:e.target.value})}  className="border border-black m-2" type="text" name="names" placeholder="Name" />

                <input  onChange={(e)=>setUser({...user,age:e.target.value})}  className="border border-black m-2"  type="number" name="age" placeholder="Name" />
                <input onBlur={(e)=>setUser({...user ,hobby:[...user.hobbies,e.target.value]})}  className="border border-black m-2"  type="text" name="hobby" placeholder="Hobby" />
                <input  className=" bg-slate-400 p-2 rounded-lg cursor-pointer" type="submit" value="Submit" />
            </form>_
        </div>
    );
};


export default UserInfoWithUseState;