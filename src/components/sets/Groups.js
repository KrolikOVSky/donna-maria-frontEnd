import React from 'react'
import {Group} from "../Group";
import axios from "axios";

export class Groups extends React.Component {

    state = {
        groups: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/gro`)
            .then(res => {
                const groups = res.data;
                this.setState({ groups });
            })

    }


    render() {
        this.state.groups.map(group => (
            console.log("Image = " + group.imageFileName + "\n")
        ))

        return (
            <div align="center" className="container-fluid">
                <div className="container-fluid row gap-3">
                    {
                        this.state.groups.map(group => (
                            <Group key={group.id} name={group.name} img={ group.imageFileName === null ? "images/6.png" : group.imageFileName }/>
                        ))
                    }
                </div>
            </div>
        )
    }
}