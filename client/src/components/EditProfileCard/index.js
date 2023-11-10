import React, { useState }  from 'react'
import { Button, Checkbox, Form, Message, MessageHeader, Dropdown } from 'semantic-ui-react'
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { GET_USER } from "../../utils/queries";
import { UPDATE_USER } from '../../utils/mutations'; 
import { useNavigate } from 'react-router-dom'


const EditProfileCard = (props) => {

      const { data } = useQuery(GET_USER);
      const user = data?.getUser || {};

      const navigate = useNavigate();

      const [formState, setFormState] = useState({ firstName: user.firstName, middleName: user.middleName, lastName: user.lastName, phone: user.phone, gender: user.gender, ethnicity: user.ethnicity, language: user.language, address: user.language, city: user.city, state: user.state, zipcode: user.zipcode, birthDate: user.birthDate});
      const [updateUser] = useMutation(UPDATE_USER);

    //This updates the formstate with what is input into the form as the user interacts with it
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
        ...formState,
        [name]: value,
    });
    console.log(formState);
    };

    //when form is submited formstate is sent to mongoDB
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        updateUser({
        variables: { 
            firstName: formState.firstName,
            middleName: formState.middleName,
            lastName: formState.lastName,                  
            phone: formState.phone,
            gender: formState.gender,
            ethnicity: formState.ethnicity,
            language: formState.language,
            address: formState.address,
            city: formState.city,
            state: formState.state,
            zipcode: parseInt(formState.zipcode),
            birthDate: formState.birthDate
        }
      });
      console.log(formState);
    }

    const stateList = [
        {
          key: 'AL',
          text: 'AL',
          value: 'AL',
        },
        {
          key: 'AK',
          text: 'AK',
          value: 'AK',
        },
        {
          key: 'AZ',
          text: 'AZ',
          value: 'AZ',
        },
        {
          key: 'AR',
          text: 'AR',
          value: 'AR',
        },
        {
          key: 'CA',
          text: 'CA',
          value: 'CA',
        },
        {
          key: 'CO',
          text: 'CO',
          value: 'CO',
        },
      ]


return ( 
  // Semantic UI form for signup
  <Form onSubmit={handleFormSubmit} size="large">
    <Form.Group widths='equal'>
          <Form.Input fluid label='First Name' name='firstName' onChange={handleChange} placeholder={user.firstName} />
          <Form.Input fluid label='Middle Name' name='middleName'  onChange={handleChange} placeholder={user.middleName} />
          <Form.Input fluid label='Last Name' name='lastName' onChange={handleChange} placeholder={user.lastName} />
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Email' name='email' disabled onChange={handleChange} value={user.email} />
          <Form.Input fluid label='Phone' name='phone' onChange={handleChange} placeholder={user.phone} />
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Gender' name='gender' onChange={handleChange} placeholder={user.gender} />
          <Form.Input fluid label='Ethnicity' name='ethnicity' onChange={handleChange} placeholder={user.ethnicity} />          
          <Form.Input fluid label='Preferred Language' name='language' onChange={handleChange} placeholder={user.language} />          
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input fluid label='Street' name='address' onChange={handleChange} placeholder={user.address} />      
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='City'  name='city' onChange={handleChange} placeholder={user.city} />          
          <Form.Input fluid label='State' name='state' onChange={handleChange} placeholder={user.state} />
          <Form.Input fluid label='Zip' name='zipcode' onChange={handleChange} placeholder={user.zipcode} />                    
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Date of Birth' name='birthDate' onChange={handleChange} placeholder={user.birthDate} />
    </Form.Group>
    <div style={{ textAlign:'left', marginTop: '30px' }}> 
        <Button style={{marginBottom:'20px'}} animated color='green' fluid size='medium' type='submit' onClick={()=>{navigate('/')}}>Save Info</Button>
    </div>
  </Form>
    )
};

export default EditProfileCard;