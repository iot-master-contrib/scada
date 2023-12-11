import {Component} from '@angular/core';
import {RequestService} from "../../request.service";
import {NzModalRef} from "ng-zorro-antd/modal";
import {Md5} from 'ts-md5';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    validateForm!: FormGroup;

    constructor(private fb: FormBuilder,
                private rs: RequestService,
                private router: Router,
                private mr: NzModalRef
    ) {
        //  this.oem = os.oem;
    }

    submitForm(): void {
        console.log('submit form');
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (!this.validateForm.valid) {
            return;
        }

        const password = Md5.hashStr(this.validateForm.value.password);

        this.rs.get('/api/auth', {username: this.validateForm.value.username, password}).subscribe(res => {
            console.log('res:', res);
            //TODO 缓存用户喜好
            // let main = localStorage.getItem("main") || "/admin"

            this.mr.close("ok")
        }, err => {
            console.log('err:', err);
        });
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [false]
        });
    }
}
