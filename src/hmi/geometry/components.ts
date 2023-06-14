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
import {ArrowLeftSvg} from "./arrow-left.embed";
import {ArrowLeftMeta} from "./arrow-left.meta";
import {ArrowRightSvg} from "./arrow-right.embed";
import {ArrowRightMeta} from "./arrow-right.meta";
import {ArrowLeftBlockSvg} from "./arrow-left-block.embed";
import {ArrowLeftBlockMeta} from "./arrow-left-block.meta";
import {ArrowRightBlockSvg} from "./arrow-right-block.embed";
import {ArrowRightBlockMeta} from "./arrow-right-block.meta";
import {LeftSvg} from "./left.embed";
import {LeftMeta} from "./left.meta";
import {RightSvg} from "./right.embed";
import {RightMeta} from "./right.meta";

const images: HmiSvgComponent[] = [
    {id: 'cube', svg: CubeSvg, ...CubeMeta},
    {id: 'cylinder', svg: CylinderSvg, ...CylinderMeta},
    {id: 'forbidden', svg: ForbiddenSvg, ...ForbiddenMeta},
    {id: 'pentagon', svg: PentagonSvg, ...PentagonMeta},
    {id: 'pentagram', svg: PentagramSvg, ...PentagramMeta},
    {id: 'rhombus', svg: RhombusSvg, ...RhombusMeta},
    {id: 'left', svg: LeftSvg, ...LeftMeta},
    {id: 'right', svg: RightSvg, ...RightMeta},
    {id: 'arrow-left', svg: ArrowLeftSvg, ...ArrowLeftMeta},
    {id: 'arrow-right', svg: ArrowRightSvg, ...ArrowRightMeta},
    {id: 'arrow-left-block', svg: ArrowLeftBlockSvg, ...ArrowLeftBlockMeta},
    {id: 'arrow-right-block', svg: ArrowRightBlockSvg, ...ArrowRightBlockMeta},
]

export const GeometryComponents: HmiCollection = {
    name: '几何组件',
    components: images.map(img => createSvgComponent(img))
}
