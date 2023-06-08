import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HmiComponent, HmiDraw} from "../hmi";
import {CanvasComponent} from "./canvas/canvas.component";
import {RequestService} from "../request.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    id: any = ''
    content: any = {
        pages: [
            {
                name: "首页",
                content: []
            }
        ]
    }

    @ViewChild("canvas") canvas!: CanvasComponent

    constructor(private title: Title,
                private rs: RequestService,
                private msg: NzMessageService,
                private router: Router,
                private route: ActivatedRoute,) {
        title.setTitle("组态编辑器")
    }

    ngOnInit(): void {
        if (this.route.snapshot.paramMap.has('id')) {
            this.id = this.route.snapshot.paramMap.get('id');
            this.rs.get(`api/project/${this.id}`).subscribe((res) => {
                this.content = res.data;
                //this.content = JSON.stringify(resData, undefined, '\t');
            });
        }
    }

    onDrag($event: HmiDraw) {
        this.canvas.Draw($event)
    }
}
