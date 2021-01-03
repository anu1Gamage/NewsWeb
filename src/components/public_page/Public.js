import React from 'react';
import { Button, Tooltip, Input,Row,Col } from 'antd';
import '../public_page/public.css';
import {CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import Navbar from '../Navbar';
import Content from '../content';


export default function Public() {
    return (
        <>
        
        <Navbar />
        <Content /> 
        </>
    )
}

