import React from 'react'

const authorMark = '\u00A9';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid mt-4 px-4 py-2 bg-donna">
                <hr/>
                <div className="container-fluid row align-items-center mx-auto">

                    <div className="col">
                            <p>{new Date().getFullYear()} {authorMark} "Donna Maria"</p>
                        <a className="text-white-50" href="#siteMap">Карта Сайта</a>
                    </div>

                    <div className="col text-center">
                        <a className="" href="tel:+79789393001">
                            <img className="rounded rounded-circle img-social" src="/social/phone.png"
                                 alt="+79789393001"/>
                        </a>

                        <a className="" href="#instagram">
                            <img className="rounded rounded-circle img-social" src="/social/pngegg.png" alt="Instagram"/>
                        </a>
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