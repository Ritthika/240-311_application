import { useState } from 'react'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './LoginPage.css'

const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div>
            <MDBContainer>
                <MDBRow className="LoginPage">
                    <MDBCol md="9">
                        <form>
                            <br />
                            <p className="h5 text-ecnter mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput label="Your email" group type="email" validate error="wrong"
                                    success="right" name="email" onChange={(e)=> setEmail(e.target.value)} />
                                <MDBInput label="Your password" group type="password" name="password"
                                    validate onChange={(e)=> setPassword(e.target.value)} />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary">LOGIN</MDBBtn>
                                <MDBBtn color="primary">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default LoginPage;