import Blue_1 from './pic/blue_1.png'
import Blue_2 from './pic/blue_2.png'
import Blue_3 from './pic/blue_3.png'
import Blue_4 from './pic/blue_4.png'
import Blue_5 from './pic/blue_5.png'
import Blue_6 from './pic/blue_6.png'
import Blue_7 from './pic/blue_7.png'
import Blue_8 from './pic/blue_8.png'
import Blue_9 from './pic/blue_9.png'
import Red_1 from './pic/red_1.png'
import Red_2 from './pic/red_2.png'
import Red_3 from './pic/red_3.png'
import Red_4 from './pic/red_4.png'
import Red_5 from './pic/red_5.png'
import Red_6 from './pic/red_6.png'
import Red_7 from './pic/red_7.png'
import Red_8 from './pic/red_8.png'
import Red_9 from './pic/red_9.png'


import "./Dics.css"

const gameImg={
    blue:[Blue_1,Blue_2,Blue_3,Blue_4,Blue_5,Blue_6,Blue_7,Blue_8,Blue_9],
    red:[Red_1,Red_2,Red_3,Red_4,Red_5,Red_6,Red_7,Red_8,Red_9]
}



function Dics({color,num=1,color3}){
    const src=gameImg[color][num-1]
    const alt=`${color}${num}`

    return(
        <img 
        style={{color:`${color3}`}}
        src={src} alt={alt} />
    )
}


export default Dics;