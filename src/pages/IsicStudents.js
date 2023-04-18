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
  import {BiLike, BiChat, BiShare, BiBook, BiBrush} from "react-icons/bi";
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
  
    
  } from '@chakra-ui/react'
  import {Link} from 'react-router-dom';
  
  export default function IsicStudents() {
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

  //get students data
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
  });

  const { fname, lname} = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  
    return (
      
      <ChakraProvider>
        <Header/>
        <Stack direction='row' spacing={4}>
  <Button leftIcon={<MdBuild  />} colorScheme='teal' variant='solid'>
    Settings
  </Button>
  <Button rightIcon={<MdSearch  />} colorScheme='teal' variant='outline' width={"20%"} onClick={onOpen}>
    Search
  </Button>




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
            Search a student
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>First Name</FormLabel>
                <Input
                  ref={firstField}
                  id='fname'
                  placeholder='Please enter student first name'
                  name="fname"
                  value={fname}
                  onChange={(e) => onInputChange(e)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor='username'>Last Name</FormLabel>
                <Input
                  ref={firstField}
                  id='lname'
                  placeholder='Please enter student last name'
                  name="lname"
                  value={lname}
                  onChange={(e) => onInputChange(e)}
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
                to={`/one/${fname}/${lname}`}
                >
                    <Button colorScheme='blue'>Submit</Button>
            </Link>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>






</Stack>
        <Heading marginBottom={"3%"} marginTop={"3%"}>FILIERE : ISIC1</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>    
        
 
  {loading ? (
            <Stack>
              <SkeletonCircle />
             
            </Stack>
          ) : data.Isic1 ? (
            data.Isic1.map((item, index) => (
<Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={item}  />

        <Box>
          <Heading size='sm'>{item}</Heading>
          <Text>Filiere, ISIC1</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        // icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    {/* <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.
    </Text> */}
  </CardBody>
  <Image
    objectFit='cover'
    src={`http://ensaj.fertat.com/inscription/photos/${item}.jpg?673`}alt='Chakra UI'
    box-shadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    height={"370px"}
    width = {"100%"}
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Link
                to={`/img2img/${item}`}
                >
                    <Button flex='1' variant='ghost' leftIcon={<BiBrush />}>
                        Ai
                      </Button>
            </Link>
  </CardFooter>
</Card>
           ))
          ) : null}
  
</Grid>



<Heading marginBottom={"3%"} marginTop={"3%"}>FILIERE : ISIC2</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>    
        
 
  {loading ? (
            <Stack>
              <SkeletonCircle />
             
            </Stack>
          ) : data.Isic2 ? (
            data.Isic2.map((item, index) => (
<Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={item}  />

        <Box>
          <Heading size='sm'>{item}</Heading>
          <Text>Filiere, ISIC2</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        // icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    {/* <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.
    </Text> */}
  </CardBody>
  <Image
    objectFit='cover'
    src={`http://ensaj.fertat.com/inscription/photos/${item}.jpg?673`}alt='Chakra UI'
    box-shadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    height={"370px"}
    width = {"100%"}
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Link
                to={`/img2img/${item}`}
                >
                    <Button flex='1' variant='ghost' leftIcon={<BiBrush />}>
                        Ai
                      </Button>
            </Link>
  </CardFooter>
</Card>
           ))
          ) : null}
  
</Grid>


<Heading marginBottom={"3%"} marginTop={"3%"}>FILIERE : ISIC3</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>    
        
 
  {loading ? (
            <Stack>
              <SkeletonCircle />
             
            </Stack>
          ) : data.Isic3 ? (
            data.Isic3.map((item, index) => (
<Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={item}  />

        <Box>
          <Heading size='sm'>{item}</Heading>
          <Text>Filiere, ISIC3</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        // icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    {/* <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.
    </Text> */}
  </CardBody>
  <Image
    objectFit='cover'
    src={`http://ensaj.fertat.com/inscription/photos/${item}.jpg?673`}alt='Chakra UI'
    box-shadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    height={"370px"}
    width = {"100%"}
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Link
                to={`/img2img/${item}`}
                >
                    <Button flex='1' variant='ghost' leftIcon={<BiBrush />}>
                        Ai
                      </Button>
            </Link>
  </CardFooter>
</Card>
           ))
          ) : null}
  
</Grid>

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