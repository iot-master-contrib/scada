import { HmiCollection } from "../hmi";
import { HmiPathComponent, createPathComponent } from "../creator";
import { Device1Svg } from "./device1.embed";
import { Device2Svg } from "./device2.embed";
import { Device3Svg } from "./device3.embed";
import { Device4Svg } from "./device4.embed";
import { Device5Svg } from "./device5.embed";
import { Device6Svg } from "./device6.embed";
import { Device7Svg } from "./device7.embed";
import { Device8Svg } from "./device8.embed";
import { Device9Svg } from "./device9.embed";
import { Device10Svg } from "./device10.embed";
import { Device11Svg } from "./device11.embed";
import { Device12Svg } from "./device12.embed";
import { Device1Meta } from "./device1.meta";
import { Device2Meta } from "./device2.meta";
import { Device3Meta } from "./device3.meta";
import { Device4Meta } from "./device4.meta";
import { Device5Meta } from "./device5.meta";
import { Device6Meta } from "./device6.meta";
import { Device7Meta } from "./device7.meta";
import { Device8Meta } from "./device8.meta";
import { Device9Meta } from "./device9.meta";
import { Device10Meta } from "./device10.meta";
import { Device11Meta } from "./device11.meta";
import { Device12Meta } from "./device12.meta";

import { Pipe1Svg } from "./pipe1.embed";
import { Pipe2Svg } from "./pipe2.embed";
import { Pipe3Svg } from "./pipe3.embed";
import { Pipe4Svg } from "./pipe4.embed";
import { Pipe5Svg } from "./pipe5.embed";
import { Pipe6Svg } from "./pipe6.embed";
import { Pipe7Svg } from "./pipe7.embed";
import { Pipe8Svg } from "./pipe8.embed";
import { Pipe9Svg } from "./pipe9.embed";
import { Pipe10Svg } from "./pipe10.embed";
import { Pipe11Svg } from "./pipe11.embed";
import { Pipe1Meta } from "./pipe1.meta";
import { Pipe2Meta } from "./pipe2.meta";
import { Pipe3Meta } from "./pipe3.meta";
import { Pipe4Meta } from "./pipe4.meta";
import { Pipe5Meta } from "./pipe5.meta";
import { Pipe6Meta } from "./pipe6.meta";
import { Pipe7Meta } from "./pipe7.meta";
import { Pipe8Meta } from "./pipe8.meta";
import { Pipe9Meta } from "./pipe9.meta";
import { Pipe10Meta } from "./pipe10.meta";
import { Pipe11Meta } from "./pipe11.meta";

const images: HmiPathComponent[] = [
    { id: 'industry-device1', name: '', svg: Device1Svg, ...Device1Meta },
    { id: 'industry-device2', name: '', svg: Device2Svg, ...Device2Meta },
    { id: 'industry-device3', name: '', svg: Device3Svg, ...Device3Meta },
    { id: 'industry-device4', name: '', svg: Device4Svg, ...Device4Meta },
    { id: 'industry-device5', name: '', svg: Device5Svg, ...Device5Meta },
    { id: 'industry-device6', name: '', svg: Device6Svg, ...Device6Meta },
    { id: 'industry-device7', name: '', svg: Device7Svg, ...Device7Meta },
    { id: 'industry-device8', name: '', svg: Device8Svg, ...Device8Meta },
    { id: 'industry-device9', name: '', svg: Device9Svg, ...Device9Meta },
    { id: 'industry-device10', name: '', svg: Device10Svg, ...Device10Meta },
    { id: 'industry-device11', name: '', svg: Device11Svg, ...Device11Meta },
    { id: 'industry-device12', name: '', svg: Device12Svg, ...Device12Meta },

    { id: 'industry-pipe1', name: '', svg: Pipe1Svg, ...Pipe1Meta },
    { id: 'industry-pipe2', name: '', svg: Pipe2Svg, ...Pipe2Meta },
    { id: 'industry-pipe3', name: '', svg: Pipe3Svg, ...Pipe3Meta },
    { id: 'industry-pipe4', name: '', svg: Pipe4Svg, ...Pipe4Meta },
    { id: 'industry-pipe5', name: '', svg: Pipe5Svg, ...Pipe5Meta },
    { id: 'industry-pipe6', name: '', svg: Pipe6Svg, ...Pipe6Meta },
    { id: 'industry-pipe7', name: '', svg: Pipe7Svg, ...Pipe7Meta },
    { id: 'industry-pipe8', name: '', svg: Pipe8Svg, ...Pipe8Meta },
    { id: 'industry-pipe9', name: '', svg: Pipe9Svg, ...Pipe9Meta },
    { id: 'industry-pipe10', name: '', svg: Pipe10Svg, ...Pipe10Meta },
    { id: 'industry-pipe11', name: '', svg: Pipe11Svg, ...Pipe11Meta },
]
//console.log(images, '--images')
export const IndustryComponents: HmiCollection = {
    name: '工业组件',
    components: images.map(img => createPathComponent(img))
}

