import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignUpForm';
import { Container, Header } from 'semantic-ui-react';


function SignUp(props) {
  return (
    <>
      <div className="container my-1">
        <Link to="/" style={{fontSize: "25px"}}>← Go to Login</Link>
      </div>
    {/* Container centers and pads signup content */}
      <Container>      
      <Header as='h2' textAlign='center' content='Sign Up' />
        <SignupForm/>
      </Container>
    </>
  );
}

export default SignUp;