import React, { useState } from 'react';
// import './main.css';
import { Box, Carousel, Image } from 'grommet';
import { Signup } from '../components/signup.tsx';
import { Login } from '../components/login.tsx';


export const LandingPage: React.FC<{}> = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div className="signup">
      <Box
        direction='row'
        height="100vh"
      >
        <Box width="60%" >
          <Carousel controls={false} play={3000} height="100vh" >
            <Image fit="cover" src="https://images.unsplash.com/photo-1668063497279-7ecb0f0ffa8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <Image fit="cover" src="https://images.unsplash.com/photo-1639332793139-32eed37bdc99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <Image fit="cover" src="https://images.unsplash.com/photo-1655742260938-82ab000acc2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
          </Carousel>
        </Box>
        <Box width="40%" height="100vh" pad="xlarge" background="light-3" justify='center'>
          <Box width="80%" fill="horizontal" align='center' >
            {showLogin ? <Login setShowLogin={setShowLogin}/>
              : <Signup setShowLogin={setShowLogin}/>}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
