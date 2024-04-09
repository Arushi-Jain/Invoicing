import { Box, Heading, FormField, TextInput, Button } from "grommet"
import React from "react"
import { Google } from 'grommet-icons'

export const Signup: React.FC<{ setShowLogin }> = ({ setShowLogin }) => {

  return(
    <>
      <Box as="span" fill="horizontal">
        <Heading
          responsive={true}
          textAlign="start"
          size="xsmall"
          margin="none"
          a11yTitle="Create an account"
        >Create an account</Heading>
        <Box
          style={{ alignSelf: "start", fontSize: "14px" }}
          margin={{
            vertical: "10px"
          }}
          a11yTitle="Let's get started with your 30 days free trial"
        >Let's get started with your 30 days free trial</Box>
      </Box>
      <Box margin={{
        vertical: "2em"
      }}
        fill="horizontal"
      >
        <FormField
          margin={{
            vertical: ".5em"
          }}
        >
          <TextInput placeholder="Name" size="14px" a11yTitle="Enter your name" />
        </FormField>
        <FormField
          margin={{
            vertical: ".5em"
          }}
        >
          <TextInput placeholder="Email" type="email" size="14px" a11yTitle="Enter your email address" />
        </FormField>
        <FormField
          margin={{
            top: ".5em",
            bottom: "2em"
          }}

        >
          <TextInput placeholder="Password" type="password" size="14px" a11yTitle="Enter your password" />
        </FormField>
        <Button
          primary
          label="Create account"
          margin={{
            vertical: ".5em",
          }}
          color="#101727"
          style={{ padding: ".5em", borderRadius: "8px", fontSize: "14px" }}
          a11yTitle="Create account button"
        />
        <Button
          icon={<Google />}
          label="Sign up with Google"
          a11yTitle="Sign up with Google button"
          style={{ padding: ".5em", borderRadius: "8px", fontSize: "14px", borderColor: "#AEAFB860" }}
          margin={{
            bottom: "1.5em",
          }}
        />
        <Box>
          <Box style={{ fontSize: '14px', alignSelf: "center" }} color="#AEAFB8" >
            Already have an account?
            <Button
              // href="/"
              style={{ fontWeight: "900", color: "#01010180" }}
              a11yTitle="Log in if you already have an account"
            onClick={() =>setShowLogin(true)}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Box>
    </>)
}