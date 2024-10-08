"use client";

import { FaPlus } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { Analytics } from "@vercel/analytics/next";
import LandHeader from "@/app/widgets/landHeader";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950 text-white">
            <Analytics />
            <LandHeader />
            <main className="flex-grow mt-14">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-20 bg-transparent">
                    <h1 className="text-5xl font-semibold mb-4">Welcome to <span className='text-blue-400 font-bold'>Flash Brain</span></h1>
                    <p className="text-xl mb-8">Flash Your Way to a Sharper Brain</p>
                    <Link href="/register">
                        <button className="text-white px-8 py-4 rounded-md bg-blue-600 hover:bg-blue-700 transition duration-150">
                            Get Started
                        </button>
                    </Link>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="text-center">
                                <FaPlus className="text-6xl mb-4 mx-auto text-blue-500" />
                                <h3 className="text-2xl font-bold mb-2">Create Flashcards</h3>
                                <p>Create flashcards for any topic. It is easy and intuitive to create flashcards.</p>
                            </div>
                            <div className="text-center">
                                <BsStars className="text-6xl mb-4 mx-auto text-blue-500" />
                                <h3 className="text-2xl font-bold mb-2">Generate using AI</h3>
                                <p>Import content from a PDF document, and generate flashcards using AI</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-12 rounded-md">
                                <p className="mb-8 text-3xl font-light">Flash Brain has revolutionized the way I study. It is so easy to create and manage flashcards!</p>
                                <p className="font-bold">- Lian Oliver</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-12 rounded-md">
                                <p className="mb-8 text-3xl font-light">I love the AI feature. It makes it so easy to generate flashcards from a PDF document.</p>
                                <p className="font-bold">- Jaliyah Patel</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-12 rounded-md">
                                <p className="mb-8 text-3xl font-light">I love how I can find flashcards on any topic. It is a game-changer for my learning.</p>
                                <p className="font-bold">- Aaliyah Blevins</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Flash Brain. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}