import {Component, ElementRef, OnInit} from '@angular/core';
import {HmiPage, HmiProject} from '../hmi';
import {Graph} from "@antv/x6";
import {Title} from "@angular/platform-browser";
import {RequestService} from "../request.service";
import {ComponentService} from "../component.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
    id: any = ''

    project!: HmiProject
    graph!: Graph;

    index = 0;

    constructor(
        private title: Title,
        private element: ElementRef,
        private rs: RequestService,
        protected cs: ComponentService,
        private route: ActivatedRoute,
    ) {
        //title.setTitle(this.project.name)
        this.graph = new Graph({
            container: element.nativeElement,
            interacting: false,
        });

        this.graph.on('cell:click', ({cell, e}) => {
            let cmp = this.cs.Get(cell.shape)
            // @ts-ignore
            cmp?.listeners?.click?.call(this, cell, e)
        });

        this.graph.on('cell:mouseenter', ({cell, e}) => {
            //console.log("cell:mouseenter", cell.shape)
            let cmp = this.cs.Get(cell.shape)
            // @ts-ignore
            cmp?.listeners?.mouseenter?.call(this, cell, e)
        });

        this.graph.on('cell:mouseleave', ({cell, e}) => {
            //console.log("cell:mouseleave")
            let cmp = this.cs.Get(cell.shape)
            // @ts-ignore
            cmp?.listeners?.mouseleave?.call(this, cell, e)
        });
    }

    public Render(page: HmiPage) {
        page.content?.cells?.forEach((cell: any) => {
            const cmp = this.cs.Get(cell.shape)
            //TODO 使用filter 过滤掉找不到组件的情况
        })
        this.graph.drawBackground({
            color: page.background_color,
            image: page.background_image,
        })
        this.graph.fromJSON(page.content)
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.rs.get(`api/project/${this.id}`).subscribe((res) => {
            this.project = res.data;
            this.title.setTitle(this.project.name)
            this.Render(this.project.pages[0])
        });
    }

    handlePageChange($event: number) {
        this.Render(this.project.pages[this.index])
    }
}
