import React from 'react';
import HeroSection from '../organisms/HeroSection';
import Button from '@components/components/UI/atoms/Button/Button';

interface Props {
  dynamicTitle: string;
}

const HomeTemplate = ({ dynamicTitle }: Props) => {
  return (
    <div>
      <h2>{dynamicTitle}</h2>
      <HeroSection />
      <div className="w-full flex">
        <Button variant="contained" color="secondary">
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default HomeTemplate;
