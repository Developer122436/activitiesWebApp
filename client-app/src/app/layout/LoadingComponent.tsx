import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent: React.FC<{ inverted?: boolean; content?: string }> = ({
  // inverted is lighter , not dark on background loading
  inverted = true,
  content
}) => {
  return (
    // dimmer is semantic-ui , active is property that will display dimmer if active
    // inverted is property if one of them inverted 
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};

export default LoadingComponent;
