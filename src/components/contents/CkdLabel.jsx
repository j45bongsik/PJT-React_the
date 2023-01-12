import React, { useEffect, useState } from 'react';
import { CheckStyle } from '../../styles/Form';
// import myData from '../../data.json'
import styled from 'styled-components';



const CkdLabel = ({id, label, checked, type, name, onChange}) => {

    return (

        <CheckStyle.checkArea>
            <CheckStyle.checkInput type={type ? type : 'checkbox'} id={id} name={name} checked={checked} onChange={onChange}></CheckStyle.checkInput>
            <CheckStyle.checkLabel htmlFor={id} className={require ? 'req' : undefined}>{label}</CheckStyle.checkLabel>
        </CheckStyle.checkArea>
                

        

    )
};

export default CkdLabel;