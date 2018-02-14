import * as React from "react";

interface componentProps{
    item:string,
    key:number,
    onRemove:Function
}

interface componentState{}

export class TestItem extends React.Component<componentProps, componentState> {
    public render() {
        return (
            <li className="data-list__item">
                {this.props.item} 
                <span className="data-list__close"  onClick={this.remove}>X</span>
            </li>  
        )
    }

    constructor(props: componentProps){
        super(props);

        this.remove = this.remove.bind(this);
    }

    remove(): void {
        this.props.onRemove(this.props.item);
    }
}