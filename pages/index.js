import React from 'react'
import Layout from './components/layout';


function index() {
  return (
    <div>
      <Layout conheight="100vh" gridtemcol="1fr 1fr 1fr 1fr" gridtemrow="0.2fr 1.5fr 1.2fr 0.8fr" gridtemareas="'nav nav nav nav' 'sidebar main main main' 'sidebar content1 content2 content3' 'sidebar footer footer footer'"
      mgridTemplateRows="0.4fr 0.4fr 2.2fr 1.2fr 1.2fr 1.2fr 1fr" mtemplateareas="'nav' 'sidebar' 'main' 'content1' 'content2' 'content3' 'footer'"  bgimage="url('')" 
         nav={<>Nav</>}
         Sidebar={<>Sidebar</>}
         Main={<>main</>}
         Content1={<>content1</>}
         Content2={<>content2</>}
         Content3={<>content3</>}
         footer={<>Footer</>}
      />
    </div>
  )
}

export default index
