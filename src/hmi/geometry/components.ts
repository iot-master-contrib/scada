import {HmiCollection} from "../hmi";

import {createSvgComponent, HmiSvgComponent} from "../creator";
import {CubeSvg} from "./cube.embed";
import {CubeMeta} from "./cube.meta";
import {CylinderSvg} from "./cylinder.embed";
import {CylinderMeta} from "./cylinder.meta";
import {ForbiddenSvg} from "./forbidden.embed";
import {ForbiddenMeta} from "./forbidden.meta";
import {PentagonSvg} from "./pentagon.embed";
import {PentagonMeta} from "./pentagon.meta";
import {PentagramSvg} from "./pentagram.embed";
import {PentagramMeta} from "./pentagram.meta";
import {RhombusSvg} from "./rhombus.embed";
import {RhombusMeta} from "./rhombus.meta";

const images: HmiSvgComponent[] = [
    {id: 'cube', name: '', svg: CubeSvg, ...CubeMeta},
    {id: 'cylinder', name: '', svg: CylinderSvg, ...CylinderMeta},
    {id: 'forbidden', name: '', svg: ForbiddenSvg, ...ForbiddenMeta},
    {id: 'pentagon', name: '', svg: PentagonSvg, ...PentagonMeta},
    {id: 'pentagram', name: '', svg: PentagramSvg, ...PentagramMeta},
    {id: 'rhombus', name: '', svg: RhombusSvg, ...RhombusMeta},
]

export const GeometryComponents: HmiCollection = {
    name: '几何组件',
    components: images.map(img => createSvgComponent(img))
}
