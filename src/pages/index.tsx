import HomeTemplate from '@components/modules/home/components/UI/templates/HomeTemplate';
import { useHome } from '@components/modules/home/hooks/useHome';
import React from 'react';

const HomePage = () => {
  const { dynamicTitle } = useHome();

  return (
    <div>
      <HomeTemplate dynamicTitle={dynamicTitle} />
    </div>
  );
};

export default HomePage;
