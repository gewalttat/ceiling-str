import React from 'react';
import { Typography } from '@mui/material';
import { Map } from './Map/Map';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ceiling_logo from '../../../images/ceiling_logo.png';
import './Contacts.scss'

const Contacts = () => {
  return (
    <>
    <Typography mt={5} color="white">Мы находимся по адресу:</Typography>
    <Typography fontWeight={700} color="white">город Стерлитамак, улица 23 мая, 34</Typography>
    <Typography mt={5} color="white">Запись по телефону</Typography>
    <Typography fontWeight={700} color="white">+7-986-966-89-83</Typography>
    <Map />
    <FloatingWhatsApp 
       phoneNumber='79869668983' 
       accountName='Менеджер Силинг' 
       chatMessage='Добрый день! Для записи или консультации напишите здесь или позвоните мне по номеру на сайте' 
       statusMessage='Обычно отвечает в течении часа'
       avatar={ceiling_logo}
      />
    </>
  )
}

export default Contacts