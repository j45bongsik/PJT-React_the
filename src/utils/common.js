import { getAllByAltText } from "@testing-library/react"
import imgInfo01 from "../assets/images/img-test01.png"
import imgInfo02 from "../assets/images/img-test02.png"
import imgInfo03 from "../assets/images/img-test03.png"
import imgInfo04 from "../assets/images/img-test04.png"
import imgInfo05 from "../assets/images/img-test05.png"
import imgInfo06 from "../assets/images/img-test06.png"
import imgInfo07 from "../assets/images/img-test07.png"
import imgInfo08 from "../assets/images/img-test08.png"
import imgInfo09 from "../assets/images/img-test09.png"
import imgInfo10 from "../assets/images/img-test10.png"


export const IMG_LIST = () => {

    let imgList = [
        {id:0, alt: "test01", src: imgInfo01, name: "coffee1에 대한 설명이미지1에 대한 설명이미지1에 대한 설명이미지1에 대한 설명 이미지1에 대한 설명이미지1에 대한 설명이미지1에 대한 설명이미지1에 대한 설명 이미지1에 대한 설명이미지1에 대한 설명이미지1에 대한 설명이미지1에 대한 설명", link: "/coffee/", key:"coffee" },
        {id:1, alt: "test02", src: imgInfo02, name: "coffee2에 대한 설명", link: "/test02", key:"coffee"  },
        {id:2, alt: "test03", src: imgInfo03, name: "coffee3에 대한 설명", link: "/test03", key:"coffee"  },
        {id:3, alt: "test04", src: imgInfo04, name: "food4에 대한 설명", link: "/test04", key:"food"  },
        {id:4, alt: "test05", src: imgInfo05, name: "food5에 대한 설명", link: "/test05", key:"food"  },
        {id:5, alt: "test06", src: imgInfo06, name: "food6에 대한 설명", link: "/test06", key:"food"  },
        {id:6, alt: "test07", src: imgInfo07, name: "food7에 대한 설명", link: "/test07", key:"food"  },
        {id:7, alt: "test08", src: imgInfo08, name: "food8에 대한 설명", link: "/test08", key:"food"  },
        {id:8, alt: "test09", src: imgInfo09, name: "etc9에 대한 설명", link: "/test09", key:"etc"  },
        {id:9, alt: "test10", src: imgInfo10, name: "etc10에 대한 설명", link: "/test10", key:"etc"  },
        {id:10, alt: "test10+", src: imgInfo10, name: "etc10에 대한 설명", link: "/test10", key:"etc"  }
    ]

    return [imgList]
}






// export const LNB_LIST = () => {
    
//     let lnbList = [
//         {
//             listId: 0,
//             listItem: ["cf00-01","cf00-02","cf00-03"],
//             link: ['coffee/01', 'coffee/02','coffee/03'] 
//         },
//         {
//             listId: 1,
//             listItem: ["fd01-01","fd01-02","fd01-03","fd01-04"],
//             link: ['/fd/01', '/fd/02','/fd/03'] 
//         },
//         {
//             listId: 2,
//             listItem: ["etc02-01","etc02-02","etc02-03","etc02-04","etc02-05"],
//             link: ['/etc/01', '/etc/02','/etc/03'] 
//         },
//     ]

//     return [lnbList]

// }
    

export const MENU_LIST = () => {

    let menuList = [
        {
            id: 0,
            name: 'coffee',
            link : '/coffee/01',
            dep02: [
                {name: 'dep02-01', link: 'coffee/01'},
                {name: 'dep02-02', link: 'coffee/02'},
                {name: 'dep02-03', link: 'coffee/03'}
            ],
            lnb: [
                {lnbItem: "cf01", lnbLink: "coffee/01"},
                {lnbItem: "cf02", lnbLink: "coffee/02"},
                {lnbItem: "cf03", lnbLink: "coffee/03"},
            ]
        },
        {
            id: 1,
            name: 'food',
            link : '/food/01',
            dep02: [
                {name: 'dep02-01', link: 'food/01'},
                {name: 'dep02-02', link: 'food/02'},
                {name: 'dep02-03', link: 'food/03'},
                {name: 'dep02-04', link: 'food/04'}
            ],
            lnb: [
                {lnbItem: "fd01", lnbLink: "food/01"},
                {lnbItem: "fd02", lnbLink: "food/02"},
                {lnbItem: "fd03", lnbLink: "food/03"},
                {lnbItem: "fd04", lnbLink: "food/04"},

            ]
        },
        {
            id: 2,
            name: 'etc',
            link : '/etc/01',
            dep02: [
                {name: 'dep02-01', link: 'etc/01'},
                {name: 'dep02-02', link: 'etc/02'},
                {name: 'dep02-03', link: 'etc/03'},
                {name: 'dep02-04', link: 'etc/04'}
            ],
            lnb: [
                {lnbItem: "etc01", lnbLink: "etc/01"},
                {lnbItem: "etc02", lnbLink: "etc/02"},
                {lnbItem: "etc03", lnbLink: "etc/03"},
                {lnbItem: "etc04", lnbLink: "etc/04"},
                {lnbItem: "etc05", lnbLink: "etc/05"},

            ]
            
        },
    ]

    return [menuList]

}


