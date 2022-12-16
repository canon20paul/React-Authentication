import React, {useState} from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import swal from 'sweetalert'
    function Login(){

        const[username, setusername]=useState('')
        const[password, setpassword]=useState( '')

        function validate(event){
            event.preventDefault();

            if(username=='javascript' && password=='react'){
                swal('Login Successfull','Congraculations, your Login was Successful','success');
            }else{
                swal('Login is failed ', 'Please check you details once more', 'error');
            }
        }

        return <div>

            <div className='row justify-content-center'>
                <div className='col-md-4 '>
                    <h1>User Authentication </h1>
                    <form>
                        <input type="text" placeholder='username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                        <input type="text" placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="submit" className='btn btn-primary' onClick={validate}/>
                    </form>
                </div>
            </div>
        </div>
    }
    export default Login