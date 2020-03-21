import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import ColorAdjuster from "../components/ColorAdjuster";
import {randomRgb} from '../common/helpers';

const COLOR_INCREMENT= 10;
const COLOR_DECREMENT= 5;
const MAX_COLOR_VALUE=256;
const MIN_COLOR_VALUE =0;
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
            onIncrease={()=>setRed(Math.min(red+COLOR_INCREMENT,MAX_COLOR_VALUE))} 
            onDecrease={()=>setRed(Math.max(red-COLOR_DECREMENT,MIN_COLOR_VALUE))}
         />
        <ColorAdjuster 
            color="blue"
            currentValue={blue}
            onIncrease={()=>setBlue(Math.min(blue+COLOR_INCREMENT,MAX_COLOR_VALUE))} 
            onDecrease={()=>setBlue(Math.max(blue-COLOR_DECREMENT,MIN_COLOR_VALUE))}
          />

        <ColorAdjuster 
            color="green"
            currentValue={green}
            onIncrease={()=>setGreen(Math.min(green+COLOR_INCREMENT,MAX_COLOR_VALUE))} 
            onDecrease={()=>setGreen(Math.max(green-COLOR_DECREMENT,MIN_COLOR_VALUE))}
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