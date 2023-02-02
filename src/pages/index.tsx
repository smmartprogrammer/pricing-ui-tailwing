import React from 'react'
import Head from 'next/head'
import Header from './header'
import Pricing from './pricing'
import Feature from './feature'

export default function Index() {
  return (

    <>
    <title>Pricing UI using Tailwind</title>
    {/* <h1>raghunathji</h1> */}
    <Header />
    <Pricing />
    <Feature />
    </>

    )
}
