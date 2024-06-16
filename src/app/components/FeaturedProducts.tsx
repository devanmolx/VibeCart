import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductList from './ProductList'

const FeaturedProductsList = [
    {
        id: 1,
        name: "Headphone",
        description: "Experience crystal-clear sound with these noise-cancelling headphones. Enjoy deep bass, comfortable fit, and long battery life for uninterrupted listening.",
        price: 1000,
        category: "electronics",
        images: [
            "https://m.media-amazon.com/images/I/5119MA1IHML._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61i8VtIAFTL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Mv39sbX+L._SL1500_.jpg"
        ]
    },
    {
        id: 2,
        name: "Smartphone",
        description: "Stay connected with this latest smartphone. Featuring a high-resolution display, powerful processor, and an advanced camera system for stunning photos.",
        price: 15000,
        category: "electronics",
        images: [
            "https://m.media-amazon.com/images/I/51Evhl1pUdL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/61kOf72-vaL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81V6-u0IAxL._SL1500_.jpg"
        ]
    },
    {
        id: 22,
        name: "spring Sneakers",
        description: "Comfortable and stylish sneakers, perfect for casual wear and outdoor activities.",
        price: 1800,
        category: "spring",
        images: [
            'https://m.media-amazon.com/images/I/61VzAAvV6RL._SY695_.jpg',    
            'https://m.media-amazon.com/images/I/61cHczckDwL._SY695_.jpg',    
            'https://m.media-amazon.com/images/I/61FznPO5IcL._SY695_.jpg',    
            'https://m.media-amazon.com/images/I/617VAxDx6VL._SY695_.jpg',    
            'https://m.media-amazon.com/images/I/616oWgyrDcL._SY695_.jpg',    
        ]
    },
    {
        id: 17,
        name: "Light Jacket",
        description: "A versatile light jacket perfect for spring weather. Features a comfortable fit and stylish design.",
        price: 2500,
        category: "spring",
        images: [
            'https://m.media-amazon.com/images/I/61ai5LJMmjL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61OkR65wXvL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61mNoD5CGML._SY741_.jpg',
            'https://m.media-amazon.com/images/I/61HRZIpsWRL._SY741_.jpg',
        ]
    },
    {
        id: 27,
        name: "Knit Sweater",
        description: "Keep cozy in this soft knit sweater, perfect for chilly winter days. Features a classic cable-knit design.",
        price: 2800,
        category: "winter",
        images: [
            'https://m.media-amazon.com/images/I/71zlr1mWghL._SX679_.jpg',
            'https://m.media-amazon.com/images/I/71y02evfubL._SX679_.jpg',
            "https://m.media-amazon.com/images/I/71I6uuXfr-L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71Mps-x7XCL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/91F9-HdxQJL._SX679_.jpg",
        ]
    },
    {
        id: 29,
        name: "Beanie Cap",
        description: "Add a stylish touch to your winter outfit with this cozy beanie Cap. Features a soft knit and warm lining.",
        price: 1200,
        category: "winter",
        images: [
            'https://m.media-amazon.com/images/I/51p3el5Dq7L.jpg',
            'https://m.media-amazon.com/images/I/51lcDITvkzL.jpg',
            'https://m.media-amazon.com/images/I/51TJ6POembL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/515P-+BAVdL._SX679_.jpg',
        ]
    },
    {
        id: 9,
        name: "summer Dress",
        description: "Stay cool and stylish with this light and airy summer dress. Perfect for beach days and casual outings.",
        price: 2000,
        category: "summer",
        images: [
            'https://m.media-amazon.com/images/I/61Ihgz8JotL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/81A35fOhRnL._SY741_.jpg',
            'https://m.media-amazon.com/images/I/71YxuU+NoTL._SY741_.jpg',
            "https://m.media-amazon.com/images/I/71Vjy8YHWJL._SY741_.jpg"
        ]
    },
    {
        id: 14,
        name: "Tank Top",
        description: "Lightweight and breathable tank top, ideal for hot summer days. Features a relaxed fit and soft fabric.",
        price: 600,
        category: "summer",
        images: [
            'https://m.media-amazon.com/images/I/61ec378mUFS._SY741_.jpg',
            "https://m.media-amazon.com/images/I/51CFmT4bHwS._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51iYV7Iq72S._SY741_.jpg",
            "https://m.media-amazon.com/images/I/51xYMIC5KOS._SY741_.jpg"
        ]
    },
]

const FeaturedProducts = () => {
    return (
        <div className=' w-full flex flex-col md:flex-row justify-center flex-wrap items-center gap-8'>
            {
                FeaturedProductsList.map(item => (
                    <ProductList key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default FeaturedProducts