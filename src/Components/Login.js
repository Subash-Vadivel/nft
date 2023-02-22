import '../Resources/CSS/login.css';
import { Row,Col,Container,Form,Button } from 'react-bootstrap';
import { useState } from 'react';
function Login(props) {
    const [Account,setAccount]=useState(true);
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    return (
    <>
            <Container className='container-center' fluid>
            <Row className='d-flex'>
            
            <Col md={3} xs={1} sm={2} >

            </Col>
            
              <Col md={6} xs={10} sm={8}  className='center'>
              
              <div className='center-form '>
                  <h2 >Login</h2>
                  <br></br><br></br>
                  {Account?
                  (

                    <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='w-50 center' type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" value={email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control className='w-50 center' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                   </Form.Group>
                    <Button className="btn btn-primary" onClick={()=>{localStorage.setItem('id',email);props.setUser(email)}}> Sign in</Button><br></br><br></br>
                    <p>Don't have an account ?<span onClick={() => setAccount(!Account)}> Sign up</span></p>
                    </Form>
                   ):
                  (
                    <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='w-50 center' type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" value={email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control className='w-50 center' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                   </Form.Group>
                   <Button className="btn btn-primary"> Sign Up</Button><br></br><br></br>
                    <p>Have an account ?<span onClick={() => setAccount(!Account)}> Sign in</span></p>

                    </Form>
                  )
                  }
                </div>
         
              </Col>
              
            <Col md={3} xs={1} sm={2} >

</Col>
            </Row>


    </Container>

    
    
    </>
  )
}
export default Login;
