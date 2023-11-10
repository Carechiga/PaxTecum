import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';
import AuthService from "../../utils/auth"

const loggedIn = AuthService.loggedIn();
export default class Navbar extends Component {

    state = { activeItem: 'home' }    

    //will set active element in navbar to the element that triggers the event using its name attribute
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state

        return(
            <Menu secondary pointing stackable>
                <Menu.Item 
                    as={NavLink} exact to="/"
                    name='general'
                    active={activeItem === 'general'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/">
                    General Info
                    </Link>
                </Menu.Item>
                <Menu.Item 
                    as={NavLink} exact to="/insurance"
                    name='insurance'
                    active={activeItem === 'insurance'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/insurance">
                    Insurance Info
                    </Link>
                </Menu.Item>
                <Menu.Item 
                    as={NavLink} exact to="/calendar"
                    name='calendar'
                    active={activeItem === 'calendar'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/calendar">
                    Calendar
                    </Link>
                </Menu.Item>

                <Menu.Item
                    as={NavLink} exact to="/medication"
                    name='medication'
                    active={activeItem === 'medication'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/medication">
                    Medication
                    </Link>
                </Menu.Item>
                <Menu.Item
                    as={NavLink} exact to="/documents"
                    name='documents'
                    active={activeItem === 'documents'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/documents">
                    Documents
                    </Link>
                </Menu.Item>
                <Menu.Item 
                    name='login'
                    active={activeItem === 'login'}
                    position='right'
                    >
                    {/* If logged in Menu.Item = 'Logout', else Menu.Item = 'Log In' */}
                        {loggedIn ? (
                            <Link to = "/" onClick={() => AuthService.logout()}>Log Out</Link>
                        ) : (
                            <Link to="/login">Log In</Link>
                        )}
                </Menu.Item>
            </Menu>
        )
    }
}