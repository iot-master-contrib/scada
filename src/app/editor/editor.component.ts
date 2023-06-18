import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HmiComponent, HmiDraw, HmiProject, projectTemplate} from "../../hmi/hmi";
import {CanvasComponent} from "./canvas/canvas.component";
import {RequestService} from "../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {ActivatedRoute, Router} from "@angular/router";
import {ComponentService} from "../component.service";

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    id: any = ''

    project: HmiProject = projectTemplate()
    index = 0;

    scale = 1;

    @ViewChild("canvas") canvas!: CanvasComponent

    constructor(
        private title: Title,
        private rs: RequestService,
        private msg: NzMessageService,
        private router: Router,
        private route: ActivatedRoute,
        protected cs: ComponentService,
    ) {

        title.setTitle(this.project.name)
    }

    ngOnInit(): void {
        if (this.route.snapshot.paramMap.has('id')) {
            this.id = this.route.snapshot.paramMap.get('id');
            this.rs.get(`api/project/${this.id}`).subscribe((res) => {
                this.project = res.data;
                //this.content = JSON.stringify(resData, undefined, '\t');
                this.title.setTitle(this.project.name)
                //this.canvas.graph.fromJSON(this.project.pages[0].content)
                this.canvas.Render(this.project.pages[0])
            });
        }
    }

    onDrag($event: HmiDraw) {
        this.canvas.Draw($event)
    }

    handleSave() {
        this.project.pages[this.index].content = this.canvas.graph.toJSON()

        let url = this.id ? `api/project/${this.id}` : `api/project/create`

        this.rs.post(url, this.project).subscribe((res) => {
            //this.project = res.data;
            //this.content = JSON.stringify(resData, undefined, '\t');
            this.router.navigateByUrl("/admin/project")
        });
    }

    handlePageChange($event: number) {
        //保存当前页
        this.project.pages[this.index].content = this.canvas.graph.toJSON()
        this.index = $event
        //渲染新页
        this.canvas.Render(this.project.pages[this.index])
    }


    leftWidth = 200;
    leftWidthMin = 200;
    rightWidth = 250;
    rightWidthMin = 250;
    leftOn = false;
    rightOn = false;
    lastX = 0;


    onLeftDown($event: MouseEvent) {
        //console.log('left down', $event)
        this.leftOn = true
        this.lastX = $event.screenX
    }

    onRightDown($event: MouseEvent) {
        this.rightOn = true
        this.lastX = $event.screenX
    }

    onMoseMove($event: MouseEvent) {
        let dx = $event.screenX - this.lastX;
        if (this.leftOn) {
            if (dx < 0 && this.leftWidth <= this.leftWidthMin)
                return
            this.leftWidth += $event.screenX - this.lastX
        }
        if (this.rightOn) {
            if (dx > 0 && this.rightWidth <= this.rightWidthMin)
                return
            this.rightWidth -= $event.screenX - this.lastX
        }
        this.lastX = $event.screenX
    }

    onMouseUp($event: MouseEvent) {
        this.leftOn = false
        this.rightOn = false
    }
}
