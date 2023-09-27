import React from 'react'
import { Box } from '@mui/material';
import styles from './css/layout.module.css'


function Index(props) { 
  return (
  <Box className={styles.container} sx={{backgroundImage:props.bgimage,height:props.conheight,gridTemplateColumns:props.gridtemcol,gridTemplateRows:props.gridtemrow,gridTemplateAreas:props.gridtemareas,'@media (max-width: 900px)': {gridTemplateRows:props.mgridTemplateRows,gridTemplateAreas:props.mtemplateareas,gridTemplateColumns:"1fr"}}}>
    <Box className={styles.nav} sx={{display:props.navdisplay,justifyContent:props.navjustify,alignItems:props.navalign}}>{props.nav}</Box>
    <Box className={styles.main} sx={{display:props.maindisplay,justifyContent:props.mainjustify,alignItems:props.mainalign}}>{props.Main}</Box>
    <Box className={styles.sidebar} sx={{display:props.sidedisplay,justifyContent:props.sidejustify,alignItems:props.sidealign}}>{props.Sidebar}</Box>
    <Box className={styles.content1} sx={{display:props.con1display,justifyContent:props.con1justify,alignItems:props.con1align}}>{props.Content1}</Box>
    <Box className={styles.content2} sx={{display:props.con2display,justifyContent:props.con2justify,alignItems:props.con2align}}>{props.Content2}</Box>
    <Box className={styles.content3} sx={{display:props.con3display,justifyContent:props.con3justify,alignItems:props.con3align}}>{props.Content3}</Box>
    <Box className={styles.footer} sx={{display:props.footdisplay,justifyContent:props.footjustify,alignItems:props.footalign}}>{props.footer}</Box>
  </Box>
  )
}

export default Index
