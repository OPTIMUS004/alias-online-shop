import { Component } from '@angular/core';


@Component ({
	selector: 'app-footer',
    template: `
        <footer>
            <div class="row">
                <small class="flex">
                <p>All rights reserved: &copy; Integral 2020</p>
                </small>
            </div>
            <div class="row flex-container">
                <div class="col-md-4 flex">
                    <i class="fa fa-facebook"></i>
                </div>
                <div class="col-md-4 flex">
                    <i class="fa fa-twitter"></i>
                </div>
                <div class="col-md-4 flex">
                    <i class="fa fa-instagram"></i>
                </div>
            </div>
        </footer>
    `,
    styles: [`
                .flex{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    height: 100px;
                    width: 100%;
                    background: #aaa;
                    color: #111;
                }
                .fa{
                    border: 1px solid #fff;
                    border-radius: 50%;
                    padding: 6px;
                }
                footer{ margin-top: 50px; }
            `]
})
export class FooterComponent{}