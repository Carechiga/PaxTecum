import React, {useState, useEffect } from "react";
import { GET_USER } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import { useQuery, useMutation } from '@apollo/client';
import ProfileCard from "../components/ProfileCard";
import { Container, Header } from 'semantic-ui-react';



const Profile = (props) => {  
    // Render the profile component
    return (
      <>
         {/* Container centers and pads signup content */}
        <Container>      
        <Header as='h2' textAlign='center' content='General Information' />
          <ProfileCard/>
        </Container>
      </>
    );
};

export default Profile;