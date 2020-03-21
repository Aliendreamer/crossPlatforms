import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import ColorAdjuster from "../components/ColorAdjuster";
import {randomRgb} from '../common/helpers';

const COLOR_INCREMENT= 10;
const COLOR_DECREMENT= 5;
const SquareScreen =()=>{

   const [color,setColor]= useState("");
   const initialValues = destructRgbString(randomRgb());  
   const [red,setRed]= useState(+initialValues[0]);
   const [green,setGreen]= useState(+initialValues[1]);
   const [blue,setBlue]= useState(+initialValues[2]);
   useEffect(()=>{
      setColor(`rgb(${red},${green},${blue})`);
   },[red,green,blue])
   return( 
      <View>
         <ColorAdjuster 
            color ="red" 
            currentValue={red}
            onIncrease={()=>setRed(red+COLOR_INCREMENT)} 
            onDecrease={()=>setRed(red-COLOR_DECREMENT)}
         />
        <ColorAdjuster 
            color="blue"
            currentValue={blue}
            onIncrease={()=>setBlue(blue+COLOR_INCREMENT)} 
            onDecrease={()=>setBlue(blue-COLOR_DECREMENT)}
          />

        <ColorAdjuster 
            color="green"
            currentValue={green}
            onIncrease={()=>setGreen(green+COLOR_INCREMENT)} 
            onDecrease={()=>setGreen(green-COLOR_DECREMENT)}
        />
        <View style={{ 
          width:150, 
          height:150,
          backgroundColor:color
         }}>
        </View>
      </View>
   )
}
const destructRgbString=color=>{
   const regexPattern = /[\d]+/g;
   const values = color.match(regexPattern);
   return values;
}
export default SquareScreen;