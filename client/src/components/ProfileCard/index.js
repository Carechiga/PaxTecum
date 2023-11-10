import React from 'react'
import { Button, Form, FormGroup } from 'semantic-ui-react'
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { GET_USER } from "../../utils/queries";
import { useNavigate } from 'react-router-dom'


const ProfileCard = (props) => {

      const { data } = useQuery(GET_USER);
      const user = data?.getUser || {};

      const navigate = useNavigate();


return ( 
  // Semantic UI form for signup
  <Form onSubmit='' size="large">
    <Form.Group widths='equal'>
          <Form.Input fluid label='First name' value={user.firstName} />
          <Form.Input fluid label='Middle name' value={user.middleName} />
          <Form.Input fluid label='Last name' value={user.lastName} />
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Email' value={user.email} />
          <Form.Input fluid label='Phone' value={user.phone} />
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Gender' value={user.gender} />
          <Form.Input fluid label='Ethnicity' value={user.ethnicity} />          
          <Form.Input fluid label='Preferred Language' value={user.language} />          
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input fluid label='Street' value={user.address} />      
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='City' value={user.city} />          
          <Form.Input fluid label='State' value={user.state} />
          <Form.Input fluid label='Zip' value={user.zipcode} />                    
    </Form.Group>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Date of Birth' value={user.birthDate} />
    </Form.Group>
    <div style={{ textAlign:'left', marginTop: '30px' }}> 
        <Button style={{marginBottom:'20px'}} animated color='blue'  fluid size='medium' type='button'onClick={()=>{navigate('/editprofile')}}>Edit Info</Button>
    </div>
  </Form>
    )
}

export default ProfileCard;