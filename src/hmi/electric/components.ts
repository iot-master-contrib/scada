import { HmiCollection } from "../hmi";
import { ElectricSwitch } from "./switch";
import { HmiSvgComponent, createSvgComponent } from "../creator";
import {CapacitorSvg} from "./capacitor.embed";
import {CapacitorMeta} from "./capacitor.meta";
import {ArrowUpBoldSvg} from "./arrow-up-bold.embed";
import {ArrowUpBoldMeta} from "./arrow-up-bold.meta";
import {Electric1Svg} from "./electric1.embed";
import {Electric2Svg} from "./electric2.embed";
import {Electric3Svg} from "./electric3.embed";
import {Electric4Svg} from "./electric4.embed";
import {Electric5Svg} from "./electric5.embed";
import {Electric6Svg} from "./electric6.embed";
import {Electric7Svg} from "./electric7.embed";
import {Electric8Svg} from "./electric8.embed";
import {Electric9Svg} from "./electric9.embed";
import {Electric10Svg} from "./electric10.embed";
import {Electric11Svg} from "./electric11.embed";
import {Electric12Svg} from "./electric12.embed";
import {Electric13Svg} from "./electric13.embed";
import {Electric14Svg} from "./electric14.embed";
import {Electric15Svg} from "./electric15.embed";
import {Electric16Svg} from "./electric16.embed";
import {Electric17Svg} from "./electric17.embed";
import {Electric18Svg} from "./electric18.embed";
import {Electric19Svg} from "./electric19.embed";
import {Electric20Svg} from "./electric20.embed";
import {Electric1Meta} from "./electric1.meta";
import {Electric2Meta} from "./electric2.meta";
import {Electric3Meta} from "./electric3.meta";
import {Electric4Meta} from "./electric4.meta";
import {Electric5Meta} from "./electric5.meta";
import {Electric6Meta} from "./electric6.meta";
import {Electric7Meta} from "./electric7.meta";
import {Electric8Meta} from "./electric8.meta";
import {Electric9Meta} from "./electric9.meta";
import {Electric10Meta} from "./electric10.meta";
import {Electric11Meta} from "./electric11.meta";
import {Electric12Meta} from "./electric12.meta";
import {Electric13Meta} from "./electric13.meta";
import {Electric14Meta} from "./electric14.meta";
import {Electric15Meta} from "./electric15.meta";
import {Electric16Meta} from "./electric16.meta";
import {Electric17Meta} from "./electric17.meta";
import {Electric18Meta} from "./electric18.meta";
import {Electric19Meta} from "./electric19.meta";
import {Electric20Meta} from "./electric20.meta";

const images: HmiSvgComponent[] = [
    { id: 'electric-1', name: '', svg: Electric1Svg, ...Electric1Meta },
    { id: 'electric-2', name: '', svg: Electric2Svg, ...Electric2Meta },
    { id: 'electric-3', name: '', svg: Electric3Svg, ...Electric3Meta },
    { id: 'electric-4', name: '', svg: Electric4Svg, ...Electric4Meta },
    { id: 'electric-5', name: '', svg: Electric5Svg, ...Electric5Meta },
    { id: 'electric-6', name: '', svg: Electric6Svg, ...Electric6Meta },
    // { id: 'electric-7', name: '', svg: Electric7Svg, ...Electric7Meta },
    { id: 'electric-8', name: '', svg: Electric8Svg, ...Electric8Meta },
    { id: 'electric-9', name: '', svg: Electric9Svg, ...Electric9Meta },
    // { id: 'electric-10', name: '', svg: Electric10Svg, ...Electric10Meta },
    // { id: 'electric-11', name: '', svg: Electric11Svg, ...Electric11Meta },
    // { id: 'electric-12', name: '', svg: Electric12Svg, ...Electric12Meta },
    // { id: 'electric-13', name: '', svg: Electric13Svg, ...Electric13Meta },
    // { id: 'electric-14', name: '', svg: Electric14Svg, ...Electric14Meta },
    // { id: 'electric-15', name: '', svg: Electric15Svg, ...Electric15Meta },
    // { id: 'electric-16', name: '', svg: Electric16Svg, ...Electric16Meta },
    // { id: 'electric-17', name: '', svg: Electric17Svg, ...Electric17Meta },
    // { id: 'electric-18', name: '', svg: Electric18Svg, ...Electric18Meta },
    // { id: 'electric-19', name: '', svg: Electric19Svg, ...Electric19Meta },
    // { id: 'electric-20', name: '', svg: Electric20Svg, ...Electric20Meta },
    { id: 'electric-capacitor', name: '', svg: CapacitorSvg, ...CapacitorMeta },
    { id: 'electric-arrow', name: '', svg: ArrowUpBoldSvg, ...ArrowUpBoldMeta },
]
console.log(images, '--images')
export const ElectricComponents: HmiCollection = {
    name: '电力组件',
    // hmi: images.map(img => createImageComponent(img)).concat([ElectricSwitch])
    components: images.map(img => createSvgComponent(img)).concat([ElectricSwitch])
}
