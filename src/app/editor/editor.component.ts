import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HmiComponent, HmiDraw, HmiProject } from "../hmi";
import { CanvasComponent } from "./canvas/canvas.component";
import { RequestService } from "../request.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    id: any = ''
    initalproject: HmiProject = {
        id: '',
        name: '组态编辑器',
        desc: '',
        width: window.screen.width, //自动获取屏幕尺寸
        height: window.screen.height,
        pages: [
            {
                name: "首页",
                content: {}
            }
        ]
    }
    project!: HmiProject

    @ViewChild("canvas") canvas!: CanvasComponent

    constructor(
        private title: Title,
        private rs: RequestService,
        private msg: NzMessageService,
        private router: Router,
        private route: ActivatedRoute,) {
        this.project = Object.assign(
            this.initalproject,
            JSON.parse(localStorage.getItem('project_setting') || '{}'),
        );
        console.log(this.project)
        title.setTitle(this.project.name)
    }

    ngOnInit(): void {
        if (this.route.snapshot.paramMap.has('id')) {
            this.id = this.route.snapshot.paramMap.get('id');
            this.rs.get(`api/project/${this.id}`).subscribe((res) => {
                this.project = res.data;
                //this.content = JSON.stringify(resData, undefined, '\t');
            });
        }
    }

    onDrag($event: HmiDraw) {
        this.canvas.Draw($event)
    }
    saveProjectSettings(project: HmiProject) {
        this.project = project;
        localStorage.setItem('project_setting', JSON.stringify(project));
    }
    handleSave() { }
}
