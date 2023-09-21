import React from 'react'
import { Box, Paper } from '@mui/material';
import styles from './css/layout.module.css'


function Index(props) { 
  return (
  <Box className={styles.container}>
    <Box className={styles.nav}>{props.nav}</Box>
    <Box className={styles.main}>{props.Main}</Box>
    <Box className={styles.sidebar}>{props.Sidebar}</Box>
    <Box className={styles.content1}>{props.Content1}</Box>
    <Box className={styles.content2}>{props.Content2}</Box>
    <Box className={styles.content3}>{props.Content3}</Box>
    <Box className={styles.footer}>{props.footer}</Box>
  </Box>
  )
}

export default Index