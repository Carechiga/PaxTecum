import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import AuthService from "./utils/auth";

//import components and pages for the app to render
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Insurance from './pages/Insurance';
import Calendar from './pages/Calendar';
import EditProfile from './pages/editProfile';
import Header from './components/Header'
import Footer from './components/Footer';

import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

// Create an HTTP link for Apollo Client//This endpoint is set up only for development environment currently and will need to be configured for the production environment when we get there
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});


// Create an auth link to set the authorization header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Check if the user is logged in
const loggedIn = AuthService.loggedIn();

// Render the App component
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <StoreProvider>
            <Header />
          <Routes>              
            <Route 
              path="/login" 
              element={<Login/>} 
            />
            <Route
              path="/"
              element= {                 
                loggedIn ? <Profile /> : <Navigate replace to ={"/login"}/>
              }
            />
            <Route 
              path="/signup" 
              element={<SignUp />} 
            />
            <Route 
              path="/insurance" 
              element={<Insurance />} 
            />
             <Route 
              path="/calendar" 
              element={<Calendar />} 
            />
             <Route 
              path="/editprofile" 
              element={<EditProfile />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
          <Footer />
          </StoreProvider>
        </div>
      </Router>    
    </ApolloProvider>
  );
}

export default App;