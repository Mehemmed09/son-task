// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Products from '../../components/CardSection/Cardsection'
import SectionCarousel from '../../components/SectionCarosuel/SectionCarousel'
import Sectionparallax from '../../components/SectionParallax/Sectionparallax'
import SectionSays from '../../components/SectionSays/SectionSays'
const Home = () => {
  return (
   <>
   <Helmet>
    <title>Home</title>
</Helmet>
<SectionCarousel/>
<Products/>
<Sectionparallax/>
<SectionSays/>
   </>
  )
}

export default Home