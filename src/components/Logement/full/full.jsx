import React from 'react';
import CustomSlide from '../../Slide/Slide';
import CustomTag from '../../Tag/Tag';
import CustomStar from '../../Star/Star';
import CustomDropdown from '../../Dropdown/Dropdown';
import '../full/full.css'




function CustomFull({ locationDatas, id }) {
    console.log(locationDatas)
    const customLogement = locationDatas.find((location) => location.id === id);
  
 
  
    return (
      <main>
        <CustomSlide dataLocation={customLogement} />
        <section className='full-content'>
          <div className='content-left'>
            <h1>{customLogement.title}</h1>
            <p>{customLogement.location}</p>
            <CustomTag dataLocation={customLogement.tags} />
          </div>
          <div className='content-right'>
            <div className='host'>
              <span className="host-name">{customLogement.host.name}</span>
              <img src={customLogement.host.picture} alt={customLogement.host.name} />
            </div>
            <div className='stars-align'>
            <CustomStar rating={customLogement.rating} />

            </div>
          </div>
        </section>
        <section className='description-equipements'>
          <CustomDropdown titre="Description" description={customLogement.description} className="description-dropdown-log" />
          <CustomDropdown titre="Equipements" description={customLogement.equipments.join('\n')} className="equipements-dropdown-log" />
        </section>
      </main>
    );
  }
export default CustomFull;