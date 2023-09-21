import React from 'react'
import Layout from './components/layout';
import { Box } from '@mui/material';

function index() {
  return (
    <div>
      <Layout
         nav={<Box>Navbar</Box>}
         Sidebar={<Box>Sidebar</Box>}
         Main={<Box>Main</Box>}
         Content1={<Box>Content1</Box>}
         Content2={<Box>Content2</Box>}
         Content3={<Box>Content3</Box>}
         footer={<Box>Footer</Box>}
      />
    </div>
  )
}

export default index