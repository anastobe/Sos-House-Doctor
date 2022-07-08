import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get("window");
// Color

export const COLORS ={
  mainColor: '#205C7E',
  lightmainColor: "#EEF7F6",
  black: "#000",
  btnColor: '#2790BF',
  greenColor: "#8DC53C",
  shadowColor: "#E5E5E5",
  white: "#fff",
  lowOpacityWhite: "fcf7f7",
  lightwhite: "#f4f4f4",
  btnTxtColor: "#6E7071",
  lightFerozee: '#1ab1e8',
  lightTxtColor: '#BEC3C5',
  redCOLOR: "#d2024d",
  btnColor2: "#32b2cb",
  textColor: "#9f9da0",
  lightred: "#e34e5c"
  

};

export const SHADOWBOX ={

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  
  elevation: 2,
  }

  export const SHADOWBOXDARK ={

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 5,
    }

    export const SHADOWELEV_2 ={

    shadowColor: "#000",
    shadowOffset: {
	   width: 0,
	   height: 1, 
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

     elevation: 2,
    
    }

    export const SHADOWELEV_1 ={

      shadowColor: "#000",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.10,
  shadowRadius: 1.41,
  
  elevation: 3,
      }

export const SHADOW ={

shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
}

export const SHADOW_ELEVATION_1 ={

  shadowColor: COLORS.shadowColor,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  
  elevation: 1,
  }
// size 
export const SIZES ={
   //global sizes
    base: 8,
    font: 18,
    radius: 10,
    padding: 10,

    // font Sizes  
    // largeTitle: 50,
    // h1: 30,
    // h2: 22,
    // h3: 18,
    // h4: 14,
    p1: 18,
    p2: 20,
    p3: 12,
    p4: 14,
    p6: 13,
    p5: 16,
    p7: 15,

    //app dimension
    width,
    height
};

// font 
export const FONTS ={
    // h1: { fontFamily: "Times New Roman", fontSize:  SIZES.h1, lineHeight: 36  },
    // h2: { fontFamily: "monospace", fontSize:  SIZES.h2, lineHeight: 30  },
    // h3: { fontFamily: "cursive", fontSize:  SIZES.h3, lineHeight: 22  },
    // h4: { fontFamily: "emoji", fontSize:  SIZES.h4, lineHeight: 22  },
    p1: { fontSize:  SIZES.p1, lineHeight: 22},
    p2: { fontSize:  SIZES.p2, lineHeight: 30  },
    p3: { fontSize:  SIZES.p3  },
    p4: { fontSize:  SIZES.p4, lineHeight: 17  },
    p5: { fontSize:  SIZES.p5  },
    p6: { fontSize:  SIZES.p6  },
    p7: { fontSize:  SIZES.p7  },

};

const APPTHEME = { COLORS, SIZES, FONTS,SHADOW};

export default APPTHEME