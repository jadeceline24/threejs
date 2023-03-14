import {OrbitControls, ScrollControls} from '@react-three/drei';
import React from 'react';
import {Office} from './Office';
import Overlay from './Overlay';

const Home = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Office />
        <Overlay />
      </ScrollControls>
    </>
  );
};

export default Home;
