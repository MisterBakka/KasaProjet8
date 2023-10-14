import React from 'react';
import locationDatas from '../../Data/logements.json';
import CustomFull from '../../components/Logement/full/full';
import { useParams } from 'react-router-dom';


function CustomLocation() {
    const { id } = useParams();

    return (
        <CustomFull locationDatas={locationDatas} id={id} />
    );
}

export default CustomLocation;
