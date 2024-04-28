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
function Portfolio() {
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
            id:10,
            logo: talwind,
            name: "talwind"
        }
    ]
    return (
        <div
        name="Portfolio"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
                <span className='underline font-semibold'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1  cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' />
                                <div>
                                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                    <p className='px-2 text-grey-700'>These may not suit student's individual learning styles.</p>
                                </div>
                                <div className='px-6 py-4 space-x-3 justify-around'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Portfolio
