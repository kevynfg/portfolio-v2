'use client'

import Image from "next/image";
import { myPicture, name, about } from '../lib/info'
import { motion } from 'framer-motion'
import * as Icon from 'phosphor-react';

export default function Home() {
  return (
    <section>
      <motion.h1 
        className="text-3xl font-serif font-bold mb-7"
        initial={{y: 0, opacity: 0}} 
        animate={{y: 0, opacity: 1, width: 250}}
        transition={{type: 'spring', stiffness: 90, damping: 30}}>
          Kevyn Gonçalves
      </motion.h1>
      <div className="flex flex-col">
        <div className="flex gap-4">
          <motion.div 
            initial={{y: 0, opacity: 0}} 
            animate={{y: 0, opacity: 1, width: 150}}
            transition={{type: 'spring', stiffness: 90, damping: 30}}>
            <Image 
              className="rounded-full grayscale"
              src={myPicture}
              width={150}
              alt={name}
              placeholder="blur"
              priority
            />
          </motion.div>
          <motion.div className="my-4 flex flex-col gap-2 font-serif" 
            initial={{y: 0, opacity: 0}} 
            animate={{y: 0, opacity: 1}}
            transition={{type: 'spring', stiffness: 90, damping: 30}}>
              
              <a href="https://github.com/kevynfg" target="_blank" className="flex flex-row items-center gap-2">
                <Icon.GithubLogo 
                  size={26}
                  weight="regular"
                /> Github
              </a>

              <a href="https://www.linkedin.com/in/kevynfaria/" target="_blank" className="flex flex-row items-center gap-2">
                <Icon.LinkedinLogo 
                  size={26}
                  weight="regular"
                /> Linkedin
              </a>

          </motion.div>
        </div>
        <motion.div className="my-4" 
          initial={{y: 0, opacity: 0}} 
          animate={{y: 0, opacity: 1}}
          transition={{type: 'spring', stiffness: 90, damping: 30}}>
          {about()}
        </motion.div>
      </div>
    </section>
  )
}
