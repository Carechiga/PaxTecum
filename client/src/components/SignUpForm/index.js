import React, { useState }  from 'react'
import { Button, Checkbox, Form, Message} from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations'; 
import { validateEmail } from '../../utils/helpers';


const SignupForm = (props) => {
        const [formState, setFormState] = useState({ firstName: '', middleName: '', lastName: '', email: '', password: '', phone: ''});
        const [addUser] = useMutation(ADD_USER);
        const [errorMessage, setErrorMessage] = useState("");

    //this function checks the form when the email input is interacted with and uses the regex from validate email to compare if the email input is valid if not it generates and error message
    function handleEmail(e) {
      if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage("Your email is invalid.");
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage("");
          }
        }
      }  
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
    
    //this function checks the form when any field is interacted with and left blank, if it is left blank it generates an error message
    function handleBlank(e) {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.id} is required.`);
      } else {
        setErrorMessage("");
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });        
      }
    }      

    //this function handles when the form is submitted. 
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //It first checks to see if any of the form state fields are blank if any are it generates and error message if not it continues (this is here in case the user subbmits the form before interacting with the form first since error messages are generated on Blur)
        if(!formState.firstName || !formState.email || !formState.password || !formState.lastName || !formState.phone ){
          setErrorMessage("Missing required information fields!");
          return
        }
        //if the form generates any error message the form will not submit
        else if(errorMessage){
          return
        }
        //if there are no error messages the function will proceed and create a new user with the input information and log them in
        else{
        const mutationResponse = await addUser({
            variables: {
              firstName: formState.firstName,
              middleName: formState.middleName,
              lastName: formState.lastName,
              email: formState.email,
              password: formState.password,                  
              phone: formState.phone
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
        };
      }
      
      //This updates the formstate with what is input into the form as the user interacts with it
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

return ( 
  // Semantic UI form for signup
  <Form onSubmit={handleFormSubmit} size="large">
    <Form.Field required>
      <label style={{ margin: '0px 0px 10px 5px'}}>First Name</label>
      <input 
      placeholder='First Name' 
      name="firstName"
      id="firstName"
      onChange={handleChange}
      onBlur={handleBlank}
      />
    </Form.Field>
    <Form.Field>
      <label style={{ margin: '0px 0px 10px 5px'}}>Middle</label>
      <input 
      placeholder='Middle' 
      name="middleName"
      id="middleName"
      onChange={handleChange}
      onBlur={handleBlank}
      />
    </Form.Field>
    <Form.Field required>
      <label style={{ margin: '0px 0px 10px 5px'}}>Last Name</label>
      <input 
      placeholder='Last Name' 
      name="lastName"
      id="lastName"
      onChange={handleChange}
      onBlur={handleBlank}
      />
    </Form.Field>
    <Form.Field required>
      <label style={{ margin: '0px 0px 10px 5px'}}>Email</label>
      <input 
      placeholder='example@email.com' 
      name="email"
      type="email"
      id="email"
      onChange={handleChange}
      onBlur={handleEmail}
      />
    </Form.Field>
    <Form.Field required>
      <label style={{ margin: '0px 0px 10px 5px'}}>Password</label>
      <input 
      placeholder='**********' 
      name="password"
      type="password"
      id="Password"
      onChange={handleChange}
      onBlur={handleBlank}
      />
    </Form.Field>
    <Form.Field required>
      <label style={{ margin: '0px 0px 10px 5px'}}>Phone Number</label>
      <input 
      placeholder='###-###-####' 
      name="phone"
      id="Phone"
      onChange={handleChange}
      onBlur={handleBlank}
      />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    {errorMessage && (
						<Message negative>
              <Message.Header>Signup Failed</Message.Header>
							<p>{errorMessage}</p>
						</Message>
					)}
    <div style={{ textAlign:'center' }}> <Button type='submit'>Submit</Button></div>
  </Form>
    )
}


export default SignupForm;