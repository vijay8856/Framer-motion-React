// src/components/AnimatedBox.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedBox = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(-140px)' },
  });

  return <animated.div style={props} className="box">Hello, React Spring!</animated.div>;
};

export default AnimatedBox;
