import React, { useState } from 'react'
import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useColorMode, useDisclosure } from "@chakra-ui/react";
const Singup = ({setOpenModal}) => {
  const [view , setView] = useState('login')
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
    const { onOpen, onClose } = useDisclosure()

  return (
    <div>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={onOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        {
          view == 'login' ? 
          <ModalContent>
          <ModalHeader>Log in Your Account</ModalHeader>
          <span className='px-4'>Don’t have account?<span onClick={()=>setView('register')} className=' cursor-pointer text-blue-400'> Create Account</span></span>
          <ModalCloseButton onClick={()=>setOpenModal(false)}/>
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Your Email' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Login
            </Button>
            <Button onClick={()=>setOpenModal(false)}>Cancel</Button>
          </ModalFooter>

        </ModalContent>
        : 
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <span className='px-4'>Already have account? <span onClick={()=>setView('login')} className='cursor-pointer text-blue-400'> Login here</span></span>
          <ModalCloseButton onClick={()=>setOpenModal(false)}/>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Your Email' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' />
            </FormControl>

            <Stack mt={2} spacing={5} direction='row'>

              <Checkbox colorScheme='green' >
              Seller
              </Checkbox>
              <Checkbox colorScheme='green' defaultChecked>
              Buyer
              </Checkbox>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Register
            </Button>
            <Button onClick={()=>setOpenModal(false)}>Cancel</Button>
          </ModalFooter>

        </ModalContent>
        }
      </Modal>

    </div>
  )
}

export default Singup