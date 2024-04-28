import React from 'react'
import css from "../../public/css.jpg"
import express from "../../public/express.png"
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import mongodb from "../../public/mongodb.jpg"
import node from "../../public/node.png"
import oracle from "../../public/oracle.png"
import python from "../../public/python.webp"
import reactjs from "../../public/reactjs.png"
import talwind from "../../public/talwindcss.jpg"
function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: css,
            name: "css"
        },
        {
            id: 3,
            logo: html,
            name: "html"
        },
        {
            id: 4,
            logo: reactjs,
            name: "reactjs"
        },
        {
            id: 5,
            logo: python,
            name: "python"
        },
        {
            id: 6,
            logo: express,
            name: "express"
        },
        {
            id: 7,
            logo: javascript,
            name: "javascript"
        },
        {
            id: 8,
            logo: node,
            name: "node"
        },
        {
            id: 9,
            logo: oracle,
            name: "oracle"
        },
        {
            id: 10,
            logo: talwind,
            name: "talwind"
        }
    ]
    return (
        <div
        name="Experience"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <p className=' font-semibold'>I've more than 1 year of experience in below technologies</p>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1  cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src={logo} className='w-[120px]  rounded-full' />
                                <div>
                                    <div>{name}</div>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Experience
