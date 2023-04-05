import React from 'react'
import { Button, Checkbox, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useColorMode, useDisclosure } from "@chakra-ui/react";
const Singup = ({setOpenModal}) => {
  
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
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
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

              <Checkbox colorScheme='green' defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox colorScheme='green' defaultChecked>
                Checkbox
              </Checkbox>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={()=>setOpenModal(false)}>Cancel</Button>
          </ModalFooter>



        </ModalContent>
      </Modal>

    </div>
  )
}

export default Singup