
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Stack, 
  SkeletonCircle,
  SkeletonText,
  
} from "@chakra-ui/react";

import * as React from 'react'



export default function Students() {

  const [data, setData] = useState([]);
  const [loading, updateLoading] = useState();


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

  // console.log(data.Iite1);

  
  return (
    <>
    
    <div>
    

{loading ? (
            <Stack>
              <SkeletonCircle />
             
            </Stack>
          ) : data.Isic1 ? (
            data.Isic1.map((item, index) => (
              <div >
                 
               {/* <p>{item}</p>  */}
                <img src={`http://ensaj.fertat.com/inscription/photos/${item}.jpg?673`}/> 
              </div> 
           ))
          ) : null}

{loading ? (
            <Stack>
              <SkeletonCircle />
             
            </Stack>
          ) : data.Iite2 ? (
            data.Iite2.map((item, index) => (
              <div >
                 
               <p>{item}</p> 
                <img src={`http://ensaj.fertat.com/inscription/photos/${item}.jpg?673`}/> 
              </div> 
           ))
          ) : null}

 </div>


    
</>
  );
}
