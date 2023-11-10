import React from 'react'
import { Grid, GridColumn, Header, Icon, Image } from 'semantic-ui-react'
import { GET_USER } from '../../utils/queries'
import { useQuery } from '@apollo/client'
import AuthServices from '../../utils/auth'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/'

const HeaderContainer = (props) => {
    // Use AuthService to check if user is logged in
    const loggedIn = AuthServices.loggedIn();
    // Get user data from query
    const { data } = useQuery(GET_USER);
    // Set user to empty object if no data
    const user = data?.getUser || {};
    return (
    <>
     <Grid style={{marginLeft: "8px", marginRight: "8px", marginTop: "5px" }} stackable>
        <Grid.Row>
          {/* Title Header */}
          <Grid.Column width={12}>
            <Header as='h1'>
              <Icon name='stethoscope' color='red' size='massive' className='siteIcon'/>
              <Header.Content className='headerTitle'>
                PaxTecum
                <Header.Subheader className='headerSubTitle'>
                  Your health where you can find it
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={4} floated='right'>
            <Link to="/">
                <Header as={'h5'} textAlign='right' size='small' style={{ paddingTop:'10px' }}>
                <Header.Content>
                  {/* If logged in, display username, else display 'Guest' */}
                  Logged in as <span style={{color: 'blue'}}>{loggedIn ? user.firstName : 'Guest'}</span>
                </Header.Content>
              </Header>
            </Link> 
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{width: "100%"}}>
          <Grid.Column width={16}>
            <Navbar {...props} />
            </Grid.Column>
        </Grid.Row>
     </Grid>
    </>
    )
  }
  
  export default HeaderContainer;