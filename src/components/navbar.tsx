import { Sidebar, Avatar, Button, Nav } from 'grommet'
import * as Icons from 'grommet-icons'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <Sidebar round="small"
        header={
          <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
        }
        // footer={
        //   <Button icon={<Icons.Help />} hoverIndicator >Support</Button>
        // }
      >
        <Nav gap="large">
          <Button icon={<Icons.Projects />} hoverIndicator color="white" label={"Product"} />
          <Button icon={<Icons.Clock />} hoverIndicator color="white" label={"Stock Report"} />
          <Button icon={<Icons.Projects />} hoverIndicator color="white" label={"Generate Bill"} />
          <Button icon={<Icons.Clock />} hoverIndicator color="white" label={"View Report"} />
        </Nav>
      </Sidebar>
    </div>
  )
}
