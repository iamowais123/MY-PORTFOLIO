"use client";
import { motion } from "framer-motion";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className='container mx-auto px-4 pt-32 pb-20' id="about">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <div>
                            Hi , I&apos;m <span className="text-primary">Md Owais</span>
                        </div>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8">Software Engineer, Full Stack Developer crafting modern web experiences</p>
                    <div className="flex gap-4">
                        <Link href={"https://github.com/iamowais123"} target="_blank">
                            <Button variant={"outline"} className="gap-2">
                                <Github className="w-4 h-4" />
                                Github
                            </Button>
                        </Link>
                        <Link href={"https://leetcode.com/u/mdowaisjamal0556"} target="_blank">
                            <Button variant={"outline"} className="gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path d="M640 128 384 384l192 192-192 192 64 64 256-256-192-192 192-192z" />
                                </svg>
                                LeetCode
                            </Button>
                        </Link>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <Image
                        src={"/hero.svg"}
                        alt="Developer Illustration"
                        width={500}
                        height={500}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero