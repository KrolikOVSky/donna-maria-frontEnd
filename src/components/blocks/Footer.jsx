import React from 'react'
import {Link} from "react-router-dom";

const authorMark = '\u00A9';

// noinspection SpellCheckingInspection
export class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid mt-4 px-4 py-2 bg-donna">
                <hr/>
                <div className="container-fluid row align-items-center mx-auto">

                    <div className="col">
                            <p>{new Date().getFullYear()} {authorMark} "Итальянцы в России"</p>
                        <Link className="text-white-50" to={"#siteMap"}>Карта Сайта</Link>
                    </div>

                    <div className="col text-center">
                        <a className="" href="tel:+79789393001">
                            <img className="rounded rounded-circle img-social" src={"/social/phone.png"}
                                 alt="+79789393001"/>
                        </a>

                        <Link className="" to={"#instagram"}>
                            <img className="rounded rounded-circle img-social" src={"/social/pngegg.png"} alt="Instagram"/>
                        </Link>
                    </div>

                    <div className="col">
                        <p align="right">Site was created by</p>
                        <p align="right" className="m-0">KrolikOVSky</p>
                    </div>
                </div>
                <hr/>
            </footer>
        )
    }
}