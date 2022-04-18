import React, { useState } from 'react'

const ProductDetail = ({ showCurrentProductDetail, setShowCurrentProductDetail, currentProduct }) => {

    const toggleProductDetail = () => {
        setShowCurrentProductDetail(!showCurrentProductDetail)
    }


    return (
        true && (
            <div className='fixed mr-10 top-0 z-50 flex py-12 bg-indigo-500 rounded-b-3xl shadow-2xl shadow-indigo-500 -translate-y-[88%] hover:translate-y-0 ease-in-out duration-300'>
                <button className='bg-indigo-300 top-0 right-0 rounded-tr-xl rounded-bl-xl py-2 px-4' onClick={toggleProductDetail}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x text-indigo-600" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <img className="object-cover bg-gray-50 rounded-3xl w-1/4 h-60 ml-10 mr-6 shadow-xl shadow-black/20" src="https://www.skinceuticals-latam.com/site/pages/showImageResized.aspx?EncMediaId=NW5LdTVEWU82d0NyWjNvaWlpRldBdz09&ImageFormatAppCode=IMAGEFORMAT_ORIGINAL&v=220224134668" alt="" />
                <div className="w-full mr-10">
                    <div className="flex justify-between text-left">
                        <div className="block mb-6 ">
                            <h3 className='text-xl text-gray-200 font-bold'>{currentProduct[5]}</h3>
                            <span className='text-md text-gray-300'>MARCA</span>
                        </div>
                        <span className='text-3xl text-gray-200 font-bold'>PRECIO</span>
                    </div>

                    <p className='text-lg text-gray-200 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nisi qui repudiandae ipsam iure molestiae eaque. Fuga quae dicta magni unde accusantium, consectetur esse quibusdam consequatur, dolores et, totam odio. fdfads asda ds das da dasd asd a</p>
                    <div className="flex flex-wrap">
                        <div className="mr-2 mt-2 text-sm py-1 px-4 bg-white/30 text-gray-800 rounded-full">Facial</div>
                        <div className="mr-2 mt-2 text-sm py-1 px-4 bg-white/30 text-gray-800 rounded-full">Categoria Larga</div>
                        <div className="mr-2 mt-2 text-sm py-1 px-4 bg-white/30 text-gray-800 rounded-full">Badge 1</div>
                        <div className="mr-2 mt-2 text-sm py-1 px-4 bg-white/30 text-gray-800 rounded-full">Corporal</div>
                        <div className="mr-2 mt-2 text-sm py-1 px-4 bg-white/30 text-gray-800 rounded-full">Categoria super largaaa</div>
                        <div className="mr-2 mt-2 text-sm py-1 px-4 bg-white/30 text-gray-800 rounded-full">No se qué poner</div>
                        <div className="mr-2 mt-2 text-sm py-1 px-4 bg-white/30 text-gray-800 rounded-full">Badge</div>
                    </div>
                </div>
            </div >)
    )
}

export default ProductDetail