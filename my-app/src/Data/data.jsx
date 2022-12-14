import ZaraMan from "../media/ZaraMan.mp4"
import zaraWoman from "../media/zaraWoman.mp4"
import ZaraManImg1 from "../media/ZaraManImg1.jpg"
import ZaraManImg2 from "../media/ZaraManImg2.jpg"
import ZaraManImg3 from "../media/ZaraManImg3.jpg"
import ZaraWomanImg1 from "../media/ZaraWomanImg1.jpg"
import ZaraWomanImg2 from "../media/ZaraWomanImg2.jpg"
import ZaraWomanImg3 from "../media/ZaraWomanImg3.jpg"
import ZaraKidsImg1 from "../media/ZaraKidsImg1.jpg"
import ZaraKidsImg2 from "../media/ZaraKidsImg2.jpg"
import ZaraKidsImg3 from "../media/ZaraKidsImg3.jpg"
import ZaraKids from "../media/ZaraKids.mp4"



export const dataSlider = [
    {
      id: 1,
      title: ZaraMan,
      target:"/men"
    },
    {
      id: 2,
      title: zaraWoman,
      target:"/women"
    },{
      id: 3,
      title: ZaraKids,
      target:"/kids"
    }
  ]
  export const dataSliderFooter = [
    {
      id: 'sf1',
      title: "Woman",
      class:"sliderFooter active",
      subTitle: "/women"
    },
    {
      id: 'sf2',
      title: "Man",
      subTitle: "/men"
    },{
      id: 'sf3',
      title: "Kids",
      subTitle: "/kids"
    }
  ]
  export const datadotContainer = [
    {
      id: 'd1',
      title: "dots1",
      class:"sliderFooter active",
      subTitle: "#box1"
    },
    {
      id: 'd2',
      title: "dots2",
      subTitle: "#box2"
    },{
      id: 'd3',
      title: "dots3",
      subTitle: "#box3"
    },{
      id:"d4",
      title:"dots4",
      subTitle: "#box4"
    }
  ]
  export const imageSlider=[
   [
    {
        id:"is1",
        title:ZaraManImg1,
        target:"/men"
    },
    {
        id:"is2",
        title:ZaraWomanImg1,
        target:"/woman"
    },{
        id:"is3",
        title:ZaraKidsImg1,
        target:"/kids"
    }
   ], [
    {
        id:"is4",
        title:ZaraManImg2,
        target:"/men"
    },
    {
        id:"is5",
        title:ZaraWomanImg2,
        target:"/woman"
    },{
        id:"is6",
        title:ZaraKidsImg2,
        target:"/kids"
    }
   ], [
    {
        id:"is7",
        title:ZaraManImg3,
        target:"/men"
    },
    {
        id:"is8",
        title:ZaraWomanImg3,
        target:"/woman"
    },{
        id:"is9",
        title:ZaraKidsImg3,
        target:"/kids"
    }
   ]
  ]