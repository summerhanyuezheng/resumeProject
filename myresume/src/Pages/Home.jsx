import React from 'react'
import NavBar from '../Components/NavBar'
import HomeCom from '../Components/HomeCom'
import FirstCom from '../Components/FirstCom'
import WorkCom from '../Components/WorkCom'
import SkillsCom from '../Components/SkillsCom'
import HomeComGrid from '../Components/HomeComGrid'

export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <FirstCom></FirstCom>
    <HomeComGrid></HomeComGrid>
   
    <WorkCom></WorkCom>
    <SkillsCom></SkillsCom>
    
   
    </>
  )
}
