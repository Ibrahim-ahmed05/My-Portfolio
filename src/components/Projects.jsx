import React from 'react';
import { motion } from 'framer-motion';
import airlineImg from '../assets/ariline.jpg';
import thoughtify from '../assets/thoughifyapp.jpg';
import creditcard from '../assets/credit.jpg';
import fitness from '../assets/fitness2.jpg';
import rainfall from '../assets/rainfall.jpg';
import phone from '../assets/phonedirectory.jpg';

export default function Projects() {
    const projects = [
        {
            title: "Air Travel",
            description: "Built using MySQL, Express.js, Angular, and Node.js to ensure a robust and scalable flight booking system.",
            image: airlineImg,
            link: "https://github.com/Ibrahim-ahmed05/Database-Project-Backend.git"
        },
        {
            title: "Thoughtify",
            description: "Developed using MySql, Express.js, React.js, and Node.js to build a social interaction platform.",
            image: thoughtify,
            link: "https://github.com/Ibrahim-ahmed05/Thoughtify-App.git"
        },
        {
            title: "Credit Card Fraud Detection",
            description: "Devloped a credit card fraud detection system using two machine learning models ie SVM and Decision tree Classifier.",
            image: creditcard,
            link: "https://github.com/Ibrahim-ahmed05/Credit-Card-Fraud_Detection.git"
        },
        {
            title: "Gym and Fitness Website",
            description: "Developed using React.js and Bootstrap to create a responsive and interactive fitness platform.",
            image: fitness,
            link: "https://gym-website-ashen-six.vercel.app/"
        },
        {
            title: "Rainfall Prediction",
            description: "Predicting rainfall using supervised learning algorithms like Logistic Regression, KNN, Naive Bayes, Decision Tree, and SVM.",
            image: rainfall,
            link: "https://github.com/Ibrahim-ahmed05"
        },
        {
            title: "Advanced Phone Directory",
            description: "Implemented using data structures like Stack, Queue, Heap, Trees, and Linked Lists for efficient contact management.",
            image: phone,
            link: "https://github.com/Ibrahim-ahmed05/Advanced-Phone-Directory.git"
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto py-12 sm:py-16 md:py-24 px-4"
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-8 sm:mb-12 text-center md:text-left">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden border border-red-200 dark:border-red-800"
                    >
                        <div className="h-40 sm:h-48 relative">
                            {typeof project.image === 'string' ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="h-full flex items-center justify-center bg-red-100 dark:bg-red-900">
                                    {project.image}
                                </div>
                            )}
                        </div>

                        <div className="p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400 mb-2">{project.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{project.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
} 