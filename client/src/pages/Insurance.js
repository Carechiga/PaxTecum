import React, {useState, useEffect } from "react";
import { GET_USER } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import { useQuery, useMutation } from '@apollo/client';
import InsuranceForm from "../components/InsuranceForm";
import { Container, Header } from 'semantic-ui-react';



const Insurance = (props) => {  
    // Render the profile component
    return (
      <>
         {/* Container centers and pads signup content */}
        <Container>      
        <Header as='h2' textAlign='center' content='Insurance Info' />
          <InsuranceForm/>
        </Container>
      </>
    );
};

export default Insurance;