let Board = React.createClass({
    getInitialState(){

        return {words:[]};
    },
    handleClick(e){

    var word= this.refs.myTxt.value;
    this.state.words.push(word);
        this.setState({words:this.state.words},function(){
            this.refs.myTxt.value='';
        });

    },
    render(){

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>珠峰留言版</h1>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {


                            this.state.words.map((item,index)=>{
                                return <li key={index} className={"list-group-item "+(this.state.currentIndex==index?'active':'')}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="panel-footer">
                    <input type="text" className="form-control" ref="myTxt"/>
                    <button className="btn btn-primary" onClick={this.handleClick}>留言</button>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Board/>,document.querySelector('#container'));