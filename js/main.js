let Nav = React.createClass({
    render(){
        let style={
            "font-weight": "600",
            "font-family":"Menlo, Monaco, Consolas, 'Courier New', monospace",
            "font-style": "normal",
            "font-size": "16px"
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
           <p style={styleResume}><a className="btn btn-primary btn-lg btn-success" href="#from" role="button">start</a></p>
       </div>
    }
});
let FormMe = React.createClass({
   render(){
       let warning={
         "color":"red"
       };
       let more={
          "font-size":"10px",
          "color":"#5bbc2e"
       };
       return <div id="from">
                 <div className="panel panel-default">
                   <div className="panel-heading">自我介绍</div>
                   <div className="panel-body">
                       <p>开场很直接，我直接说一下我的经历吧，大学学的不是计算机专业的我抱着对计算机的热爱喜欢上了IT行业，毕业后有报培训班系统学习web前端，所以对于坚持想要本专业以及不喜欢培训出来的Leader当您看到这个<span style={warning}>***</span>重点标识符的时候就可以关上网页继续寻找您的理想下属了。在这一年多的工作中，自己主要负责使用easyui框架写前端页面，以及JS处理前后台的数据。因为是国企，工作并不忙，所以平时也有接一些其他的工作，和朋友合作一些其他项目，包括App,H5以及一些企业建站等项目，也让自己没有把基础的忘记，并且平时有自学一些自己感兴趣的东西，像React,es6,Webpack,Gulp等<a href="" style={more}>更多/技术自我打分</a></p>
                 </div>
                 <table className="table table-bordered">
                     <thead>
                       <tr className="active">
                           <th className="col-md-3">姓名</th>
                           <th className="col-md-3">工作年限</th>
                           <th className="col-md-3">求职意向</th>
                           <th className="col-md-3">期望薪资</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                           <td>胡文哲</td>
                           <td>一年半</td>
                           <td>Wed前端(希望是React方向)</td>
                           <td>8-10K</td>
                       </tr>
                     </tbody>
                     <tbody>
                       <tr className="warning">
                           <th className="col-md-3">学历</th>
                           <th className="col-md-3">住址</th>
                           <th className="col-md-3">电话</th>
                           <th className="col-md-3">邮箱</th>
                       </tr>
                     </tbody>
                     <tbody>
                       <tr>
                           <td>本科</td>
                           <td>13号线</td>
                           <td>15910377030</td>
                           <td>825846102@qq.com</td>
                       </tr>
                     </tbody>
                 </table>
       </div>
       </div>
   }
});
let Project = React.createClass({
    render(){
       return<div class="row">
               <div class="col-sm-6 col-md-4">
                   <div class="thumbnail">
                       <img data-src="holder.js/300x300" alt="..." />
                           <div class="caption">
                               <h3>Thumbnail label</h3>
                               <p>...</p>
                               <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                           </div>
                   </div>
               </div>
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
                   <FormMe/>
                   <Project/>
                </div>
             </div>
    }
});

ReactDOM.render(
    <AppMain/>,
    document.getElementById("app")
);