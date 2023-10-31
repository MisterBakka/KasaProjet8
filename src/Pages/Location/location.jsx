import React from 'react';
import locationDatas from '../../Data/logements.json';
import CustomFull from '../../components/Logement/full/full'; 
import CustomError from '../../Pages/Error/error'; 
import { useParams } from 'react-router-dom';

function CustomLocation() {
    const { id } = useParams();

    const dataLocation = locationDatas.find((location) => location.id === id);
    if (!dataLocation) {
        return (<CustomError />); 
    }

    return (
        <CustomFull locationDatas={locationDatas} id={id} /> 
    );
}

export default CustomLocation;
