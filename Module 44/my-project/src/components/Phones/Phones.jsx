import axios from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(response => response.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            });
            console.log(phoneWithFakeData);
            setPhones(phoneWithFakeData);
        });
    }, []);
    return (
        <>
            <h1 className="font-bold text-5xl text-center my-12">Phones</h1>
            <h1 className="text-5xl text-center my-12 font-semibold">Total Phone: {phones.length}</h1>
            <div className="flex items-center justify-center">
                <BarChart width={450} height={400} data={phones}>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
          </div>  
        </>
    );
};

export default Phones;