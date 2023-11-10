import React, { useState }  from 'react'
import { Button, Checkbox, Form, Message, MessageHeader, Header } from 'semantic-ui-react'
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { GET_USER } from "../../utils/queries";
import { UPDATE_USER } from '../../utils/mutations'; 
import { validateEmail } from '../../utils/helpers';


const InsuranceForm = (props) => {

      const { data } = useQuery(GET_USER);
      const user = data?.getUser || {};


return ( 
  // Semantic UI form for signup
  <Form onSubmit='' size="large">
    <div style={{ textAlign:'center', marginBottom: '30px'}}> <Button type='submit'>Edit Info</Button></div>
    <div>
    <Header style={{ textAlign:'center'}}> Primary </Header>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Primary Insurance Company' value={user.firstName} />
          <Form.Input fluid label='Id Number' value={user.middleName} />
          <Form.Input fluid label='Group Number' value={user.lastName} />
    </Form.Group>
    </div>
    <div style={{marginTop: '60px'}}>
    <Header style={{ textAlign:'center'}}> Dental </Header>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Dental Insurance Company' value={user.firstName} />
          <Form.Input fluid label='Id Number' value={user.middleName} />
          <Form.Input fluid label='Group Number' value={user.lastName} />
    </Form.Group>
    </div>
    <div style={{marginTop: '60px'}}>
    <Header style={{ textAlign:'center'}}> Vision </Header>
    <Form.Group widths='equal'>
          <Form.Input fluid label='Vision Insurance Company' value={user.firstName} />
          <Form.Input fluid label='Id Number' value={user.middleName} />
          <Form.Input fluid label='Group Number' value={user.lastName} />
    </Form.Group>
    </div>
    
  </Form>
  
    )
}

export default InsuranceForm;