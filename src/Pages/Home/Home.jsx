import React from 'react';
import CustomBanner from '../../components/banner/banner';
import image1 from '../../assets/banner.png';
import CustomCard from '../../components/Logement/card/card';  
import locationDatas from '../../Data/logements.json';

function Home() {
  return (
    <main>
      <CustomBanner
        imageSrc={image1}
        showText={true}
        className="image-height-1"
      />
      <section className='logements'>
        {locationDatas.map((location) => (
          <CustomCard key={location.id} dataLocation={location} />
        ))}
      </section>
    </main>
  );
}

export default Home;
