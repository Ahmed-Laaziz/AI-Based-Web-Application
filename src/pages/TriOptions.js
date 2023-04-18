// import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'


// export default function Options(){



//     return (




//     )
// }


import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  Button,
  Card,
  Stack, 
  Image,
  Flex,
  Avatar,
  Box,
  CardBody,
  ButtonGroup,
  Divider,
  IconButton,
  CardFooter,
  CardHeader,
  SkeletonCircle,
  Center
} from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import {BiLike, BiChat, BiShare, BiBook} from "react-icons/bi";
import axios from "axios";
import { useState , useEffect} from "react";
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {Logo} from '../components/Logo';
import Header from '../components/Navbar';
import { MdBuild  , MdSearch  } from "react-icons/md"
import {
  
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,

  
  FormLabel,

  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,

  Textarea
} from '@chakra-ui/react'
import {Link} from 'react-router-dom';

export default function Options() {
  // const [image, updateImage] = useState();
  // const [prompt, updatePrompt] = useState();
  // const [loading, updateLoading] = useState();

  const [data, setData] = useState([]);
  const [loading, updateLoading] = useState();

  //Drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const fetchData = async () => {
      try {
        updateLoading(true);
        const response = await axios.get('http://127.0.0.1:5000/names');
        setData(response.data);
        updateLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, []);

  const [show, setShow] = useState(false)

const handleToggle = () => setShow(!show)

  return (
    
    <ChakraProvider>
      <Header/>
      {/* <Stack direction='row' spacing={4}> */}
{/* <Button leftIcon={<MdBuild  />} colorScheme='teal' variant='solid'>
  Settings
</Button>
<Button rightIcon={<MdSearch  />} colorScheme='teal' variant='outline' width={"20%"} onClick={onOpen}>
  Search
</Button> */}




<Drawer
      isOpen={isOpen}
      placement='right'
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>
          Create a new account
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing='24px'>
            <Box>
              <FormLabel htmlFor='username'>First Name</FormLabel>
              <Input
                ref={firstField}
                id='fname'
                placeholder='Please enter student first name'
              />
            </Box>

            <Box>
              <FormLabel htmlFor='username'>Last Name</FormLabel>
              <Input
                ref={firstField}
                id='lname'
                placeholder='Please enter student last name'
              />
            </Box>

            {/* <Box>
              <FormLabel htmlFor='url'>Url</FormLabel>
              <InputGroup>
                <InputLeftAddon>http://</InputLeftAddon>
                <Input
                  type='url'
                  id='url'
                  placeholder='Please enter domain'
                />
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </Box> */}

            {/* <Box>
              <FormLabel htmlFor='owner'>Select Owner</FormLabel>
              <Select id='owner' defaultValue='segun'>
                <option value='segun'>Segun Adebayo</option>
                <option value='kola'>Kola Tioluwani</option>
              </Select>
            </Box> */}

            {/* <Box>
              <FormLabel htmlFor='desc'>Description</FormLabel>
              <Textarea id='desc' />
            </Box> */}
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth='1px'>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Link
              to={{
                  pathname: "/one",
                  state: data // your data array of objects
              }}
              >
                  <Button colorScheme='blue'>Submit</Button>
          </Link>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>





    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  marginBottom={"2%"}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://yt3.googleusercontent.com/ytc/AMLnZu_BCh6tUZu7Z_3GZtQmfz70AxHJxIxMVpDalRzx=s900-c-k-c0x00ffffff-no-rj'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>TRI</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      




      <Link
                to={{
                    pathname: "/all",
                    // state: data // your data array of objects
                }}
                >
                    <Button variant='solid' colorScheme='blue'>
                      Show Students
                    </Button>
            </Link>
            
    </CardFooter>
  </Stack>
</Card>

<Center>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='data:image/jpeg;base64,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Z1zn8t0chzAnuJI7sqj7OWly8HgZ6Evx3aWkozGKudsXSZsmYHxsmXNawPDM31rp0G3WHTyMhgq2PkebMaA67ja/NvVdctsNnqaqjL6mESGGOUxkkjKXNBJsDrqxvqVfbisBppaY1ckQM8VS5rJLkFo6GE20Nj5b+I5raMYdm5POV6dRl5LNwnaGmqZJoqeYPfAcsrQHDIczm2NwAdWu4dS9dVNuf+Ucb+u/++pVsrWpHTLHp9EZQREWhkKsMf2KrsQria2ZooYpc0UbQM72kNuNBpfybkk2vorPRbQm4PKMNZKy2u2QrmYg3E8K6MylobJFIbB1mZOZAILQ0WuNWgrs7CbIVUVTUYjiLmGpmBaGR6tYDlvrwv4rQAOAB1N1YiLd1ZadPt548BpRVO6zdz4MDNiNMPCGPHQkvD2tblb4wDSW5s19Tqu7tzslWOrYcSw0s6eMBro5DZrgMwBF7A3a4tIJHKxVkosdtPXryNKxgrfYrZGs8NkxPFCzp3Nysjj1awWDSb8B4osACeJN14Dt3dW+nxQSRBsr6jwikIe0lxBkuLg+Ldjra21KudFntp5z6fIxpRANp9n66owYUry2aqtDnIIYHFj2k3c42JAHHmQuWL7O1MmBMoWRjpxBTxluYAZmZMwzcORU9Raqo+Xk8mcFe7scKxKmzQ1sELImRsbE6PJncQf23NJLtOZUg2+wyWpw+pggZmkkaA1pIbchzTxOg4KRIsObctXLIxywRzYLC5KagpoJmBskbCHgEHXM48W6Hio9vK2QqcQnomteBTNc7pbeWwkf8gB0doMvYXdXCxEWYzcZa1uGk1gpuv3SS081JLhs7y9suaR85baMCzg8BgBcNCC3ncajUr1toNjK3EK5rqt0LKSGS8RY0dNIzxSWEjgLi2p7bKzkW/bz36+PUxpRVG32ymIy4lFW0MEUgjhawdKWZS4GS4LHkXFnDiu9tRgeK1lLS0obTMa+IeFlwHwcgIt0WW9ufD1hWSiwqr/LyXLYzgrfaXdv0mG01JTSfC0vjRufoHuN+kvbybk3HG1gvMh2RxWvqaWTFzEyKlN2tjN3Sm7TrYkC5a256hoNVbaIq0kvj89xgrbFNjJanFqmaaL/AKWalMOfM3MHlrLENvcEEXBtxC8qDYvEhgtVQPLZHmVng8eYAiNkzHOJe42AIa5wbyv6BbyIq0ljyx8jGlFS7RbG4hU02EUYyxxwtAndfMYpWsIDsoID2gBwFjxeuWGbDV9LilNUsqTUNc14qZpBkOQZW5CLkuJGUjtZqrYRO2ljHLHPp4jSjqV8RdFK1o1cx4A6yWkBQ7dBs7U0NHJDVxhj3TueAHNd4pihaDdpI4tdp2KeIo02ouJsV7u62aqqWsxSaojDWVEuaIhzXZm9LO65DTduj28etWEiLMpOTyzCWAiItTIREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//9k='
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>IITE</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
    <Link
                to={{
                    pathname: "/iite",
                    // state: data // your data array of objects
                }}
                >
                    <Button variant='solid' colorScheme='blue'>
                      Show Students
                    </Button>
            </Link>
    </CardFooter>
  </Stack>
</Card>
</Center>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  marginBottom={"2%"}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://static.wixstatic.com/media/17abb8_bb361b0a6fcb4151a0111e21ed551d69~mv2.jpg/v1/fill/w_400,h_400,al_c/17abb8_bb361b0a6fcb4151a0111e21ed551d69~mv2.jpg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>ISIC</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
    <Link
                to={{
                    pathname: "/isic",
                    // state: data // your data array of objects
                }}
                >
                    <Button variant='solid' colorScheme='blue'>
                      Show Students
                    </Button>
            </Link>
    </CardFooter>
  </Stack>
</Card>









      <Container as="footer" role="contentinfo" marginBlockEnd={"0px"}  width={"200%"}  marginTop={"3%"} marginBottom={"0%"} marginLeft={"2%"}>
  <Stack
    spacing="8"
    direction={{
      base: 'column',
      md: 'row',
    }}
    justify="space-between"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack 
      spacing={{
        base: '6',
        md: '8',
      }}
      align="start"
    >
      <Logo />
      <Text color="muted">Create beautiful websites remarkably fast.</Text>
    </Stack>
    <Stack
      direction={{
        base: 'column-reverse',
        md: 'column',
        lg: 'row',
      }}
      spacing={{
        base: '12',
        md: '8',
      }}
    >
      <Stack direction="row" spacing="8">
        <Stack spacing="4" minW="36" flex="1">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Product
          </Text>
          <Stack spacing="3" shouldWrapChildren>
            <Button variant="link">How it works</Button>
            <Button variant="link">Pricing</Button>
            <Button variant="link">Use Cases</Button>
          </Stack>
        </Stack>
        <Stack spacing="4" minW="36" flex="1">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Legal
          </Text>
          <Stack spacing="3" shouldWrapChildren>
            <Button variant="link">Privacy</Button>
            <Button variant="link">Terms</Button>
            <Button variant="link">License</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing="4">
        <Text fontSize="sm" fontWeight="semibold" color="subtle">
          Stay up to date
        </Text>
        <Stack
          spacing="4"
          direction={{
            base: 'column',
            sm: 'row',
          }}
          maxW={{
            lg: '360px',
          }}
        >
          <Input placeholder="Enter your email" type="email" required width={"200px"}/>
          <Button variant="primary" type="submit" flexShrink={0}>
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
  <Divider />
  <Stack
    pt="8"
    pb="12"
    justify="space-between"
    direction={{
      base: 'column-reverse',
      md: 'row',
    }}
    align="center"
  >
    <Text fontSize="sm" color="subtle">
      &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
    </Text>
    <ButtonGroup variant="ghost">
      <IconButton
        as="a"
        href="#"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="1.25rem" />}
      />
      <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
      <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
    </ButtonGroup>
  </Stack>
</Container>
    </ChakraProvider>
  );
};

//   export default App;