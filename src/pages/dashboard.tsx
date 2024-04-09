import { Grid, Box } from "grommet"
import React from "react"
import { Navbar } from "../components/navbar.tsx"
import { Dashbody } from "../components/dashbody.tsx"
import '../styles/dash.css'

export const Dashboard: React.FC<{}> = () => {

  return (
    // <div>Hiii</div>
    <Grid
      rows={['99vh']}
      columns={['20vw', '78vw']}
      gap="small"
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
    >
      <Box gridArea="nav" background="brand" ><Navbar /></Box>
      <Box gridArea="main" background="light-2" ><Dashbody /></Box>
    </Grid>
  )

}