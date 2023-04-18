import {
    ChakraProvider,
    Heading,
    Container,
    Text,
    Input,
    Button,
    Wrap,
    Stack, 
    Image,
    Link,
    SkeletonCircle,
    SkeletonText,
    Collapse,
    ButtonGroup,
    Divider,
    IconButton,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState } from "react";
  import * as React from 'react'
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
  import {Logo} from '../components/Logo';
  import Header from '../components/Navbar';
  import Services from "../components/Service";


  
  export default function Rec() {
    const [recommendations, updateRecommendations] = useState();
    const [prompt, updatePrompt] = useState();
    const [loading, updateLoading] = useState();
  
    const generate = async (prompt) => {
      updateLoading(true);
      const result = await axios.get(`http://127.0.0.1:5050/find/${prompt}`);
      updateRecommendations(result.data);
      updateLoading(false);
    };

    const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  
    return (
      
      <ChakraProvider>
        <Header/>
        <Services/>
        <Container >
          <Heading marginLeft={"25%"} marginBottom={"3%"}>Try it now!!</Heading>
          
          <Collapse startingHeight={50} marginBottom={"10px"} in={show}>
          This react application leverages the model trained by Stability AI and
            Runway ML to generate images using the Stable Diffusion Deep Learning
            model. The model can be found via github here{" "}
            <Link color={"#E548FE"} chref={"https://github.com/CompVis/stable-diffusion"}>
              Github Repo
            </Link>
      </Collapse>
      <Button size='sm' marginBottom={"10px"} onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
  
          <Wrap marginBottom={"10px"}>
            <Input
            placeholder="Write your prompt here "
              value={prompt}
              onChange={(e) => updatePrompt(e.target.value)}
              width={"350px"}
            ></Input>
            <Button onClick={(e) => generate(prompt)} colorScheme={"blue"}>
              Generate
            </Button>
          </Wrap>
  
          {loading ? (
            <Stack>
              <SkeletonCircle />
              <SkeletonText />
            </Stack>
          ) : recommendations ? (
            // <Image src={`data:image/png;base64,${image}`} boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" />
            <Text color="muted">{`${recommendations[0].title}`} -  
             - {`${recommendations[1].title}`} - 
             - {`${recommendations[2].title}`}</Text>
          ) : null}
        </Container>

        





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
  
//export default App;