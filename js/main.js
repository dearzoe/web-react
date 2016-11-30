let Nav = React.createClass({
    render(){
        let style={
            "font-weight": "600",
            "font-family":"Menlo, Monaco, Consolas, 'Courier New', monospace",
            "font-style": "normal",
            "font-size": "16px",
        };
        let styleActive={
            "background":"#5bbc2e"
        };
            return <ul className="nav nav-pills" role="tablist">
                        <li role="presentation" className="active" style={styleActive}><a href="#">主页</a></li>
                        <li role="presentation"><a href="#">自我介绍</a></li>
                        <li role="presentation"><a href="#">项目经验</a></li>
                        <li role="presentation" className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                更多 <span className="caret"></span>
                            </a>
                            <ul style={style} className="dropdown-menu" role="menu">
                                <li><a href="#">技术自我打分</a></li>
                                <li><a href="#">未来规划</a></li>
                                <li className="divider"></li>
                                <li><a href="https://github.com/dearzoe"  style={style}>MyGitHub</a></li>
                            </ul>
                        </li>
                    </ul>
    }
});
let Jumbotron = React.createClass({
    render(){
        let styleFuture={
            "margin-top":"100px",
            "text-align": "center",
            "font-weight": "900",
            "color": "#5bbc2e",
            "font-size": "70px",
            "line-height": "70px"
        };
        let styleResume={
            "margin-top":"30px",
            "text-align":"center"
        };
       return   <div className="jumbotron">
           <h1 style={styleFuture}>Hello,MyFuture!</h1>
           <p style={styleResume}>This is my resume for introduce myself~</p>
           <p style={styleResume}><a className="btn btn-primary btn-lg btn-success" href="#" role="button">start</a></p>
       </div>
    }
});
let FormMe = React.createClass({
   render(){
       return <div>

              </div>
   }
});






let AppMain=React.createClass({
    render(){
      return <div>
                <div className="container">
                   <Nav/>
                </div>
                <Jumbotron/>
                <div className="container">

                </div>
             </div>
    }
});

ReactDOM.render(
    <AppMain/>,
    document.getElementById("app")
);