import { HmiComponent } from "../hmi";
import { PieSvg } from "./pie.embed";

export const ChartPie: HmiComponent = {
    name: '饼图', id: 'chart-pie', svg: PieSvg, type: "chart",
}
