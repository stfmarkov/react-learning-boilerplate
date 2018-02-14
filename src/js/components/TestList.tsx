import * as React from "react";
import { connect } from "react-redux";


import { deleteTest } from "../actions/testActions";
import { addTest } from "../actions/testActions";
import { TestItem } from "./TestItem";
import { AddTest } from "./AddTest";


class TestList extends React.Component<any, any> {
    public render() {

        let items = this.props.tests;

        items = items.map( (item:string, index:number) => {
            return <TestItem item={item} key={index} onRemove={this.handleRemove}></TestItem>
        });
        
        return (
            <div>
                <h1 className="main-heading">I'm tests page</h1>
                <ul className="data-list">
                    {items}
                </ul>

                <AddTest onAdd={this.handleAdd}></AddTest>
            </div>
        )
    }

    constructor(props: any){
        super(props);

        this.handleRemove = this.handleRemove.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleRemove(item:string) {
        this.props.deleteTest(item);
    }

    handleAdd(item:string) {
        this.props.addTest(item);
    }
}

const mapStateToProps = (state:any) => {
    return {
        tests: state.test.tests,
    }
  }
  
  const mapDispatchToProps = (dispatch:any) => {
    return {
        deleteTest: (test:string) => {
            dispatch(deleteTest(test))
        }, 

        addTest: (test:string) => {
            dispatch(addTest(test))
        }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(TestList);